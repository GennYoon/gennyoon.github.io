import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { List } from "@/components/Post";
import { Metadata } from "next";
import { Code } from "@/components/Code";

const getData = async (category: string) => {
  const categoryMarkdownWithMeta = fs.readFileSync(path.join("src", "categories", `${category}.md`));
  const files = fs.readdirSync(path.join("src", "posts"));

  const { data: categoryMetter, content } = matter(categoryMarkdownWithMeta);

  const _posts = files.reduce<any[]>((acc, filename) => {
    const markdownWithMeta = fs.readFileSync(path.join("src", "posts", filename));
    const { data: frontMatter } = matter(markdownWithMeta);

    if (frontMatter?.categories?.some((cate: string) => cate.toLocaleUpperCase() === category.toLocaleUpperCase())) {
      acc.push({
        frontMatter,
        slug: filename.split(".")[0],
      });
    }

    return acc;
  }, []);

  const posts = _posts.sort((a, b) => b.frontMatter.date - a.frontMatter.date);

  return { category: categoryMetter, content, posts };
};
export default async function CategoryPage({ params }: any) {
  const { category, content, posts } = await getData(params.slug);
  return (
    <section className="col-span-3 w-full max-w-[768px] px-4 md:px-0">
      <h1 className="text-2xl font-bold">
        Category:
        <span className="ml-3 text-red-500">{params.slug.toLocaleUpperCase()}</span>
      </h1>
      <div className="py-8">
        <Code code={content} />
      </div>

      <List posts={posts} />
    </section>
  );
}

export const generateStaticParams = async () => {
  return [{ slug: "macos" }, { slug: "react" }, { slug: "nextjs" }, { slug: "nestjs" }, { slug: "flutter" }, { slug: "terraform" }];
};

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  const markdownWithMeta = fs.readFileSync(path.join("src", "categories", `${params.slug}.md`), "utf-8");

  const { data: frontMatter } = matter(markdownWithMeta);
  return {
    metadataBase: new URL("https://gennyoon.net"),
    category: params.slug,
    title: `${frontMatter.title} | GennYoon 블로그`,
    description: frontMatter.description,
    authors: {
      url: "yoonwonyoul@webchemist.net",
      name: "GennYoon",
    },
    openGraph: {
      title: `${frontMatter.title} | GennYoon 블로그`,
      description: frontMatter.description,
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
      title: `${frontMatter.title} | GennYoon 블로그`,
      description: frontMatter.description,
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
