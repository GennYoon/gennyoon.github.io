import React from "react";
import { ChevronRight } from "lucide-react";

interface TOCProps {
  link?: string;
  title?: string;
  depth?: number;
  children: TOCProps[];
}

export const Toc = ({ data }: { data: { depth: number; title: string }[] }) => {
  const list = React.useMemo<TOCProps[]>(() => {
    const path = [{ children: [] }];

    for (const obj of data) {
      const path: TOCProps[] = [{ children: [] }];
      const depthMap: { [key: number]: number } = { 0: 0 };

      for (const obj of data) {
        path[(depthMap[obj.depth] ??= path.length) - 1].children.push(
          (path[depthMap[obj.depth]] = {
            ...obj,
            link: obj.title
              .replace(/(\.|\(|\))/g, "")
              .replace(/ /g, "-")
              .toLowerCase(),
            children: [],
          })
        );
      }
      return path[0].children;
    }
    return path[0].children;
  }, [data]);

  return (
    <aside className="fixed top-24 right-10">
      <nav>
        <ol>
          {list.map((item, index) => {
            return (
              <li key={index}>
                <a href={`#${item.link}`}>
                  <strong>{item.title}</strong>
                </a>
                {item.children.length > 0 && (
                  <ol className="py-2">
                    {item.children.map((item, index) => {
                      return (
                        <li key={index} className="ml-4 py-1">
                          <a
                            href={`#${item.link}`}
                            className="flex gap-2 items-center"
                          >
                            <ChevronRight size={16} />
                            {item.title}
                          </a>
                        </li>
                      );
                    })}
                  </ol>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </aside>
  );
};
