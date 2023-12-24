import { CustomPortableText } from "@/components/CustomPortableText";
import type { PortableTextBlock } from "@portabletext/types";
import { SanityDocument } from "next-sanity";

type HomePageData = {
  _id: string;
  _updatedAt: string;
  _createdAt: string;
  _rev: string;
  _type: string;
  title: string;
  subtitle: string;
  body: PortableTextBlock[];
};

type Props = {
  data: HomePageData;
};

export function HomePage({ data }: { data: SanityDocument }) {
  return (
    <div className="container">
      <h1 className="text-4xl font-bold mb-5">{data.title}</h1>
      <h2 className="text-3xl font-bold mb-5">{data.subtitle}</h2>
      <CustomPortableText value={data.body} />
    </div>
  );
}
