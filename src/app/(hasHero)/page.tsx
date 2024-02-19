import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { differenceInDays } from "date-fns";
import React from "react";
import { BlogItemProps, List } from "@/components/Post";

const getData = async () => {
  const listObj = fs
    .readdirSync(path.join("src", "posts"), { withFileTypes: true, recursive: true })
    .reduce<{ [key: string]: string }>((acc, file) => {
      if (file.isFile() && file.name !== "category.md") acc[file.name] = `${file.path}/${file.name}`;
      return acc;
    }, {});

  const list = Object.entries(listObj).map<BlogItemProps>(([filename, pathname]) => {
    const file = fs.readFileSync(path.join(pathname));
    const { data } = matter(file) as any;
    return { ...data, slug: filename.split(".")[0] };
  });

  const posts = list.sort((a, b) => differenceInDays(b.date, a.date));

  return { posts };
};

export default async function Home() {
  const { posts } = await getData();

  return (
    <section className="col-span-3 w-full px-4 md:px-0">
      <h1 className="text-2xl font-bold mb-4">최근 포스트</h1>
      <List posts={posts} />
    </section>
  );
}
