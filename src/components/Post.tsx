"use client";

import Image from "next/image";
import { Pagination } from "./ui/pagination";
import { motion } from "framer-motion";

type BlogItemProps = {
  frontMatter: any;
  slug: string;
};

type BlogListProps = {
  posts: BlogItemProps[];
};

const fadeInAnimationVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

function Item({ frontMatter, slug }: BlogItemProps) {
  if (!frontMatter?.published) return null;

  return (
    <a href={`/post/${slug}`} target="_self">
      <motion.div className="mb-8" variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>
        <span className="bg-[#15F5FD40] dark:text-[#15F5FD] text-sky-600 text-sm font-bold py-1 px-3 rounded-xl">
          {frontMatter.categories.map((cate: string) => cate.toUpperCase()).join(", ")}
        </span>
        <p className="text-xl font-bold py-3 line-clamp-2">{frontMatter.title}</p>
        <div className="flex justify-center items-center w-full h-[200px] my-3 rounded-xl bg-gray-200 dark:bg-gray-800 overflow-hidden">
          <Image
            className="w-full h-full"
            width={500}
            height={250}
            src={frontMatter.image ?? "https://udakkdpxfzwyalqyjmiz.supabase.co/storage/v1/object/public/images/meta-image.png"}
            alt={frontMatter.title}
          />
        </div>
        <div className="flex gap-1.5 py-1 text-gray-800 dark:text-gray-200">
          {frontMatter.tag.map((tag: string) => (
            <span key={tag} className="text-sm bg-gray-200 dark:bg-gray-800 rounded-sm py-0.5 px-2">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-sm text-gray-800 dark:text-gray-200">{frontMatter.date}</p>
      </motion.div>
    </a>
  );
}

export function List({ posts }: BlogListProps) {
  return (
    <section>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Item key={post.frontMatter.title} {...post} />
        ))}
      </ul>
      <Pagination />
    </section>
  );
}

export function Detail(post: BlogItemProps) {
  return <div>Detail</div>;
}
