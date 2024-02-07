import { CalendarDays } from "lucide-react";
import { Pagination } from "./ui/pagination";
import Link from "next/link";

type BlogItemProps = {
  frontMatter: any;
  slug: string;
};

type BlogListProps = {
  posts: BlogItemProps[];
};

function Item({ frontMatter, slug }: BlogItemProps) {
  if (!frontMatter?.published) return null;
  return (
    <Link href={`/post/${slug}`} passHref>
      <div className="py-4 flex justify-between align-middle gap-2 rounded-lg cursor-pointer">
        <div className="flex flex-col gap-0.5">
          <h3 className="text-xl font-bold">{frontMatter.title}</h3>
          <p className="flex items-center gap-1 text-gray-700">
            <CalendarDays size={20} className="inline-block" />
            <span>{frontMatter.date}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export function List({ posts }: BlogListProps) {
  return (
    <section>
      <ul>
        {posts.map((post) => (
          <Item key={post.frontMatter.title} {...post} />
        ))}
      </ul>
      <Pagination />
    </section>
  );
}

export function Detail(post: BlogItemProps) {
  return <div>Detail</div>;
}
