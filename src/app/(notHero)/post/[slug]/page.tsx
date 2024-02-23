import fs from "fs-extra";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import { Metadata } from "next";
import { Toc } from "@/components/Toc";
import { Code } from "@/components/Code";
import { createToc } from "@/lib/utils";
import { defaultImage } from "@/constants";

const getData = async (title: string) => {
  const listObj = fs
    .readdirSync(path.join("src", "posts"), { withFileTypes: true, recursive: true })
    .reduce<{ [key: string]: string }>((acc, file) => {
      if (file.isFile() && file.name !== "series.md") acc[file.name] = `${file.path}/${file.name}`;
      return acc;
    }, {});

  const markdownWithMeta = fs.readFileSync(path.join(listObj[`${title}.md`]), "utf-8");

  const { data, content } = matter(markdownWithMeta);

  const reg = new RegExp(/^(###).*/gm);
  const headings = content.match(reg);
  const toc = createToc(headings!);

  return { ...data, content, toc };
};

export default async function PostPage({ params }: any) {
  const { title, image, content, toc } = (await getData(params.slug)) as any;

  return (
    <section className="col-span-3 w-full max-w-[800px] px-4">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <Image
        className="w-full h-full mb-8 rounded-xl"
        width={500}
        height={250}
        src={image ?? defaultImage}
        alt={title}
        priority={true}
      />
      <div className="col-span-3 md:col-span-2 prose dark:prose-dark mt-4 w-full max-w-none">
        <Code code={content} />
      </div>
      <Toc data={toc} />
    </section>
  );
}

export const generateStaticParams = async () => {
  const listObj = fs
    .readdirSync(path.join("src", "posts"), { withFileTypes: true, recursive: true })
    .reduce<{ [key: string]: string }>((acc, file) => {
      if (file.isFile() && file.name !== "series.md") {
        const markdownWithMeta = fs.readFileSync(path.join(`${file.path}/${file.name}`), "utf-8");
        const { data } = matter(markdownWithMeta);
        if (data.published) acc[file.name] = `${file.path}/${file.name}`;
      }
      return acc;
    }, {});

  return Object.keys(listObj).map((filename) => ({ slug: filename.split(".")[0] }));
};

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  const listObj = fs
    .readdirSync(path.join("src", "posts"), { withFileTypes: true, recursive: true })
    .reduce<{ [key: string]: string }>((acc, file) => {
      if (file.isFile() && file.name !== "series.md") acc[file.name] = `${file.path}/${file.name}`;
      return acc;
    }, {});

  const markdownWithMeta = fs.readFileSync(path.join(listObj[`${params.slug}.md`]), "utf-8");

  const { data: frontMatter } = matter(markdownWithMeta);

  return {
    metadataBase: new URL(`https://gennyoon.net/post/${params.slug}`),
    category: frontMatter.series[0],
    title: `${frontMatter.title} | GennYoon Blog`,
    description: frontMatter.description,
    authors: {
      name: "GennYoon",
      url: "https://portfolio.gennyoon.net",
    },
    openGraph: {
      title: `${frontMatter.title} | GennYoon Blog`,
      description: frontMatter.description,
      url: new URL(`https://gennyoon.net/post/${params.slug}`),
      siteName: `GennYoon Blog`,
      images: [
        {
          url: frontMatter?.image ?? defaultImage,
          width: 1200,
          height: 630,
          alt: "og:image",
        },
      ],
      locale: "ko_KR",
      type: "website",
    },
    twitter: {
      card: "summary",
      site: "@yoonwonyoul",
      title: `${frontMatter.title} | GennYoon Blog`,
      description: frontMatter.description,
      creator: "@yoonwonyoul",
      images: [
        {
          url: frontMatter?.image ?? defaultImage,
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
