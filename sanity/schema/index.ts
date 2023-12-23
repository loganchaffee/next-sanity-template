import { type SchemaTypeDefinition } from "sanity";
import { HomePage } from "./HomePage";
import { Page } from "./Page";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [HomePage, Page],
};
