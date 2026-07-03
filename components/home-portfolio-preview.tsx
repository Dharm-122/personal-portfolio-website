"use client";

import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";

export function HomePortfolioPreview() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}
