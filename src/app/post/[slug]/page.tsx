import fs from "fs-extra";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { Metadata } from "next";
import { Pre } from "@/components/Pre";
import { Toc } from "@/components/Toc";

const createToc = (headings: RegExpMatchArray) => {
  return headings.map((heading) => {
    const [depth, title] = heading.split(/(?<= )(.*)/);
    return { depth: depth.trim().length, title };
  });
};

const getData = async (title: string) => {
  const markdownWithMeta = fs.readFileSync(path.join("src", "posts", `${title}.md`), "utf-8");

  const { data: frontMatter, content } = matter(markdownWithMeta);

  const reg = new RegExp(/^(###).*/gm);
  const headings = content.match(reg);
  const toc = createToc(headings!);

  return { frontMatter, content, toc };
};

const options: any = {
  parseFrontmatter: true,
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypeHighlight,
      [
        rehypeAutolinkHeadings,
        {
          behaviour: "append",
          properties: {
            ariaHidden: true,
            tabIndex: -1,
            className: ["anchor"],
          },
        },
      ],
    ],
    format: /\.mdx?$/,
  },
};

export default async function PostPage({ params }: any) {
  const { frontMatter, content, toc } = await getData(params.slug);

  return (
    <section className="col-span-3 w-full max-w-[768px] px-4 md:px-0">
      <h1 className="text-2xl font-bold mb-4">{frontMatter.title}</h1>

      {/* <h1>{frontMatter.title}</h1>
      <p>{frontMatter.description}</p>
      <p>{frontMatter.date}</p>
      <p>{frontMatter.tags.join(", ")}</p> */}
      <div className="col-span-3 md:col-span-2 prose dark:prose-dark mt-4 w-full max-w-none">
        <MDXRemote source={content} options={options} components={{ pre: Pre, Image }} />
      </div>
      <Toc data={toc} />
    </section>
  );
}

export const generateStaticParams = async () => {
  const files = fs.readdirSync(path.join("src", "posts"));
  const posts = files
    .filter((filename) => {
      const markdownWithMeta = fs.readFileSync(path.join("src", "posts", `${filename}`), "utf-8");
      const { data } = matter(markdownWithMeta);
      return data.published;
    })
    .map((filename) => ({ slug: filename.split(".")[0] }));

  return posts;
};

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  const markdownWithMeta = fs.readFileSync(path.join("src", "posts", `${params.slug}.md`), "utf-8");

  const { data: frontMatter } = matter(markdownWithMeta);
  return {
    metadataBase: new URL("http://localhost:3000"),
    category: frontMatter.categories[0],
    title: `${frontMatter.title} | GennYoon 블로그`,
    description: frontMatter.description,
    authors: {
      url: "yoonwonyoul@webchemist.net",
      name: "GennYoon",
    },
    openGraph: {
      title: `${frontMatter.title} | GennYoon 블로그`,
      description: frontMatter.description,
      url: "http://localhost:3000",
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
