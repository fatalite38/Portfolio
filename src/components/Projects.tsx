import { useRef } from "react";
import { projects } from "../data/projects";
import { projectFilters } from "../data/projectFilters";
import { useProjectNavigation } from "../hooks/useProjectNavigation";
import { ProjectCard } from "./ProjectCard";
import { ProjectDialog } from "./ProjectDialog";
import { ConstructionCard } from "./ConstructionCard";

export function Projects() {
  const { filter, selectedProject, selectFilter, openProject, closeProject } =
    useProjectNavigation();
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const count = projects.filter(
    (project) => filter === "all" || project.category === filter,
  ).length;
  return (
    <>
      <section
        className="projects-section container"
        id="projetos"
        aria-labelledby="projects-title"
      >
        <div className="section-heading">
          <h2 id="projects-title">
            Projetos
            <br />
            em perspectiva<span>.</span>
          </h2>
          <p>
            Interfaces, regras de negócio e IA.
            <br />
            Três formas de explorar o que a tecnologia pode resolver.
          </p>
        </div>
        <div
          className="project-filters"
          role="group"
          aria-label="Filtrar projetos"
        >
          {projectFilters.map((item) => (
            <button
              key={item.id}
              type="button"
              data-filter={item.id}
              aria-pressed={filter === item.id}
              onClick={() => selectFilter(item.id)}
            >
              {item.id === "all" ? `${item.label} ` : item.label}
              {item.id === "all" && <span>{projects.length}</span>}
            </button>
          ))}
        </div>
        <p id="filter-status" className="sr-only" role="status">
          {filter === "construcao"
            ? "Mostrando iniciativas futuras em construção."
            : `${new Intl.NumberFormat("pt-BR").format(count)} ${count === 1 ? "projeto exibido." : "projetos exibidos."}`}
          {filter === "all" &&
            " Iniciativas futuras em construção também estão visíveis."}
        </p>
        <div id="project-list" className="project-list">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              hidden={filter !== "all" && project.category !== filter}
              onOpen={(item, trigger) => {
                triggerRef.current = trigger;
                openProject(item.id);
              }}
            />
          ))}
          {(filter === "all" || filter === "construcao") && <ConstructionCard />}
        </div>
      </section>
      <ProjectDialog
        project={selectedProject}
        triggerRef={triggerRef}
        onDismiss={closeProject}
      />
    </>
  );
}
