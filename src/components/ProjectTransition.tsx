import { useRef } from "react";
import { useScrollPassage } from "../hooks/useScrollPassage";

export function ProjectTransition() {
  const ref = useRef<HTMLElement>(null);
  useScrollPassage(ref);
  return (
    <section
      ref={ref}
      className="project-transition"
      aria-labelledby="transition-title"
    >
      <div className="container">
        <span className="transition-line" aria-hidden="true" />
        <p id="transition-title">
          Da ideia à aplicação.
          <br />
          <span>Com o problema em foco.</span>
        </p>
        <svg
          className="transition-arrow"
          viewBox="0 0 80 80"
          aria-hidden="true"
        >
          <path d="M16 16l48 48M16 64h48V16" />
        </svg>
      </div>
    </section>
  );
}
