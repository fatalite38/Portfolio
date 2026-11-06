import type { ProjectMedia as Media } from "../types/project";

interface Props {
  media: Media;
  allowFullSize?: boolean;
}

export function ProjectMedia({ media, allowFullSize = false }: Props) {
  if (media.type === "image") {
    return (
      <figure className="source-preview source-preview--image">
        <img
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          loading="lazy"
        />
        <figcaption>
          {media.caption}
          {allowFullSize && (
            <a
              className="media-full-size"
              href={media.src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ampliar imagem: ${media.caption} (nova aba)`}
            >
              Ampliar imagem (nova aba)
            </a>
          )}
        </figcaption>
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
