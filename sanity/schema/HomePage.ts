import { defineType, defineField, defineArrayMember } from "sanity";

export const HomePage = defineType({
  title: "Home Page",
  name: "homePage",
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
    defineField({
      title: "Body",
      name: "body",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
