import { FC, AnchorHTMLAttributes } from 'react';

interface BadgeProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const BadgeConnou: FC<BadgeProps> = ({ ...props }) => {
  return (
    <span className="group inline">
      <a
        {...props}
        target="_blank"
        className="relative overflow-hidden inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
      >
        <span className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[170%] group-hover:skew-y-12">
          Connou
        </span>
        <span className="absolute translate-y-[150%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          Connou
        </span>
      </a>
    </span>
  );
};
export default BadgeConnou;
