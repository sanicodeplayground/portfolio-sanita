import Image from 'next/image';
import Link from 'next/link';
import ArrowIcon from '@/components/ArrowIcon';
interface CardProps {
  id: string;
  title: string;
  image?: string;
  githubURL: string;
}

export function Card({ id, title, image, githubURL }: CardProps) {
  return (
    <div
      key={id}
      className="w-full rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
    >
      <Link href={githubURL} target="_blank">
        <Image
          src={`/images/projects/${image}`}
          alt={title}
          width={864}
          height={464}
          sizes="33vw"
          priority
        />
        <div className="flex items-baseline flex-row justify-between">
          <h3 className="mt-4 text-lg font-medium text-neutral-900 dark:text-neutral-100">
            {title}
          </h3>
          <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
            <ArrowIcon />
          </div>
        </div>
      </Link>
    </div>
  );
}
