import { Nav } from "@/components/Nav";
import { client } from "../../sanity/lib/client";
import { CustomPortableText } from "@/components/CustomPortableText";
import { urlForImage } from "../../sanity/lib/image";
import type { Image as SanityImage } from "sanity";
import type { PortableTextBlock } from "@portabletext/types";

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
  const data = await client.fetch<HomePageData>("*[_type == 'homePage'][0]");

  return (
    <>
      <header
        className="bg-slate-800 text-white h-96 flex items-center justify-center bg-center bg-cover"
        style={{
          backgroundImage: data.heroImage
            ? `linear-gradient(
							to bottom, transparent, #020617), 
						url('${urlForImage(data.heroImage)}')`
            : "",
        }}
      >
        <div className="text-center">
          <h1
            className="text-5xl font-extrabold mb-4"
            style={{ color: data.titleColor.value }}
          >
            {data.title}
          </h1>
          <h2 className="text-lg" style={{ color: data.subtitleColor.value }}>
            {data.subtitle}
          </h2>
          <button className="bg-blue-600 text-white px-6 py-2 mt-4 rounded hover:bg-blue-600">
            Learn More
          </button>
        </div>
      </header>

      <div className="container py-10 min-h-screen">
        <CustomPortableText value={data.body} />
      </div>
    </>
  );
}
