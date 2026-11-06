import { useCallback, useEffect, useState } from "react";
import { projects } from "../data/projects";
import type { ProjectFilter } from "../types/project";

interface NavigationState {
  filter: ProjectFilter;
  projectId: string | null;
}
const filters: readonly ProjectFilter[] = ["all", "web", "sistemas", "ia"];

function readLocation(): NavigationState {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("filtro");
  let filter = filters.find((value) => value === requested) ?? "all";
  const project = projects.find((item) => item.id === params.get("projeto"));
  if (project && filter !== "all" && project.category !== filter)
    filter = project.category;
  return { filter, projectId: project?.id ?? null };
}

export function useProjectNavigation() {
  // Initial output is identical in SSR and hydration; URL state is applied on mount.
  const [state, setState] = useState<NavigationState | null>(null);
  useEffect(() => {
    const restore = () => setState(readLocation());
    restore();
    window.addEventListener("popstate", restore);
    return () => window.removeEventListener("popstate", restore);
  }, []);
  useEffect(() => {
    if (!state) return;
    const url = new URL(window.location.href);
    if (state.filter === "all") url.searchParams.delete("filtro");
    else url.searchParams.set("filtro", state.filter);
    if (state.projectId) url.searchParams.set("projeto", state.projectId);
    else url.searchParams.delete("projeto");
    window.history.replaceState(null, "", url);
  }, [state]);
  const selectFilter = useCallback(
    (filter: ProjectFilter) => setState({ filter, projectId: null }),
    [],
  );
  const openProject = useCallback((projectId: string) => {
    const project = projects.find((item) => item.id === projectId);
    if (!project) return;
    setState((current) => ({
      filter: !current || current.filter === "all" ? "all" : project.category,
      projectId,
    }));
  }, []);
  const closeProject = useCallback(
    () =>
      setState((current) => ({
        filter: current?.filter ?? "all",
        projectId: null,
      })),
    [],
  );
  return {
    filter: state?.filter ?? "all",
    selectedProject:
      projects.find((project) => project.id === state?.projectId) ?? null,
    selectFilter,
    openProject,
    closeProject,
  };
}
