import { type SchemaTypeDefinition } from "sanity";
import { siteSettings } from "./site-settings";
import { homePage } from "./home-page";
import { aboutPage } from "./about-page";
import { page } from "./page.tsx";

export const schema: {
  types: SchemaTypeDefinition[];
  singletonTypes: SchemaTypeDefinition[];
  getAllTypes: () => { types: SchemaTypeDefinition[] };
} = {
  singletonTypes: [siteSettings, homePage, aboutPage],
  types: [page],
  getAllTypes() {
    return {
      types: [...this.singletonTypes, ...this.types],
    };
  },
};
