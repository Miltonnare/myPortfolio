import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="glass flex h-full flex-col rounded-2xl overflow-hidden shadow-subtle transition hover:-translate-y-1">
      <div className="relative h-40 w-full overflow-hidden sm:h-48">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={480}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="text-sm font-semibold text-foreground sm:text-base">
            {project.title}
          </h3>
          <p className="mt-1 text-xs text-foreground-muted sm:text-sm">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-950/70 px-2.5 py-0.5 text-[10px] font-medium text-foreground-muted"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center gap-3 text-xs">
          <Link
            href={project.github}
            target="_blank"
            className="text-primary hover:underline"
          >
            GitHub
          </Link>
          {project.live && project.live !== "#" && (
            <Link
              href={project.live}
              target="_blank"
              className="text-foreground-muted hover:text-primary hover:underline"
            >
              Live demo
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

