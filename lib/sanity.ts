export type ServiceItem = {
  id: string;
  heading: string;
  description: string;
  image?: {
    url?: string;
    alt?: string;
  };
};

export type ServiceCategoryItem = {
  id: string;
  heading: string;
  services: ServiceItem[];
};

export type ProductDeliverable = {
  eyebrow: string;
  heading: string;
  documentTitle: string;
  description: string;
  buttonLabel: string;
  document: {
    url: string;
    filename?: string;
  };
};

type SanityService = {
  _key?: string;
  _id?: string;
  heading?: string;
  title?: string;
  description?: string;
  image?: {
    asset?: {
      url?: string;
    };
    alt?: string;
  };
};

type SanityServiceCategory = {
  _key?: string;
  heading?: string;
  services?: SanityService[];
};

type SanityProductServices = {
  _id?: string;
  _key?: string;
  product?: string;
  serviceCategories?: SanityServiceCategory[];
  proofOfDeliverable?: SanityProductDeliverable;
};

type SanityProductDeliverable = {
  eyebrow?: string;
  heading?: string;
  documentTitle?: string;
  description?: string;
  buttonLabel?: string;
  document?: {
    asset?: {
      url?: string;
      originalFilename?: string;
    };
  };
};

const fallbackHomeServices: ServiceItem[] = [
  {
    id: "property-advisory",
    heading: "Property Advisory",
    description:
      "Our comprehensive property advisory services empower investors, developers, and buyers to navigate the real estate market with absolute confidence. By combining strategic land and property identification with rigorous market analysis and valuation, we pinpoint high-yield opportunities and establish accurate asset pricing. Furthermore, our expert development feasibility advisory ensures your projects are financially, legally, and physically viable before you commit capital, effectively mitigating risk and maximizing your return on investment.",
  },
  {
    id: "property-structuring",
    heading: "Property Structuring",
    description:
      "Create a clear property strategy with ownership, financing, and compliance structures designed around your goals. We help shape decisions before purchase, development, or investment so every move is practical, efficient, and built on reliable market context.",
  },
  {
    id: "transaction-management",
    heading: "Transaction Management",
    description:
      "Move through real estate transactions with coordinated support from discovery to closure. Our team manages the details, timelines, documentation, and negotiations that keep deals progressing with clarity and confidence.",
  },
  {
    id: "legal-compliance",
    heading: "Legal & Compliance",
    description:
      "Reduce uncertainty with careful documentation review, regulatory guidance, title coordination, and compliance checks. We help you understand risk clearly before you commit to any property decision.",
  },
  {
    id: "asset-management",
    heading: "Asset Management",
    description:
      "Protect and improve property value through active oversight, performance tracking, tenant coordination, maintenance planning, and practical recommendations that support long-term returns.",
  },
  {
    id: "risk-protection",
    heading: "Risk & Protection",
    description:
      "Identify potential legal, financial, operational, and market risks early. Our advisory process helps you plan safeguards before small issues become expensive property problems.",
  },
  {
    id: "propfrax-service-1",
    heading: "PropFrax Service",
    description:
      "Explore property-backed financial opportunities with guidance designed to simplify evaluation, documentation, and decision-making for fractional or structured real estate participation.",
  },
  {
    id: "propfrax-service-2",
    heading: "PropFrax Service",
    description:
      "Access practical support for real estate financing workflows, including opportunity review, investor communication, risk checks, and organized transaction progress.",
  },
  {
    id: "propfrax-service-3",
    heading: "PropFrax Service",
    description:
      "Build confidence in property-linked financial products with clear advisory, transparent process support, and disciplined review of the underlying real estate fundamentals.",
  },
];

function getSanityConfig() {
  const projectId =
    process.env.SANITY_PROJECT_ID ?? process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "it16j180";
  const dataset =
    process.env.SANITY_DATASET ?? process.env.NEXT_PUBLIC_SANITY_DATASET;
  const apiVersion = process.env.SANITY_API_VERSION ?? "2025-01-01";
  const readToken = process.env.SANITY_READ_TOKEN ?? process.env.NEXT_PUBLIC_SANITY_READ_TOKEN;

  if (!projectId || !dataset) {
    return null;
  }

  return { projectId, dataset, apiVersion, readToken };
}

async function fetchSanityQuery<T>(
  sanity: NonNullable<ReturnType<typeof getSanityConfig>>,
  query: string
): Promise<T | null> {
  const params = new URLSearchParams({ query });

  if (sanity.readToken) {
    params.set("perspective", "previewDrafts");
  }

  const url = `https://${sanity.projectId}.api.sanity.io/v${sanity.apiVersion}/data/query/${sanity.dataset}?${params.toString()}`;

  const response = await fetch(url, {
    cache: "no-store",
    headers: sanity.readToken
      ? {
          Authorization: `Bearer ${sanity.readToken}`,
        }
      : undefined,
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as T;
  return data;
}

function normalizeServices(services: SanityService[] | undefined): ServiceItem[] {
  if (!services?.length) {
    return fallbackHomeServices;
  }

  const normalized: ServiceItem[] = services
    .map((service, index) => {
      const heading = service.heading ?? service.title;
      const description = service.description;

      if (!heading || !description) {
        return null;
      }

      const normalizedService: ServiceItem = {
        id: service._key ?? service._id ?? `${heading}-${index}`,
        heading,
        description,
      };

      if (service.image?.asset?.url) {
        normalizedService.image = {
          url: service.image.asset.url,
          alt: service.image.alt ?? heading,
        };
      }

      return normalizedService;
    })
    .filter((service): service is ServiceItem => Boolean(service));

  return normalized.length ? normalized : fallbackHomeServices;
}

function normalizeServiceCategories(
  categories: SanityServiceCategory[] | undefined
): ServiceCategoryItem[] {
  if (!categories?.length) {
    return [];
  }

  return categories
    .map((category, index) => {
      const heading = category.heading;
      const services = normalizeServices(category.services);

      if (!heading || !services.length) {
        return null;
      }

      return {
        id: category._key ?? `${heading}-${index}`,
        heading,
        services,
      };
    })
    .filter((category): category is ServiceCategoryItem => Boolean(category));
}

function normalizeProductDeliverable(
  deliverable: SanityProductDeliverable | undefined
): ProductDeliverable | null {
  const documentUrl = deliverable?.document?.asset?.url;
  const documentTitle = deliverable?.documentTitle;
  const description = deliverable?.description;

  if (!documentUrl || !documentTitle || !description) {
    return null;
  }

  return {
    eyebrow: deliverable.eyebrow ?? "#4 Our Deliverables",
    heading: deliverable.heading ?? "What You Receive",
    documentTitle,
    description,
    buttonLabel: deliverable.buttonLabel ?? "Download Document",
    document: {
      url: documentUrl,
      filename: deliverable.document?.asset?.originalFilename,
    },
  };
}

export async function getHomeServices(): Promise<ServiceItem[]> {
  const sanity = getSanityConfig();

  if (!sanity) {
    return fallbackHomeServices;
  }

  const query = `*[_type == "home"][0]{
    services[]{
      _key,
      heading,
      title,
      description,
      image{
        alt,
        asset->{
          url
        }
      }
    }
  }`;

  try {
    const data = await fetchSanityQuery<{ result?: { services?: SanityService[] } }>(
      sanity,
      query
    );

    if (!data) {
      return fallbackHomeServices;
    }

    return normalizeServices(data.result?.services);
  } catch {
    return fallbackHomeServices;
  }
}

export async function getProductServiceCategories(
  product: "propx" | "propcare"
): Promise<ServiceCategoryItem[]> {
  const sanity = getSanityConfig();

  if (!sanity) {
    return [];
  }

  const fields = `{
    serviceCategories[]{
      _key,
      heading,
      services[]{
        _key,
        heading,
        description,
        image{
          alt,
          asset->{
            url
          }
        }
      }
    }
  }`;

  const queries = [
    `*[_id == "productServices.${product}"][0]${fields}`,
    `*[_type == "productServices" && product == "${product}"][0]${fields}`,
  ];

  try {
    for (const query of queries) {
      const data = await fetchSanityQuery<{ result?: SanityProductServices }>(sanity, query);
      const categories = normalizeServiceCategories(data?.result?.serviceCategories);

      if (categories.length) {
        return categories;
      }
    }

    return [];
  } catch {
    return [];
  }
}

export async function getProductDeliverable(
  product: "propx" | "propcare"
): Promise<ProductDeliverable | null> {
  const sanity = getSanityConfig();

  if (!sanity) {
    return null;
  }

  const fields = `{
    proofOfDeliverable{
      eyebrow,
      heading,
      documentTitle,
      description,
      buttonLabel,
      document{
        asset->{
          url,
          originalFilename
        }
      }
    }
  }`;

  const queries = [
    `*[_id == "productServices.${product}"][0]${fields}`,
    `*[_type == "productServices" && product == "${product}"][0]${fields}`,
  ];

  try {
    for (const query of queries) {
      const data = await fetchSanityQuery<{ result?: SanityProductServices }>(sanity, query);
      const deliverable = normalizeProductDeliverable(data?.result?.proofOfDeliverable);

      if (deliverable) {
        return deliverable;
      }
    }

    return null;
  } catch {
    return null;
  }
}
