import { defineField, defineType } from "sanity";

export const propfrax = defineType({
  name: "propfrax",
  title: "PropFrax",
  type: "document",
  fields: [
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [{ type: "service" }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "PropFrax",
        subtitle: "PropFrax page content",
      };
    },
  },
});
