import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogItemProps, List } from "@/components/Post";
import { Metadata } from "next";
import { Code } from "@/components/Code";
import { defaultImage } from "@/constants";

const getData = async (category: string) => {
  const listObj = fs
    .readdirSync(path.join("src", "posts", category), { withFileTypes: true, recursive: true })
    .reduce<{ [key: string]: string }>((acc, file) => {
      if (file.isFile() && file.name !== "category.md") acc[file.name] = `${file.path}/${file.name}`;
      return acc;
    }, {});

  const list = Object.entries(listObj).map<BlogItemProps>(([filename, pathname]) => {
    const file = fs.readFileSync(path.join(pathname));
    const { data } = matter(file) as any;
    return { ...data, slug: filename.split(".")[0] };
  });

  const posts = list.sort((a, b) => b.order - a.order);

  // Category Content
  const categoryFile = fs.readFileSync(path.join("src", "posts", category, "category.md"));
  const { content } = matter(categoryFile) as any;

  return { category, content, posts };
};

export default async function CategoryPage({ params }: any) {
  const { category, content, posts } = await getData(params.slug);
  return (
    <section className="col-span-3 w-full px-4 md:px-0">
      <h1 className="text-2xl font-bold">
        Category:
        <span className="ml-3 text-red-500">{params.slug.toLocaleUpperCase()}</span>
      </h1>
      <div className="py-8 prose dark:prose-dark">
        <Code code={content} />
      </div>

      <List posts={posts} />
    </section>
  );
}

export const generateStaticParams = async () => {
  return fs
    .readdirSync(path.join("src", "posts"), { withFileTypes: true, recursive: true })
    .reduce<{ slug: string }[]>((acc, file) => {
      if (file.isDirectory()) acc.push({ slug: file.name });
      return acc;
    }, []);
};

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  const markdownWithMeta = fs.readFileSync(path.join("src", "posts", `${params.slug}`, "category.md"), "utf-8");

  const { data } = matter(markdownWithMeta);

  return {
    metadataBase: new URL(`https://gennyoon.net/category/${params.slug}`),
    category: params.slug,
    title: `${data.title} | GennYoon 블로그`,
    description: data.description,
    authors: {
      url: "yoonwonyoul@webchemist.net",
      name: "GennYoon",
    },
    openGraph: {
      title: `${data.title} | GennYoon 블로그`,
      description: data.description,
      url: new URL(`https://gennyoon.net/category/${params.slug}`),
      siteName: `${data.title} | GennYoon 블로그`,
      images: [
        {
          url: data.image ?? defaultImage,
          width: 800,
          height: 600,
        },
        {
          url: data.image ?? defaultImage,
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
      description: data.description,
      creator: "@yoonwonyoul",
      images: [
        {
          url: data.image ?? defaultImage,
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
