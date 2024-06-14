import Link from 'next/link';
import ArrowIcon from '@/components/ArrowIcon';
import { FC } from 'react';

type LinkBlogProps = {
  title: string;
  slug: string;
};

// Blog posts component
const LinkBlog: FC<LinkBlogProps> = ({ title, slug }) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="flex items-center justify-between w-full rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800 relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:block before:h-full before:w-full before:translate-x-full before:bg-neutral-200 dark:before:bg-neutral-700 before:transition-transform hover:before:translate-x-0"
    >
      <h3 className="font-medium text-lg tracking-tight relative">{title}</h3>
      <ArrowIcon />
    </Link>
  );
};

export default LinkBlog;
