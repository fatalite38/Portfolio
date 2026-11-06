import type { ProjectMedia as Media } from "../types/project";

export function ProjectMedia({ media }: { media: Media }) {
  if (media.type === "image") {
    return (
      <figure className="source-preview">
        <img
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          loading="lazy"
        />
        <figcaption>{media.caption}</figcaption>
      </figure>
    );
  }
  if (media.type === "source") {
    return (
      <figure className="source-preview">
        <figcaption>{media.title}</figcaption>
        <pre>
          <code>{media.code}</code>
        </pre>
        <p>{media.caption}</p>
      </figure>
    );
  }
  return (
    <div className="media-placeholder">
      <span className="placeholder-symbol" aria-hidden="true" />
      <strong>{media.title}</strong>
      <p>{media.description}</p>
      <small>{media.caption}</small>
    </div>
  );
}
