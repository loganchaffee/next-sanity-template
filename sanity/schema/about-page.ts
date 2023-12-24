import { defineType, defineField, defineArrayMember } from "sanity";

export const aboutPage = defineType({
  title: "About Page",
  name: "aboutPage",
  type: "document",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Subtitile",
      name: "subtitle",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Body",
      name: "body",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          marks: {
            annotations: [{ type: "textColor" }],
          },
        }),
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
