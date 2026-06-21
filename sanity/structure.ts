import type { StructureResolver } from "sanity/structure";

const singletonDocument = (
  S: Parameters<StructureResolver>[0],
  title: string,
  schemaType: string,
  documentId: string
) =>
  S.listItem()
    .title(title)
    .schemaType(schemaType)
    .child(
      S.document()
        .schemaType(schemaType)
        .documentId(documentId)
        .title(title)
    );

const productServicesDocument = (
  S: Parameters<StructureResolver>[0],
  title: string,
  product: "propx" | "propcare"
) =>
  S.listItem()
    .title(title)
    .schemaType("productServices")
    .child(
      S.document()
        .schemaType("productServices")
        .documentId(`productServices.${product}`)
        .title(`${title} Services`)
        .initialValueTemplate("product-services-by-product", { product })
    );

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      singletonDocument(S, "Home", "home", "home"),
      S.divider(),
      productServicesDocument(S, "Propx", "propx"),
      productServicesDocument(S, "PropCare", "propcare"),
    ]);
