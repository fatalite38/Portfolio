import { useEffect, useRef, useState } from "react";
import { contact } from "../data/contact";
import { Icon } from "./Icons";

const links = [
  { href: "#projetos", label: "Projetos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 601px)");
    const close = () => setOpen(false);
    media.addEventListener("change", close);
    return () => media.removeEventListener("change", close);
  }, []);
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuRef.current?.focus();
      }
    };
    const outside = (event: Event) => {
      if (
        event.target instanceof Node &&
        !navRef.current?.contains(event.target) &&
        !menuRef.current?.contains(event.target)
      )
        setOpen(false);
    };
    document.addEventListener("keydown", escape);
    document.addEventListener("click", outside);
    document.addEventListener("focusin", outside);
    return () => {
      document.removeEventListener("keydown", escape);
      document.removeEventListener("click", outside);
      document.removeEventListener("focusin", outside);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          className="wordmark"
          href="#inicio"
          aria-label="Luiz Pedrozo, início"
        >
          lp<span>.</span>
        </a>
        <nav
          ref={navRef}
          className={`main-nav${open ? " open" : ""}`}
          id="main-nav"
          aria-label="Navegação principal"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setOpen(false);
                const target = document.querySelector<HTMLElement>(link.href);
                if (target) {
                  target.tabIndex = -1;
                  target.focus({ preventScroll: true });
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          className="header-github"
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <Icon name="external" />
        </a>
        <button
          ref={menuRef}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
