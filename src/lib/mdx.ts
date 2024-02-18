import { serialize } from "next-mdx-remote/serialize";
import { Options, toJsxRuntime } from "hast-util-to-jsx-runtime";
import type { Root, Properties, ElementContent } from "hast";
import type { Plugin, Processor } from "unified";
import { visit, SKIP } from "unist-util-visit";
import { isElement } from "hast-util-is-element";
import type { VFile } from "vfile";

// export type ComponentFunction = (
//   props: Properties,
//   children: ElementContent[],
//   context: ComponentContext,
// ) => ElementContent | ElementContent[] | undefined | null;

/**
 * Context object passed to the component function to give it access to the
 * current root of the tree, the current vfile and the processor.
 */
// export interface ComponentContext {
//   tree: Root;
//   vfile: VFile;
//   processor: Processor;
// }

// export const serializeMdx = (source: string) => {
//   return serialize(source, {
//     mdxOptions: {
//       remarkPlugins: [],
//       rehypePlugins: [],
//       format: "mdx",
//     },
//   });
// };

const rehypeComponents: Plugin<[Options], Root, Root> = function (options) {
  return (tree) => {
    const result = toJsxRuntime(tree, options);
    console.log(tree);
    console.log(result);
  };
};

export default rehypeComponents;
