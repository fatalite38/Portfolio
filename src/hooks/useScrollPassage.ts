import { useEffect } from "react";
import type { RefObject } from "react";

export function useScrollPassage(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = true;
    let frame: number | null = null;
    const update = () => {
      frame = null;
      if (!visible || reducedMotion.matches) return;
      const bounds = element.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(
          1,
          (window.innerHeight - bounds.top) / (window.innerHeight * 0.8),
        ),
      );
      element.style.setProperty("--passage", progress.toFixed(3));
    };
    const schedule = () => {
      if (frame === null && visible && !reducedMotion.matches)
        frame = requestAnimationFrame(update);
    };
    const changeMotion = () => {
      if (reducedMotion.matches) element.style.removeProperty("--passage");
      else schedule();
    };
    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              visible = entries[0].isIntersecting;
              if (visible) schedule();
            },
            { rootMargin: "100px" },
          )
        : null;
    observer?.observe(element);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reducedMotion.addEventListener("change", changeMotion);
    schedule();
    return () => {
      observer?.disconnect();
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reducedMotion.removeEventListener("change", changeMotion);
      element.style.removeProperty("--passage");
    };
  }, [ref]);
}
