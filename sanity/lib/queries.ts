import { groq } from "next-sanity";
export const HOME_QUERY = groq`*[_type == "homePage"][0]`;
