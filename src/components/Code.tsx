import * as React from "react";
import rehypeParse from "remark-parse";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerNotationDiff } from "@shikijs/transformers";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { Pre } from "./Pre";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const options: any = {
  parseFrontmatter: false,
  extension: /\.mdx?$/,
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeParse,
      [
        rehypePrettyCode,
        {
          keepBackground: false,
          theme: "catppuccin-frappe",
          transformers: [transformerNotationDiff()],
          filterMetaString: (value: string) => value.replace(/filename="[^"]*"/, ""),
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            ariaHidden: true,
            tabIndex: -1,
            className: ["anchor"],
          },
        },
      ],
      rehypeStringify,
    ],
  },
};

export async function Code({ code }: { code: string }) {
  return <MDXRemote source={code} options={options} components={{ pre: Pre }} />;
}
