import { contact } from "../data/contact";
import { LocalIcon } from "./LocalIcon";

const channels = [
  {
    name: "E-mail",
    icon: "mail",
    href: `mailto:${contact.email}`,
    label: `Enviar e-mail para ${contact.email}`,
    external: false,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    href: contact.linkedin,
    label: "LinkedIn de Luiz Pedrozo (nova aba)",
    external: true,
  },
  {
    name: "GitHub",
    icon: "github",
    href: contact.github,
    label: "GitHub de Luiz Pedrozo (nova aba)",
    external: true,
  },
] as const;

export function Contact() {
  return (
    <section
      className="contact-section"
      id="contato"
      aria-labelledby="contact-title"
    >
      <div className="container contact-grid">
        <div>
          <p className="section-kicker">Vamos conversar</p>
          <h2 id="contact-title">
            O próximo projeto
            <br />
            começa com
            <br />
            uma conversa<span>.</span>
          </h2>
          <p>
            Para oportunidades profissionais,
            <br />
            projetos e boas trocas sobre tecnologia.
          </p>
        </div>
        <ul className="contact-links" aria-label="Canais de contato">
          {channels.map((channel) => (
            <li key={channel.icon}>
              <a
                href={channel.href}
                aria-label={channel.label}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noopener noreferrer" : undefined}
              >
                <span className="contact-icon">
                  <LocalIcon name={channel.icon} />
                </span>
                <span>{channel.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
