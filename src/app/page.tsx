import Link from 'next/link';
import Image from 'next/image';
import ArrowIcon from '@/components/ArrowIcon';
import BadgeConnou from '@/components/BadgeConnou';
import { FC } from 'react';
import fs from 'fs';
import path from 'path';
import projects from '@/db/projects';
import { CardComponent } from '@/components/CardComponent';

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

const Page: FC = async () => {
  const posts = await getBlogPosts();

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
      <h1 className="mb-2 text-4xl font-medium tracking-tighter">
        Hey, I&apos;m Sanita <br />
        Front-end Developer
      </h1>
      {/* <div className="prose prose-neutral dark:prose-invert">
        <p className="font-medium tracking-wide">Frontend Developer</p>
      </div> */}

      <p className="prose prose-neutral dark:prose-invert">
        {`A self-taught front-end developer, optimist, and community enthusiast. I
        currently `}
        <Link href="/work">work</Link>
        {` as a developer at the startup `}
        <span className="not-prose">
          <BadgeConnou href="https://www.connou.app">Connou</BadgeConnou>
        </span>
        , building a social platform for students using Typescript and Next.js.
      </p>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I build reusable components and refactor for cleaner and more
          maintainable code. Currently, I&apos;m coding the 3rd version of the
          website. I work independently, and I am always happy to collaborate
          with designers and other developers.
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
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <h2 className="font-medium text-xl mb-1 tracking-tighter">Portfolio</h2>
      <div className="my-8 group grid sm:grid-cols-2 grid-rows-2 gap-4">
        {projects.map((project) => (
          <CardComponent
            key={project.id}
            id={project.id}
            title={project.title}
            image={project.image}
            githubURL={project.githubURL}
          />
        ))}
      </div>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

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
};
export default Page;
