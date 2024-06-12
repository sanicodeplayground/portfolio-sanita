import Link from 'next/link';
import SunIcon from './sun-icon';
import MoonIcon from './moon-icon';

const navItems = {
  '/': { name: 'home' },
  '/projects': { name: 'projects' },
  '/work': { name: 'work' },
  // '/about': { name: 'about' },
  // '/lab': { name: 'lab' },
  // '/blog': { name: 'blog' },
};

export function Navbar() {
  return (
    <aside className="mb-16 tracking-tight -ml-3">
      <div className="flex items-center justify-between">
        <nav className="flex flex-row items-start relative px-0 pb-0 md:overflow-auto scroll-pr-6 md:relative">
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="flex align-middle relative py-1 px-2 transition-all ease-in-out delay-150 hover:text-neutral-800 dark:hover:text-neutral-400"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
        {/* <button>
          <SunIcon />
        </button> */}
      </div>
    </aside>
  );
}
