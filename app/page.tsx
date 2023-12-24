import type { Image as SanityImage } from "sanity";
import type { PortableTextBlock } from "@portabletext/types";
import { HomePage } from "@/components/HomePage";
import { HOME_QUERY } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import { loadQuery } from "@/sanity/lib/store";
import { HomePagePreview } from "@/components/HomePagePreview";
import { draftMode } from "next/headers";

type HomePageData = {
  _id: string;
  _updatedAt: string;
  _createdAt: string;
  _rev: string;
  _type: string;

  title: string;
  titleColor: {
    label: string;
    value: string;
  };
  subtitleColor: {
    label: string;
    value: string;
  };
  subtitle: string;
  body: PortableTextBlock[];
  heroImage: SanityImage;
};

// Force data refetch on each request
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const initial = await loadQuery<SanityDocument>(HOME_QUERY);

  return draftMode().isEnabled ? (
    <HomePagePreview initial={initial} />
  ) : (
    <HomePage data={initial.data} />
  );
}
