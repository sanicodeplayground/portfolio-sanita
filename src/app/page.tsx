import Link from 'next/link';
import Image from 'next/image';
import { FC, AnchorHTMLAttributes } from 'react';
import ArrowIcon from '@/components/ArrowIcon';
import BadgeConnou from '@/components/BadgeConnou';
import { getAllBlogPosts, LinkBlog } from '../components/BlogPosts';

const techLogos = [
  {
    name: 'JavaScript',
    image: 'tech-js.svg',
    link: 'https://www.typescriptlang.org/',
  },
  {
    name: 'React',
    image: 'tech-react.svg',
    link: 'https://nextjs.org/',
  },
  {
    name: 'Next.js',
    image: 'tech-next.svg',
    link: 'https://nextjs.org/',
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
      <h1 className="mb-2 text-2xl font-medium tracking-tighter">
        I&apos;m Sanita 👋
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p className="font-medium tracking-wide">Frontend Developer</p>
      </div>

      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a frontend developer, optimist, and community enthusiast. I
        currently `}
        <Link href="/work">work</Link>
        {` as a developer at the startup `}
        <span className="not-prose">
          <BadgeConnou href="https://www.connou.app">Connou</BadgeConnou>
        </span>
        , where I help build an education platform for Universities using
        Typescript and Next.js.
      </p>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I help build reusable components and refactor for cleaner and more
          maintainable code. Currently, I&apos;m migrating styled components to
          TailwindCSS, one component at a time. I work independently, but I am
          always happy to collaborate with designers and other developers.
        </p>
      </div>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <h2 className="font-medium text-xl mb-1 tracking-tighter">
        Latest posts
      </h2>
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
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <h2 className="font-medium text-xl mb-1 tracking-tighter">Focus on:</h2>
      <div className="my-8 flex h-14 w-full flex-row space-x-2 overflow-x-auto">
        {techLogos.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 px-2"
          >
            <Image
              src={`/images/svgs/${item.image}`}
              alt="Sanita"
              height={24}
              width={24}
              className="mr-2"
            />
            <p className="font-medium">{item.name}</p>
          </div>
        ))}
      </div>
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/sgailu/"
          >
            LikendIn
            <div className="transform transition-transform duration-300 hover:-rotate-12 pl-2">
              <ArrowIcon />
            </div>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/sanicodeplayground"
          >
            GitHub
            <div className="transform transition-transform duration-300 hover:-rotate-12 pl-2">
              <ArrowIcon />
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
}
