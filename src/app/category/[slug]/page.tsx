import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { Metadata } from "next";
import Link from "next/link";
import { CalendarDays } from "lucide-react";

const getData = async (category: string) => {
  const files = fs.readdirSync(path.join("src", "posts"));

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

  return { posts };
};
export default async function CategoryPage({ params }: any) {
  const { posts } = await getData(params.slug);
  return (
    <section className="col-span-3 w-full max-w-[768px] px-4 md:px-0">
      <h1 className="text-3xl font-bold">
        Category:
        <span className="ml-3">{params.slug}</span>
      </h1>
      <ul>
        {posts?.map((post) => {
          if (!post.frontMatter.published) return null;

          return (
            <Link href={"/post/" + post.slug} passHref key={post.slug}>
              <div className="p-4 flex justify-between align-middle gap-2 rounded-lg cursor-pointer">
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-xl font-bold">{post.frontMatter.title}</h3>
                  <p className="flex items-center gap-1">
                    <CalendarDays size={20} className="inline-block" />
                    <span>{post.frontMatter.date}</span>
                  </p>
                  <p className="text-gray-400">{post.frontMatter.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </ul>
    </section>
  );
}

export const generateStaticParams = async () => {
  return [{ slug: "macos" }, { slug: "react" }, { slug: "nextjs" }, { slug: "nestjs" }, { slug: "flutter" }, { slug: "terraform" }];
};

// export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
//   const markdownWithMeta = fs.readFileSync(
//     path.join("src", "posts", `${params.slug}.md`),
//     "utf-8",
//   );
//
//   const { data: frontMatter } = matter(markdownWithMeta);
//   return {
//     metadataBase: new URL("http://localhost:3000"),
//     category: frontMatter.categories[0],
//     title: `${frontMatter.title} | GennYoon 블로그`,
//     description: frontMatter.description,
//     authors: {
//       url: "yoonwonyoul@webchemist.net",
//       name: "GennYoon",
//     },
//     openGraph: {
//       title: `${frontMatter.title} | GennYoon 블로그`,
//       description: frontMatter.description,
//       url: "http://localhost:3000",
//       siteName: `GennYoon 블로그`,
//       images: [
//         {
//           url: "",
//           width: 800,
//           height: 600,
//         },
//         {
//           url: "",
//           width: 1800,
//           height: 1600,
//           alt: "og:image",
//         },
//       ],
//       locale: "ko_KR",
//       type: "website",
//     },
//     twitter: {
//       card: "summary",
//       site: "@yoonwonyoul",
//       title: `${frontMatter.title} | GennYoon 블로그`,
//       description: frontMatter.description,
//       creator: "@yoonwonyoul",
//       images: [
//         {
//           url: "",
//           alt: "",
//         },
//       ],
//     },
//     // verification: {
//     //   google: "",
//     //   yandex: "",
//     //   yahoo: "",
//     //   other: {
//     //     me: [],
//     //   },
//     // },
//     // robots: {
//     //   index: false,
//     //   follow: true,
//     //   nocache: true,
//     //   googleBot: {
//     //     index: true,
//     //     follow: false,
//     //     noimageindex: false,
//     //     "max-video-preview": -1,
//     //     "max-image-preview": "large",
//     //     "max-snippet": -1,
//     //   },
//     // },
//   };
// };
