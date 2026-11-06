import { useEffect, useLayoutEffect, useRef } from "react";
import type { RefObject } from "react";
import type { Project } from "../types/project";
import { ProjectMedia } from "./ProjectMedia";
import { Icon } from "./Icons";

interface Props {
  project: Project | null;
  onDismiss: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
}

export function ProjectDialog({ project, onDismiss, triggerRef }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastProjectId = useRef<string | null>(null);
  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (project) {
      lastProjectId.current = project.id;
      if (!dialog.open) dialog.showModal();
      document.body.classList.add("dialog-open");
      dialog.scrollTop = 0;
      closeRef.current?.focus({ preventScroll: true });
    } else {
      if (dialog.open) dialog.close();
      document.body.classList.remove("dialog-open");
      if (lastProjectId.current) {
        const trigger = triggerRef.current?.isConnected && triggerRef.current.dataset.project === lastProjectId.current
          ? triggerRef.current
          : document.querySelector<HTMLButtonElement>(
              `[data-project="${lastProjectId.current}"]`,
            );
        const destination = trigger && !trigger.closest('[hidden]')
          ? trigger
          : document.querySelector<HTMLButtonElement>('[data-filter][aria-pressed="true"]');
        destination?.focus({ preventScroll: true });
        lastProjectId.current = null;
      }
    }
  }, [project, triggerRef]);
  useEffect(() => () => document.body.classList.remove("dialog-open"), []);

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      id="project-dialog"
      aria-labelledby="dialog-title"
      onClose={() => {
        if (project) onDismiss();
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (
          event.clientX < bounds.left ||
          event.clientX > bounds.right ||
          event.clientY < bounds.top ||
          event.clientY > bounds.bottom
        )
          onDismiss();
      }}
    >
      <div className="dialog-header">
        <span id="dialog-category">{project?.categoryLabel}</span>
        <button
          ref={closeRef}
          className="dialog-close"
          type="button"
          aria-label="Fechar detalhes do projeto"
          onClick={onDismiss}
        >
          <Icon name="close" />
        </button>
      </div>
      <div className="dialog-content">
        <p className="dialog-status" id="dialog-status">
          {project?.status}
        </p>
        <h2 id="dialog-title">{project?.title}</h2>
        <p className="dialog-intro" id="dialog-intro">
          {project?.summary}
        </p>
        <div id="dialog-media">
          {project && <ProjectMedia media={project.media} />}
        </div>
        <div className="dialog-details" id="dialog-details">
          {project?.sections.map((section) => (
            <section key={section.title}>
              <h3>{section.title}</h3>
              {section.text && <p>{section.text}</p>}
              {section.items && (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          {project?.note && <p className="dialog-note">{project.note}</p>}
        </div>
        <ul
          className="technology-tags"
          id="dialog-tech"
          aria-label="Tecnologias do projeto"
        >
          {project?.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <div className="dialog-links" id="dialog-links">
          {project?.links.map((link) => (
            <a
              key={link.href}
              className={link.primary ? "button button-primary" : "text-link"}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </dialog>
  );
}
