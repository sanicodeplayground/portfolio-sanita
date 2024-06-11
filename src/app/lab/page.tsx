import { Card } from '@/components/card';
import labProjects from '@/db/lab-projects';

export default function LabPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tight">my lab</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>A collection of experiments with CSS, Tailwind and JS.</p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      </div>
      <div className="group grid md:grid-cols-1 grid-rows-1 gap-4">
        {labProjects.map((project) => (
          <Card
            key={project.id}
            id={project.id}
            title={project.title}
            image={project.image}
            githubURL={project.githubURL}
          />
        ))}
      </div>
    </section>
  );
}
