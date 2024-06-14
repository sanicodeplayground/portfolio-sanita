//This file is the main blog page that lists all the blog posts
import fs from 'fs';
import path from 'path';
import LinkBlog from '../../components/BlogPosts';
import { FC } from 'react';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

type BlogPost = {
  slug: string;
  title: string;
};

async function getBlogPosts(): Promise<BlogPost[]> {
  const files = fs.readdirSync(path.join(process.cwd(), 'src/content'));
  return files.map((filename) => ({
    slug: filename.replace('.tsx', ''),
    title: filename.replace('.tsx', '').replace(/-/g, ' '),
  }));
}

const BlogPage: FC = async () => {
  const posts = await getBlogPosts();

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tight">my blog</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>A place where I share my learnings.</p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      </div>
      <div className="my-8 flex w-full flex-col space-y-4">
        {posts.map((post) => (
          <LinkBlog key={post.slug} title={post.title} slug={post.slug} />
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
