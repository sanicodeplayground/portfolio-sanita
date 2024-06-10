import Link from 'next/link';
import Image from 'next/image';
import { FC, AnchorHTMLAttributes } from 'react';

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
    name: 'react',
    image: 'react-logo.svg',
  },
  {
    name: 'tailwind',
    image: 'tailwind-logo.svg',
  },
];

// Badge
interface BadgeProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const Badge: FC<BadgeProps> = (props) => {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    ></a>
  );
};
export default function Home() {
  return (
    <section>
      <Image
        src="/images/avatar.jpg"
        alt="Sanita"
        height={64}
        width={64}
        sizes="33vw"
        priority
        className="mb-8 h-16 w-16 rounded-full border
        border-neutral-200 dark:border-neutral-700"
      />
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        hey, I&apos;m Sanita 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a frontend developer, optimist, and community enthusiast. I
        currently `}
        <Link href="/work"> work</Link>
        {` as developer at the startup `}
        <span className="not-prose">
          <Badge href="https://www.connou.app">Connou</Badge>
        </span>
        , where I help build an education platform for Universities, using
        Typescript and Next.js.
      </p>
      {/* box */}
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I help building reusable components and refactoring for cleaner and
          maintainable code. Currently, I&apos;m migrating styled components to
          TailwindCSS, one component at a time. I work independently and
          I&apos;m happy to collaborate with designers and other developers.
        </p>
      </div>
      {/* box */}
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I recently started writing content on my blog as a way to become
          better a communicator. You will find articles about technologies
          I&apos;m interested in at the time, or how I&apos;m learning and
          growing in my career, sharing knowledge along the way.
        </p>
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
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          While using the latest framework, I still spend time learning and
          practising the fundamentals of Javascript and CSS, I have a dedicated
          lab section for it.
        </p>
      </div>
      {/* Lab card */}
      {/* Lab card */}
      <div className="prose prose-neutral dark:prose-invert">
        <p>My focus is on the following technologies:</p>
      </div>
      <div className="my-8 flex w-full flex-row space-x-2 overflow-auto">
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

      {/* tech tag */}
      {/* tech tag */}
      {/* tech tag */}
      <ul>
        <li>
          <a href="">LikendIn</a>
        </li>
        <li>
          <a href="">GitHub</a>
        </li>
        <li>
          <a href="">Twitter</a>
        </li>
      </ul>
    </section>
  );
}
