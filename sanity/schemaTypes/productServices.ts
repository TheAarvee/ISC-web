import { defineField, defineType } from "sanity";

export const productServices = defineType({
  name: "productServices",
  title: "Product Services",
  type: "document",
  fields: [
    defineField({
      name: "product",
      title: "Product",
      type: "string",
      options: {
        list: [
          { title: "Propx", value: "propx" },
          { title: "PropCare", value: "propcare" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "serviceCategories",
      title: "Services",
      type: "array",
      of: [{ type: "serviceCategory" }],
    }),
    defineField({
      name: "proofOfDeliverable",
      title: "Proof of Deliverable",
      type: "object",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
          initialValue: "#4 Our Deliverables",
        }),
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
          initialValue: "What You Receive",
        }),
        defineField({
          name: "documentTitle",
          title: "Document Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
          rows: 5,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "buttonLabel",
          title: "Button Label",
          type: "string",
          initialValue: "Download Document",
        }),
        defineField({
          name: "document",
          title: "PDF Document",
          type: "file",
          options: {
            accept: "application/pdf",
          },
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      product: "product",
      categories: "serviceCategories",
    },
    prepare({ product, categories }) {
      const title = product === "propcare" ? "PropCare" : "Propx";
      const count = Array.isArray(categories) ? categories.length : 0;

      return {
        title,
        subtitle: `${count} service ${count === 1 ? "category" : "categories"}`,
      };
    },
  },
});
