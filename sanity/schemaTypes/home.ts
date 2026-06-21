import { defineField, defineType } from "sanity";

export const home = defineType({
  name: "home",
  title: "Home",
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
        title: "Home",
        subtitle: "Homepage content",
      };
    },
  },
});
