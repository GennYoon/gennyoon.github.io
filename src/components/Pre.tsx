import React from "react";

import { CopyToClipboard } from "./CopyToClipboard";

interface IPre {
  children: React.ReactElement;
  theme: string;
  showLineNumbers: boolean;
}

export const Pre = ({ children }: any) => {
  return (
    <CopyToClipboard>
      <pre className="m-0">{children}</pre>
    </CopyToClipboard>
  );
};
