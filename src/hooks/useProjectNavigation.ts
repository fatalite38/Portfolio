import { useCallback, useEffect, useState } from "react";
import { projects } from "../data/projects";
import { projectFilters } from "../data/projectFilters";
import type { ProjectFilter } from "../types/project";

interface NavigationState {
  filter: ProjectFilter;
  projectId: string | null;
}

function readLocation(): NavigationState {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("filtro");
  let filter = projectFilters.find((item) => item.id === requested)?.id ?? "all";
  const project = projects.find((item) => item.id === params.get("projeto"));
  if (project && filter !== "all" && project.category !== filter)
    filter = project.category;
  return { filter, projectId: project?.id ?? null };
}

function writeLocation(state: NavigationState, mode: "push" | "replace") {
  const url = new URL(window.location.href);
  if (state.filter === "all") url.searchParams.delete("filtro");
  else url.searchParams.set("filtro", state.filter);
  if (state.projectId) url.searchParams.set("projeto", state.projectId);
  else url.searchParams.delete("projeto");
  if (url.href !== window.location.href)
    window.history[mode === "push" ? "pushState" : "replaceState"](null, "", url);
}

export function useProjectNavigation() {
  // Initial output is identical in SSR and hydration; URL state is applied on mount.
  const [state, setState] = useState<NavigationState | null>(null);
  useEffect(() => {
    const restore = () => {
      const restored = readLocation();
      writeLocation(restored, "replace");
      setState(restored);
    };
    restore();
    window.addEventListener("popstate", restore);
    return () => window.removeEventListener("popstate", restore);
  }, []);
  const navigate = useCallback(
    (next: NavigationState, mode: "push" | "replace") => {
      writeLocation(next, mode);
      setState(next);
    },
    [],
  );
  const selectFilter = useCallback(
    (filter: ProjectFilter) => navigate({ filter, projectId: null }, "push"),
    [navigate],
  );
  const openProject = useCallback(
    (projectId: string) => {
      const project = projects.find((item) => item.id === projectId);
      if (!project) return;
      const current = readLocation();
      navigate(
        {
          filter: current.filter === "all" ? "all" : project.category,
          projectId,
        },
        "replace",
      );
    },
    [navigate],
  );
  const closeProject = useCallback(() => {
    const current = readLocation();
    if (current.projectId)
      navigate({ filter: current.filter, projectId: null }, "replace");
  }, [navigate]);
  return {
    filter: state?.filter ?? "all",
    selectedProject:
      projects.find((project) => project.id === state?.projectId) ?? null,
    selectFilter,
    openProject,
    closeProject,
  };
}
