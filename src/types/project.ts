export type ProjectCategory = "web" | "sistemas" | "ia";
export type ProjectFilter = "all" | ProjectCategory;

export type ProjectMedia =
  | { type: "placeholder"; title: string; description: string; caption: string }
  | { type: "source"; title: string; code: string; caption: string }
  | {
      type: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      caption: string;
    };

export type ProjectSection = { title: string } & (
  | { text: string; items?: never }
  | { items: readonly string[]; text?: never }
);

export interface ProjectLink {
  label: string;
  href: `https://${string}`;
  primary?: boolean;
}

export interface Project {
  id: string;
  category: ProjectCategory;
  categoryLabel: string;
  title: string;
  status: string;
  summary: string;
  technologies: readonly string[];
  media: ProjectMedia;
  sections: readonly ProjectSection[];
  note?: string;
  links: readonly ProjectLink[];
}
