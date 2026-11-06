import { Icon } from "./Icons";
import { HeroPortrait } from "./HeroPortrait";
import curriculumPdf from "../../assets/docs/Luiz_Pedrozo_CV_Atualizado.pdf";

export function Hero() {
  return (
    <section
      className="hero container"
      id="inicio"
      aria-labelledby="hero-title"
    >
      <div className="hero-copy">
        <p className="hero-role">
          <span className="red-mark" aria-hidden="true"></span>Desenvolvedor
          full stack
        </p>
        <h1 id="hero-title">
          Luiz
          <br />
          Pedrozo<span>.</span>
        </h1>
        <p className="hero-description">
          Desenvolvo aplicações que conectam tecnologia e negócios, com interesse
          em inteligência artificial aplicada.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projetos">
            Ver projetos <Icon name="arrow" />
          </a>
          <a className="button button-secondary" href="#contato">
            Entrar em contato
          </a>
        </div>
        <a
          className="hero-resume text-link"
          href={curriculumPdf}
          download="Luiz_Pedrozo_CV_Atualizado.pdf"
          type="application/pdf"
        >
          Baixar currículo
        </a>
      </div>
      <HeroPortrait />
      <div className="hero-foot">
        <p>
          Engenharia de Computação.
          <br />
          Tecnologia com contexto de negócio.
        </p>
        <a href="#projetos">
          Conheça meu trabalho <span aria-hidden="true">↓</span>
        </a>
        <p className="hero-location">
          Botucatu, São Paulo
          <br />
          Brasil
        </p>
      </div>
    </section>
  );
}
