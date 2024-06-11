import React from 'react';
import Badge from '@/components/badge';

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tight">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>On a mission to build products people love.</p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Connou</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Frontend developer, September 2022 — present
        </p>
        <p>
          I joined{' '}
          <span className="not-prose">
            <Badge href="https://www.connou.app">Connou</Badge>
          </span>{' '}
          with the aim to practice what I have learned in my coding bootcamp. I
          wanted to work with TypeScript and Next.js to build powerfull
          products.
        </p>
        <ul>
          <li>
            <strong>Develop and maintain React components</strong>: Collaborate
            with the product team, utilising TypeScript, Next.js, and Tailwind
            CSS to optimise performance and functionality.
          </li>
          <li>
            <strong>Prepare Connou project to be migrated to Tailwind</strong>:
            migrate the project from Styled Components to TailwindCSS.
          </li>
          <li>
            <strong> Help with project management</strong>: keep Notion up to
            date with task planning, prioritising and nominate the assignee.
          </li>
          <li>
            <strong>Implement and execute testing</strong>: unit tests using
            Jest.
          </li>
          <li>
            <strong>Increase website accessibility</strong>: from 70% to 98%.
          </li>
          <li>
            <strong>Conduct code refactoring</strong>: for cleaner and
            maintainable code.
          </li>
          <li>
            <strong>Implement responsive design</strong> and cross-browser
            compatibility to ensure optimal user experience on all devices.
          </li>
        </ul>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          My Home Move Ltd & Gorvins Residential LLP
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Conveyancer, 2021 - 2022
        </p>

        <p>
          My professional life has been heavily focused on customer service. It
          has always been very important to me to provide the best to my
          clients. I place myself into my clients&apos; shoes to know what to I
          exprect from services in order to provide excellent user experience.
        </p>
        <p>
          Having work in a legal area has given me an excellent oportunity to
          learn to communicate with variety of stakeholders in diferent levels.
          This experience has allowed me to practice express complicated
          terminolugy in accessible yet not patronising maner.
        </p>
      </div>
    </section>
  );
}
