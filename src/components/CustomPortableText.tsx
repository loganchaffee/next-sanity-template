import { PortableText, PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { urlForImage } from "../../sanity/lib/image";

const components: PortableTextComponents = {
  marks: {
    textColor: ({ children, value }) => (
      <span style={{ color: value.value }}>{children}</span>
    ),
    normal: ({ children }) => <p className="min-h-6">{children}</p>,
    span: ({ children }) => <span className="min-h-6">{children}</span>,
  },
  types: {
    image: ({ value }) => (
      <img className="w-full block mb-10 mt-10" src={urlForImage(value)} />
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-5"> {children} </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mb-5">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold mb-5">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-bold mb-5">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-lg font-bold mb-5">{children}</h5>
    ),
    h6: ({ children }) => <h6 className="font-bold mb-5">{children}</h6>,
    normal: ({ children }) => <p className="min-h-6 mb-3">{children}</p>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-4 mb-3">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ml-4 mb-3">{children}</ol>
    ),
  },
};

export function CustomPortableText({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
