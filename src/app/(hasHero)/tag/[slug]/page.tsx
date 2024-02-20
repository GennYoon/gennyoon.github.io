import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { Metadata } from "next";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { BlogItemProps, List } from "@/components/Post";
import { differenceInDays } from "date-fns";

const getData = async (tag: string) => {
  const listObj = fs
    .readdirSync(path.join("src", "posts"), { withFileTypes: true, recursive: true })
    .reduce<{ [key: string]: string }>((acc, file) => {
      if (file.isFile() && file.name !== "category.md") acc[file.name] = `${file.path}/${file.name}`;
      return acc;
    }, {});

  const list = Object.entries(listObj).map<BlogItemProps>(([filename, pathname]) => {
    const file = fs.readFileSync(path.join(pathname));
    const { data } = matter(file) as any;
    if (data.tag?.includes(tag)) return { ...data, slug: filename.split(".")[0] };
  });

  const posts = list.sort((a, b) => differenceInDays(b.date, a.date));

  return { posts };
};
export default async function TagPage({ params }: any) {
  const { posts } = await getData(params.slug);
  return (
    <section className="col-span-3 w-full px-4">
      <h1 className="text-2xl font-bold mb-4">
        Tag:
        <span className="ml-3 text-red-500">{params.slug.toLocaleUpperCase()}</span>
      </h1>
      <List posts={posts} />
    </section>
  );
}

export const generateStaticParams = async () => {
  const listObj = fs
    .readdirSync(path.join("src", "posts"), { withFileTypes: true, recursive: true })
    .reduce<{ [key: string]: string }>((acc, file) => {
      if (file.isFile() && file.name !== "category.md") {
        const markdownWithMeta = fs.readFileSync(path.join(`${file.path}/${file.name}`), "utf-8");
        const { data } = matter(markdownWithMeta);
        if (data.published) acc[file.name] = `${file.path}/${file.name}`;
      }
      return acc;
    }, {});

  const tags = Object.values(listObj).reduce((acc, pathname) => {
    const file = fs.readFileSync(path.join(pathname));
    const { data } = matter(file) as any;
    data.tag?.forEach((tag: string) => acc.add(tag));
    return acc;
  }, new Set<string>());

  return Array.from(tags).map((slug) => ({ slug }));
};

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  return {
    metadataBase: new URL("https://gennyoon.net"),
    category: params.slug,
    title: `${params.slug.toLocaleUpperCase()} | GennYoon 블로그`,
    description: ``,
    authors: {
      url: "yoonwonyoul@webchemist.net",
      name: "GennYoon",
    },
    openGraph: {
      title: `${params.slug.toLocaleUpperCase()} | GennYoon 블로그`,
      description: ``,
      url: "https://gennyoon.net",
      siteName: `GennYoon 블로그`,
      images: [
        {
          url: "",
          width: 800,
          height: 600,
        },
        {
          url: "",
          width: 1800,
          height: 1600,
          alt: "og:image",
        },
      ],
      locale: "ko_KR",
      type: "website",
    },
    twitter: {
      card: "summary",
      site: "@yoonwonyoul",
      title: `${params.slug.toLocaleUpperCase()} | GennYoon 블로그`,
      description: ``,
      creator: "@yoonwonyoul",
      images: [
        {
          url: "",
          alt: "",
        },
      ],
    },
    // verification: {
    //   google: "",
    //   yandex: "",
    //   yahoo: "",
    //   other: {
    //     me: [],
    //   },
    // },
    // robots: {
    //   index: false,
    //   follow: true,
    //   nocache: true,
    //   googleBot: {
    //     index: true,
    //     follow: false,
    //     noimageindex: false,
    //     "max-video-preview": -1,
    //     "max-image-preview": "large",
    //     "max-snippet": -1,
    //   },
    // },
  };
};
