import { Card } from '@/components/card';
import projects from '@/db/projects';
import React from 'react';

const page = () => {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tight">my projects</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>A collection of my most recent projects.</p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      </div>
      <div className="group grid grid-cols-2 grid-rows-2 gap-4">
        {projects.map((project) => (
          <Card
            key={project.id}
            id={project.id}
            title={project.title}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default page;
