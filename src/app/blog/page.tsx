import Link from 'next/link';
import { FC, AnchorHTMLAttributes } from 'react';
// import { getBlogPosts } from '../../db/';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

// Blog
interface LinkBlogProp {
  slug: string;
  name: string;
}
const LinkBlog: FC<LinkBlogProp> = ({ slug, name }) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
    >
      {name}
    </Link>
  );
};

export default function BlogPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tight">my blog</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>A place where I share my learnings.</p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      </div>
      <div className="my-8 flex w-full flex-col space-y-4">
        <LinkBlog
          name="How to change Tailwind CSS base font size"
          slug="change-tailwind-base-font-size"
        />
        <LinkBlog
          name="How to change Tailwind CSS base font size"
          slug="change-tailwind-base-font-size"
        />
        <LinkBlog
          name="How to change Tailwind CSS base font size"
          slug="change-tailwind-base-font-size"
        />
      </div>
    </section>
  );
}
