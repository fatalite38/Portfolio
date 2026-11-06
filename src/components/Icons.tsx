export type IconName =
  | "arrow"
  | "external"
  | "code"
  | "study"
  | "layers"
  | "close";

export function Icon({ name }: { name: IconName }) {
  return (
    <svg className="icon" aria-hidden="true">
      <use href={`#i-${name}`} />
    </svg>
  );
}

export function IconLibrary() {
  return (
    <svg
      className="icon-library"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <symbol id="i-arrow" viewBox="0 0 24 24">
        <path d="M5 12h14m-6-6 6 6-6 6" />
      </symbol>
      <symbol id="i-external" viewBox="0 0 24 24">
        <path d="M14 4h6v6M20 4l-9 9M10 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5" />
      </symbol>
      <symbol id="i-code" viewBox="0 0 24 24">
        <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18" />
      </symbol>
      <symbol id="i-study" viewBox="0 0 24 24">
        <path d="m2 9 10-5 10 5-10 5L2 9M6 11v7c4 3 8 3 12 0v-7m4-2v8" />
      </symbol>
      <symbol id="i-layers" viewBox="0 0 24 24">
        <path d="m12 3 10 6-10 6L2 9l10-6M2 13l10 6 10-6M2 17l10 6 10-6" />
      </symbol>
      <symbol id="i-close" viewBox="0 0 24 24">
        <path d="m6 6 12 12M6 18 18 6" />
      </symbol>
    </svg>
  );
}
