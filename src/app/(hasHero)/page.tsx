import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { differenceInDays } from "date-fns";
import React from "react";
import { List } from "@/components/Post";

const getData = async () => {
  const files = fs.readdirSync(path.join("src", "posts"));

  const _posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join("src", "posts", filename));
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  const posts = _posts.sort((a, b) => differenceInDays(b.frontMatter.date, a.frontMatter.date));

  return { posts };
};

export default async function Home() {
  const { posts } = await getData();

  return (
    <section className="col-span-3 w-full px-4">
      <h1 className="text-2xl font-bold mb-4">최근 포스트</h1>
      <List posts={posts} />
    </section>
  );
}
