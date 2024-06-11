import { FC } from 'react';
import { getAllBlogPosts, LinkBlog } from '../../components/blog-posts';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

const BlogPage: FC = () => {
  // Call the function to fetch blog posts
  const posts = getAllBlogPosts();

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tight">my blog</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>A place where I share my learnings.</p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      </div>
      <div className="my-8 flex w-full flex-col space-y-4">
        {posts.map((post) => (
          <LinkBlog key={post.slug} {...post} />
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
