export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default function BlogPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tight">my blog</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>A place where I share my learnings.</p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      </div>
    </section>
  );
}
