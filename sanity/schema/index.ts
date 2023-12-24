import { type SchemaTypeDefinition } from "sanity";
import { siteSettings } from "./site-settings";
import { homePage } from "./home-page";
import { page } from "./page.tsx";

type Schema = {
  types: SchemaTypeDefinition[];
  singletonTypes: SchemaTypeDefinition[];
  getAllTypes: () => {
    types: SchemaTypeDefinition[];
  };
};

export const schema: Schema = {
  singletonTypes: [siteSettings, homePage],
  types: [page],
  getAllTypes() {
    return {
      types: [...this.singletonTypes, ...this.types],
    };
  },
};
