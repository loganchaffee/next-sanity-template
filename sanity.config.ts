/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/admin/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { colorInput } from "@sanity/color-input";
import { simplerColorInput } from "sanity-plugin-simpler-color-input";
import { singletonPlugin, pageStructure } from "./sanity/plugins/singleton";
import { presentationTool } from "sanity/presentation";

export default defineConfig({
  basePath: "/admin",
  projectId,
  dataset,
  schema: schema.getAllTypes(),
  plugins: [
    deskTool({
      structure: pageStructure(schema.singletonTypes),
    }),
    colorInput(),
    simplerColorInput({
      defaultColorFormat: "hex",
      defaultColorList: [
        // Using tailwind colors keeps everyting in the same palette
        { label: "White", value: "#ffffff" },
        { label: "Black", value: "#333333" },
        { label: "Gray", value: "#6b7280" },
        { label: "Brand", value: "#2563eb" },
      ],
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    visionTool({ defaultApiVersion: apiVersion }),
    // Prevents duplicates of these types
    singletonPlugin(schema.singletonTypes.map((type) => type.name)),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: "/api/draft",
        },
      },
    }),
  ],
});
