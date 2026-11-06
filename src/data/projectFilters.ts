import type { ProjectFilter } from "../types/project";

export const projectFilters: readonly {
  id: ProjectFilter;
  label: string;
}[] = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Web" },
  { id: "sistemas", label: "Sistemas" },
  { id: "ia", label: "IA aplicada" },
  { id: "construcao", label: "Em construção" },
];
