"use client";

import { Pagination } from "./ui/pagination";
import Link from "next/link";
import { Separator } from "./ui/separator";
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
    <Link href={`/post/${slug}`} passHref>
      <motion.div variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>
        <div className="flex justify-center items-center w-full h-[200px] rounded-xl bg-zinc-500" />
        <div className="p-2">
          <p className="font-bold text-wrap">{frontMatter.title}</p>
          <Separator className="my-3" />
          <p className="mb-1">
            <span className="text-xs font-bold bg-[#036CDA] text-[#15F5FD] py-0.5 px-1 mr-1.5">CATEGORY</span>
            <span>{frontMatter.categories}</span>
          </p>
          <p>
            <span className="text-xs font-bold bg-[#036CDA] text-[#15F5FD] py-0.5 px-1 mr-1.5">DATE</span>
            <span>{frontMatter.date}</span>
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

export function List({ posts }: BlogListProps) {
  return (
    <section>
      <ul className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
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
