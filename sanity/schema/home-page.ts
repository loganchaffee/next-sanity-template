import { HomeIcon } from "@sanity/icons";
import { defineType, defineField, defineArrayMember } from "sanity";

export const homePage = defineType({
  title: "Home Page",
  name: "homePage",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      title: "Hero Image",
      name: "heroImage",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Title Color",
      name: "titleColor",
      type: "simplerColor",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Subtitile",
      name: "subtitle",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Subtitle Color",
      name: "subtitleColor",
      type: "simplerColor",
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
