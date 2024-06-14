import Link from 'next/link';
// import SunIcon from './sun-icon';
// import MoonIcon from './moon-icon';

const navItems = {
  '/': { name: 'home' },
  '/projects': { name: 'projects' },
  '/work': { name: 'work' },
  '/blog': { name: 'blog' },
  // '/about': { name: 'about' },
  // '/lab': { name: 'lab' },
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
                  className="flex align-middle relative py-1 px-2  hover:text-neutral-800 dark:hover:text-neutral-400  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-neutral-400 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
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
