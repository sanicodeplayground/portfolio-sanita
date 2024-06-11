import Link from 'next/link';
import Image from 'next/image';
import { FC, AnchorHTMLAttributes } from 'react';
import ArrowIcon from '@/components/arrow-icon';
import Badge from '@/components/badge';
import { getAllBlogPosts, LinkBlog } from '../components/blog-posts';

const techLogos = [
  {
    name: 'typescript',
    image: 'typescript-logo.svg',
    link: 'https://www.typescriptlang.org/',
  },
  {
    link: 'https://nextjs.org/',
    name: 'next',
    image: 'next-logo.svg',
  },
  {
    link: 'https://nextjs.org/',
    name: 'next',
    image: 'react-logo.svg',
  },
  {
    link: 'https://nextjs.org/',
    name: 'next',
    image: 'tailwind-logo.svg',
  },
];

export default function Page() {
  const posts = getAllBlogPosts();

  return (
    <section>
      <Image
        src="/images/avatar.jpg"
        alt="Sanita"
        height={64}
        width={64}
        sizes="33vw"
        priority
        className="mb-8 h-24 w-24 rounded-full border
        border-neutral-200 dark:border-neutral-700"
      />
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        hey, I&apos;m Sanita 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a frontend developer, optimist, and community enthusiast. I
        currently `}
        <Link href="/work">work</Link>
        {` as a developer at the startup `}
        <span className="not-prose">
          <Badge href="https://www.connou.app">Connou</Badge>
        </span>
        , where I help build an education platform for Universities using
        Typescript and Next.js.
      </p>
      {/* box */}
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I help build reusable components and refactor for cleaner and more
          maintainable code. Currently, I&apos;m migrating styled components to
          TailwindCSS, one component at a time. I work independently, but I am
          always happy to collaborate with designers and other developers.
        </p>
      </div>
      {/* box */}
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I recently started writing content on my blog as a way to become a
          better communicator. On my blog, you will find articles about the
          technologies I&apos;m in at the time or about how I&apos;m learning
          and growing in my career. I aim to share knowledge and experiences
          that can benefit others along the way.
        </p>
      </div>
      <div className="my-8 flex w-full flex-col space-y-4">
        {posts.slice(0, 3).map((post) => (
          <LinkBlog key={post.slug} {...post} />
        ))}
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          While using the latest framework, I also allocate time to learning and
          practicing the fundamentals of JavaScript and CSS. I have a dedicated
          lab section for this purpose, ensuring that I keep learning the core
          principles of web development.
        </p>
      </div>
      {/* Lab card */}
      {/* Lab card */}
      <div className="prose prose-neutral dark:prose-invert">
        <p>My focus is on the following technologies:</p>
      </div>
      <div className="my-8 flex h-14 w-full flex-row space-x-2 overflow-x-auto">
        {techLogos.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-1 dark:border-neutral-700 dark:bg-neutral-800"
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={`/images/${item.image}`}
                alt="Sanita"
                height={64}
                width={164}
                sizes="33vw"
              />
            </a>
          </div>
        ))}
      </div>
      <ul className="font-sm mt-8 -ml-3 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/sgailu/"
          >
            <p className="ml-2 h-7 pr-2">LikendIn</p>
            <div className="transform text-neutral-700 transition-transform duration-300 hover:-rotate-12 dark:text-neutral-300">
              <ArrowIcon />
            </div>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/sanicodeplayground"
          >
            <p className="ml-2 h-7 pr-2">GitHub</p>
            <div className="transform text-neutral-700 transition-transform duration-300 hover:-rotate-12 dark:text-neutral-300">
              <ArrowIcon />
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
}
