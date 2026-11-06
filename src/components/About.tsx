import { Icon } from "./Icons";
import { contact } from "../data/contact";

export function About() {
  return (
    <section className="about-section" id="sobre" aria-labelledby="about-title">
      <div className="container about-grid">
        <div>
          <p className="section-kicker">Sobre mim</p>
          <h2 id="about-title">
            O código é parte.
            <br />O contexto conecta<span>.</span>
          </h2>
        </div>
        <div className="about-copy">
          <p className="large-copy">
            Sou engenheiro de computação e desenvolvedor full stack, com
            interesse em inteligência artificial aplicada.
          </p>
          <p>
            Minha vivência com um negócio familiar aproxima a tecnologia da
            operação: entender o trabalho de quem usa, organizar informação e
            construir soluções que façam sentido além da tela.
          </p>
          <p>
            Nos projetos, exploro interfaces com React e TypeScript, dados e
            autenticação com Supabase e processamento de linguagem natural com
            Python. Do site institucional à gestão de estoque, meu interesse
            está em conectar a experiência de quem usa às regras de cada
            negócio.
          </p>
          <a
            className="text-link"
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            Conheça minha trajetória no LinkedIn <Icon name="external" />
          </a>
        </div>
      </div>
    </section>
  );
}
