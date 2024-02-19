import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const copyToClipboard = (text: string) => {
  return new Promise((resolve, reject) => {
    if (navigator?.clipboard) {
      const cb = navigator.clipboard;

      cb.writeText(text).then(resolve).catch(reject);
    } else {
      try {
        const body = document.querySelector("body");

        const textarea = document.createElement("textarea");
        body?.appendChild(textarea);

        textarea.value = text;
        textarea.select();
        document.execCommand("copy");

        body?.removeChild(textarea);

        resolve(true);
      } catch (e) {
        reject(e);
      }
    }
  });
};

export const createToc = (headings: RegExpMatchArray) => {
  return headings?.map((heading) => {
    const [depth, title] = heading.split(/(?<= )(.*)/);
    return { depth: depth.trim().length, title };
  });
};
