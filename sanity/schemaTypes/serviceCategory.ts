import { defineField, defineType } from "sanity";

export const serviceCategory = defineType({
  name: "serviceCategory",
  title: "Service Category",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [{ type: "service" }],
    }),
  ],
  preview: {
    select: {
      title: "heading",
      services: "services",
    },
    prepare({ title, services }) {
      const count = Array.isArray(services) ? services.length : 0;

      return {
        title,
        subtitle: `${count} ${count === 1 ? "service" : "services"}`,
      };
    },
  },
});
