import { Icon } from "./Icons";
import { LocalIcon } from "./LocalIcon";
import { contact } from "../data/contact";

const favoriteTechnologies = [
  { name: "React", icon: "react" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Python", icon: "python" },
  { name: "Supabase", icon: "supabase" },
] as const;

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
          <div className="favorite-technologies">
            <h3 id="favorite-technologies-title">Tecnologias favoritas</h3>
            <ul
              className="technology-list"
              aria-labelledby="favorite-technologies-title"
            >
              {favoriteTechnologies.map((technology) => (
                <li key={technology.icon}>
                  <LocalIcon name={technology.icon} />
                  <span>{technology.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="about-copy">
          <p className="large-copy">
            Sou engenheiro de computação, com foco em desenvolvimento full stack
            e IA aplicada.
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
