import type { Project } from "../types/project";
import { ProjectMedia } from "./ProjectMedia";
import { Icon } from "./Icons";

interface Props {
  project: Project;
  hidden: boolean;
  onOpen: (project: Project, trigger: HTMLButtonElement) => void;
}

export function ProjectCard({ project, hidden, onOpen }: Props) {
  return (
    <article
      className="project-entry"
      id={`project-${project.id}`}
      data-category={project.category}
      hidden={hidden}
    >
      <div
        className={`project-media${project.media.type === "image" ? " project-media--image" : ""}`}
      >
        <ProjectMedia media={project.media} />
      </div>
      <div className="project-copy">
        <p className="project-status">{project.status}</p>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <ul className="technology-tags" aria-label="Tecnologias do projeto">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <div className="project-actions">
          <button
            type="button"
            className="text-link"
            data-project={project.id}
            aria-label={`Conhecer projeto: ${project.title}`}
            aria-haspopup="dialog"
            onClick={(event) => onOpen(project, event.currentTarget)}
          >
            Conhecer projeto <Icon name="arrow" />
          </button>
          {project.links[0] && (
            <a
              href={project.links[0].href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.links[0].label}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
