import { useState } from "react";
import { contact } from "../data/contact";
import { Icon } from "./Icons";

export function Contact() {
  const [copyStatus, setCopyStatus] = useState("");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopyStatus("E-mail copiado. Pronto para colar na sua mensagem.");
    } catch {
      setCopyStatus(`Copie este e-mail: ${contact.email}`);
    }
  }
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
        <div className="contact-links">
          <a className="email-link" href={`mailto:${contact.email}`}>
            <span>E-mail</span>
            <strong>{contact.email}</strong>
            <Icon name="arrow" />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            <span>Carreira e conexões</span>
            <strong>LinkedIn</strong>
            <Icon name="external" />
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer">
            <span>Código e estudos</span>
            <strong>GitHub</strong>
            <Icon name="external" />
          </a>
          <button className="copy-profile" type="button" onClick={copyEmail}>
            Copiar e-mail
          </button>
          <p className="copy-status" role="status" aria-live="polite">
            {copyStatus}
          </p>
        </div>
      </div>
    </section>
  );
}
