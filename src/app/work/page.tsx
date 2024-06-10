import React from 'react';

const page = () => {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tight">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>On a mission to build products developers</p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Connou</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Frontend developer, Jan 2022 — present
        </p>
        <p>
          I joined Vercel early to grow Next.js and our developer community. I
          built our Developer Relations team to teach our community about our
          products.
        </p>
        <ul>
          <li>
            Develop and maintain React components: Collaborate with the product
            team, utilising TypeScript, Next.js, and Tailwind CSS to optimise
            performance and functionality.
          </li>
          <li>
            Prepare Connou project to be migrated to Tailwind and migrate the
            project from Styled Components to TailwindCSS.
          </li>
          <li>
            Help with project management, keep Notion up to date: task planning,
            prioritising and nominate the assignee.
          </li>
          <li>Implement and execute testing: unit tests using Jest.</li>
          <li> Increase website’s accessibility from 70% to 98%</li>
          <li>Conduct code refactoring for cleaner and maintainable code.</li>
          <li>
            Implement responsive design and cross-browser compatibility to
            ensure optimal user experience on all devices.
          </li>
        </ul>
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Intermediate Conveyancer My Home Move Ltd Conveyancing Paralegal
          Gorvins Residential LLP
        </h2>
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Conveyancing Paralega
        </h2>
      </div>
    </section>
  );
};

export default page;
