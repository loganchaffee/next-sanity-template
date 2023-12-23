/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/admin/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);

const singletonTypes = new Set(["homePage"]);

// This lets us customize the santy studio.
const deskStructure = (S) =>
  S.list()
    .title("Content")
    .items([
      // Singletons
      S.listItem()
        .title("Home Page")
        .child(
          S.editor()
            .id("homePage")
            .schemaType("homePage")
            .documentId("homePageSingleton"),
        ),
      // Regular schemas
      ...S.documentTypeListItems().filter(
        (listItem) => !singletonTypes.has(listItem.getId()),
      ),
    ]);

export default defineConfig({
  basePath: "/admin",
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool({ structure: deskStructure }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});

("123");
