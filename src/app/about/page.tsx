import { Nav } from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import { CustomPortableText } from "@/components/CustomPortableText";
import type { Image as SanityImage } from "sanity";
import type { PortableTextBlock } from "@portabletext/types";

type AboutPageData = {
  _id: string;
  _updatedAt: string;
  _createdAt: string;
  _rev: string;
  _type: string;

  title: string;
  subtitle: string;
  body: PortableTextBlock[];
};

// Force data refetch on each request
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function About() {
  const data = await client.fetch<AboutPageData>("*[_type == 'aboutPage'][0]");

  return (
    <>
      <header>
        <div className="container py-10">
          <h1 className="text-4xl font-extrabold mb-4">{data.title}</h1>
          <h2 className="text-2xl">{data.subtitle}</h2>
        </div>
      </header>

      <div className="container py-10 min-h-screen">
        <CustomPortableText value={data.body} />
      </div>
    </>
  );
}
