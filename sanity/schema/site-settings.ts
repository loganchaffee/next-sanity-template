import { WrenchIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  title: "Site Settings",
  name: "siteSettings",
  type: "document",
  icon: WrenchIcon,
  fields: [
    defineField({
      title: "Site Title",
      name: "siteTitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Site Description",
      name: "siteDescription",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
