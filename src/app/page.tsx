import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import React from "react";

const getData = async () => {
  const files = fs.readdirSync(path.join("src", "posts"));

  const _posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("src", "posts", filename),
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  const posts = _posts.sort((a, b) => b.frontMatter.date - a.frontMatter.date);

  return { posts };
};

export default async function Home() {
  const { posts } = await getData();

  return (
    <section className="py-28 px-4 md:px-0">
      <h2 className="text-xl font-bold">최근 포스트</h2>

      <div className="py-2">
        {posts.map((post) => {
          if (!post.frontMatter.published) return null;

          return (
            <Link href={"/post/" + post.slug} passHref key={post.slug}>
              <div className="py-4 flex justify-between align-middle gap-2 cursor-pointer">
                <div>
                  <h3 className="text-2xl font-bold">
                    {post.frontMatter.title}
                  </h3>
                  <p>{post.frontMatter.date}</p>
                  <p className="text-gray-400">
                    {post.frontMatter.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
