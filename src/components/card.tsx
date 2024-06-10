import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  id: string;
  title: string;
  image?: string;
}

export function Card({ id, title, image }: CardProps) {
  return (
    <div
      key={id}
      className="w-full rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
    >
      <Link href="/work">
        <Image
          src={`/images/projects/${image}`}
          alt={title}
          width={464}
          height={264}
          sizes="33vw"
          priority
        />
        <h3 className="mt-4 text-lg font-medium text-neutral-900 dark:text-neutral-100">
          {title}
        </h3>
      </Link>
    </div>
  );
}
