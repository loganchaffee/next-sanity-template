import { Nav } from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../sanity/lib/client";
import CustomPortableText from "@/components/CustomPortableText";
import { PortableText } from "@portabletext/react";

type HomePageData = {
  _id: string;
  title: string;
  _updatedAt: string;
  _createdAt: string;
  subtitle: string;
  _rev: string;
  _type: string;
  body: any[];
};

// Force data refetch on each request
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const data = await client.fetch<HomePageData>("*[_type == 'homePage'][0]");

  console.log(data.body);

  return (
    <>
      <Nav />

      <div>
        <div className="container flex py-20">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-5">{data.title}</h1>
            <h2 className="text-2xl font-bold text-gray-500">
              {data.subtitle}
            </h2>
          </div>
          <img />
        </div>
      </div>

      <div className="container py-10">
        <CustomPortableText value={data.body} />
      </div>
    </>
  );
}
