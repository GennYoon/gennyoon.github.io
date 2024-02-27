import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogItemProps, List } from "@/components/Post";
import { Metadata } from "next";
import { Code } from "@/components/Code";
import { defaultImage } from "@/constants";

const getData = async (series: string) => {
  const listObj = fs
    .readdirSync(path.join("src", "posts", series), { withFileTypes: true, recursive: true })
    .reduce<{ [key: string]: string }>((acc, file) => {
      if (file.isFile() && file.name !== "series.md") acc[file.name] = `${file.path}/${file.name}`;
      return acc;
    }, {});

  const list = Object.entries(listObj).map<BlogItemProps>(([filename, pathname]) => {
    const file = fs.readFileSync(path.join(pathname));
    const { data } = matter(file) as any;
    return { ...data, slug: filename.split(".")[0] };
  });

  const posts = list.sort((a, b) => a.order - b.order);

  // Secries Content
  const seriesFile = fs.readFileSync(path.join("src", "posts", series, "series.md"));
  const { data, content } = matter(seriesFile) as any;

  return { series, title: data.title, content, posts };
};

export default async function SeriesPage({ params }: any) {
  const { series, title, content, posts } = await getData(params.slug);
  return (
    <section className="col-span-3 w-full px-4">
      <h1 className="text-2xl font-bold mb-4">
        시리즈:
        <span className="ml-3 text-red-500">{title}</span>
      </h1>

      <div className="mb-8 prose dark:prose-dark">
        <Code code={content} />
      </div>

      <h3 className="text-2xl font-bold mb-8">리스트</h3>
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
  const markdownWithMeta = fs.readFileSync(path.join("src", "posts", `${params.slug}`, "series.md"), "utf-8");

  const { data } = matter(markdownWithMeta);

  return {
    metadataBase: new URL(`https://gennyoon.net/series/${params.slug}`),
    category: params.slug,
    title: `시리즈: ${data.title} | GennYoon Blog`,
    description: data.description,
    authors: {
      name: "GennYoon",
      url: "https://portfolio.gennyoon.net",
    },
    openGraph: {
      title: `시리즈: ${data.title} | GennYoon Blog`,
      description: data.description,
      url: new URL(`https://gennyoon.net/series/${params.slug}`),
      siteName: `시리즈: ${data.title} | GennYoon Blog`,
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
      title: `시리즈: ${data.title} | GennYoon Blog`,
      description: data.description,
      creator: "@yoonwonyoul",
      images: [
        {
          url: data.image ?? defaultImage,
        },
      ],
    },
  };
};
