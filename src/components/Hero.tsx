import { Icon } from "./Icons";
import avatar from "../../assets/img/profile2.jpg";

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
          Desenvolvo aplicações conectando tecnologia, negócios e inteligência
          artificial.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projetos">
            Ver projetos <Icon name="arrow" />
          </a>
          <a className="button button-secondary" href="#contato">
            Entrar em contato
          </a>
        </div>
      </div>
      <figure className="hero-portrait">
        <div className="portrait-frame">
          <div className="portrait-light" aria-hidden="true"></div>
          <img
            src={avatar}
            width="460"
            height="460"
            alt="Avatar ilustrado de Luiz Pedrozo"
            fetchPriority="high"
          />
          <span className="portrait-corner" aria-hidden="true"></span>
        </div>
        <figcaption>
          <span>Luiz Pedrozo</span>
          <span>Avatar ilustrado · temporário</span>
        </figcaption>
      </figure>
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
