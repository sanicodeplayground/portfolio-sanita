//This file is responsible for dynamically rendering individual blog post pages based on the slug in the URL
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import fs from 'fs';
import path from 'path';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

async function getBlogPosts() {
  const files = fs.readdirSync(path.join(process.cwd(), 'src/content'));
  return files.map((filename) => ({
    slug: filename.replace('.tsx', ''),
    filename,
  }));
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Blog({ params }: Props) {
  const resolvedParams = await params;
  const posts = await getBlogPosts();
  const post = posts.find((post) => post.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const DynamicComponent = dynamic(
    () => import(`../../../content/${post.filename}`)
  );

  return (
    <section>
      <DynamicComponent />
    </section>
  );
}
