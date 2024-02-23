"use client";

import React from "react";
import { Clipboard } from "lucide-react";
import { cn } from "@/lib/utils";

export const Pre = ({ children }: any) => {
  const textInput = React.useRef<HTMLPreElement>(null);
  const [copied, setCopied] = React.useState(false);

  const onCopy = () => {
    setCopied(true);
    if (textInput.current !== null && textInput.current.textContent !== null)
      navigator.clipboard.writeText(textInput.current.textContent);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="relative group">
      <pre ref={textInput} tabIndex={0} className="m-0 overflow-x-scroll">
        {children}
      </pre>

      <button
        title="Copy to clipboard"
        data-copied="Copied!"
        className={cn(
          "absolute flex justify-center items-center top-6 right-4 w-8 h-8 border border-gray-400 hover:bg-white/30 opacity-0 group-hover:opacity-100 transition-all",
          copied ? "opacity-100" : "opacity-0",
        )}
        type="button"
        onClick={onCopy}
      >
        <Clipboard size={20} color="#E1E4E8" />

        <div
          className={cn(
            "absolute right-[60px] px-4 text-[16px] bg-green-700 text-white opacity-0 rounded-sm shadow-sm transition-all pointer-events-none",
            copied ? "opacity-100" : "opacity-0",
          )}
        >
          Copied!!
          <div className="absolute top-[7px] -right-[12px] h-0 w-0 border-y-8 border-y-transparent border-l-[16px] border-l-green-700"></div>
        </div>
      </button>
    </div>
  );
};
