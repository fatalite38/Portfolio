import { useEffect, useState } from "react";

export function Footer() {
  const [year, setYear] = useState(import.meta.env.VITE_BUILD_YEAR);
  useEffect(() => {
    setYear(
      new Intl.DateTimeFormat("pt-BR", {
        year: "numeric",
        timeZone: "America/Sao_Paulo",
      }).format(new Date()),
    );
  }, []);
  return (
    <footer className="site-footer container">
      <a className="wordmark" href="#inicio" aria-label="Voltar ao início">
        lp<span>.</span>
      </a>
      <p>
        Luiz Pedrozo · <span id="current-year">{year}</span>
      </p>
      <a href="#inicio">Voltar ao topo ↑</a>
    </footer>
  );
}
