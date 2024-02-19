import fs from "node:fs";
import createMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { transformerNotationDiff } from "@shikijs/transformers";
import remarkGfm from "remark-gfm";

// const withMDX = createMDX({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [
//       rehypeSlug,
//       rehypeParse,
//       [rehypePrettyCode, options],
//       rehypeStringify,
//       [
//         rehypeAutolinkHeadings,
//         {
//           behavior: "wrap",
//           properties: {
//             ariaHidden: true,
//             tabIndex: -1,
//             className: ["anchor"],
//           },
//         },
//       ],
//     ],
//   },
// });

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactStrictMode: true,
};

export default nextConfig;
// export default withMDX(nextConfig);

//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [
//       rehypeSlug,
//       rehypeCodeTitles,
//       // [rehypePrettyCode],
//       rehypeHighlight,
//       [
//         rehypeAutolinkHeadings,
//         {
//           behaviour: "wrap",
//           properties: {
//             ariaHidden: true,
//             tabIndex: -1,
//             className: ["anchor"],
//           },
//         },
//       ],
//     ],
//     format: /\.mdx?$/,
//
