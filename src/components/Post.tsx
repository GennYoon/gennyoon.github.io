"use client";

import Image from "next/image";
import { Pagination } from "./ui/pagination";
import { motion } from "framer-motion";
import { defaultImage } from "@/constants";

export type BlogItemProps = {
  title: string;
  date: string;
  image: string;
  slug: string;
  categories: [];
  tag: string[];
  order: number;
  published: boolean;
};

type BlogListProps = {
  posts: BlogItemProps[];
};

const fadeInAnimationVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

function Item({ title, date, image, categories, tag, published, slug }: BlogItemProps) {
  if (!published) return null;

  return (
    <a href={`/post/${slug}`} target="_self">
      <motion.div
        className="mb-8"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <span className="bg-[#15F5FD40] dark:text-[#15F5FD] text-sky-600 text-sm font-bold py-1 px-3 rounded-xl">
          {categories.map((cate: string) => cate.toUpperCase()).join(", ")}
        </span>
        <p className="text-xl font-bold py-3 line-clamp-2">{title}</p>
        <div className="flex justify-center items-center w-full my-3 rounded-xl bg-gray-200 dark:bg-gray-800 overflow-hidden">
          <Image
            className="relative object-cover w-full h-full"
            width={1200}
            height={0}
            src={image ?? defaultImage}
            priority={true}
            objectFit="cover"
            alt={title}
          />
        </div>
        <div className="flex gap-1.5 py-1 text-gray-800 dark:text-gray-200">
          {tag.map((tag: string, index: number) => (
            <span key={index} className="text-sm bg-gray-200 dark:bg-gray-800 rounded-sm py-0.5 px-2">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-sm text-gray-800 dark:text-gray-200">{date}</p>
      </motion.div>
    </a>
  );
}

export function List({ posts }: BlogListProps) {
  return (
    <section>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <Item key={index} {...post} />
        ))}
      </ul>
      <Pagination />
    </section>
  );
}

export function Detail(post: BlogItemProps) {
  return <div>Detail</div>;
}
