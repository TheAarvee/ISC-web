import type { TemplateResolver } from "sanity";

export const templates: TemplateResolver = (prev) => [
  ...prev,
  {
    id: "product-services-by-product",
    title: "Product Services by Product",
    schemaType: "productServices",
    parameters: [{ name: "product", type: "string" }],
    value: ({ product }: { product: string }) => ({ product }),
  },
];
