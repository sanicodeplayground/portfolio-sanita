import { FC } from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ArrowIcon from '@/components/arrow-icon';

interface BlogPost {
  slug: string;
  title: string;
}

// Function to render blog posts (title, summary, and slug)
export function getAllBlogPosts(): BlogPost[] {
  const postsDirectory = path.join(process.cwd(), 'src/app/blog');
  const filenames = fs.readdirSync(postsDirectory);

  const mdxFiles = filenames.filter((filename) => filename.endsWith('.mdx'));

  const blogPosts = mdxFiles.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContents);
    return {
      slug: filename.replace('.mdx', ''),
      title: data.title,
    };
  });
  return blogPosts;
}

// Blog posts component
export const LinkBlog: FC<BlogPost> = ({ slug, title }) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="flex items-center justify-between w-full rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
    >
      <h3 className="font-medium text-lg tracking-tight">{title} </h3>
      <ArrowIcon />
    </Link>
  );
};

{
  /* <a ></a> */
}
