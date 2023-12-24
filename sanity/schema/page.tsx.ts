import { defineField, defineType } from "sanity";

export const page = defineType({
  title: "Page",
  name: "page",
  type: "document",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Subtitile",
      name: "subtitle",
      type: "text",
    }),
  ],
});
