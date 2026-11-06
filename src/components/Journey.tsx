import { Icon } from "./Icons";

export function Journey() {
  return (
    <section
      className="journey-section container"
      id="trajetoria"
      aria-labelledby="journey-title"
    >
      <div className="section-heading">
        <h2 id="journey-title">
          Uma trajetória.
          <br />
          Mais de uma perspectiva<span>.</span>
        </h2>
        <p>
          Formação em engenharia, desenvolvimento
          <br />e experiência próxima da operação.
        </p>
      </div>
      <div className="journey-grid">
        <div className="journey-column">
          <h3>
            <Icon name="study" /> Formação e aprendizado
          </h3>
          <article className="journey-entry">
            <span>Em andamento · Início em 2025</span>
            <h4>Inteligência Artificial</h4>
            <p className="entry-place">
              Universidade Tecnológica Federal do Paraná · UTFPR
            </p>
            <p>
              Conclusão prevista para 2027.{" "}
              Ampliação da base em aprendizado de máquina e aplicações de
              inteligência artificial.
            </p>
          </article>
          <article className="journey-entry">
            <span>Graduação concluída</span>
            <h4>Engenharia de Computação</h4>
            <p className="entry-place">Faculdade Galileu</p>
            <p>
              Base em computação e sistemas, com TCC dedicado à análise de
              sentimento com BERT.
            </p>
          </article>
          <article className="journey-entry">
            <span>Programa concluído · Edição 2024</span>
            <h4>Santander Coders · Front-end</h4>
            <p className="entry-place">Ada Tech</p>
            <p>
              Formação complementar em desenvolvimento de interfaces e
              aplicações web.
            </p>
          </article>
        </div>
        <div className="journey-column">
          <h3>
            <Icon name="layers" /> Tecnologia e operação
          </h3>
          <article className="journey-entry">
            <span>Maio de 2025 – presente</span>
            <h4>Analista de Desenvolvimento Júnior</h4>
            <p className="entry-place">Coco Cuesta · Negócio familiar</p>
            <p>
              Desenvolvimento do site institucional e trabalho no projeto de
              gestão, ainda em desenvolvimento, a partir das necessidades do
              negócio familiar.
            </p>
          </article>
          <article className="journey-entry">
            <span>Setembro de 2023 – fevereiro de 2024</span>
            <h4>Estagiário de Desenvolvimento de Software</h4>
            <p className="entry-place">FMB / Unesp</p>
            <p>
              Planejamento e levantamento de requisitos para um software de
              gestão de resíduos radioativos.
            </p>
          </article>
          <article className="journey-entry">
            <span>Março de 2021 – março de 2022</span>
            <h4>Aprendiz em Manutenção de Sistemas Eletrônicos</h4>
            <p className="entry-place">SENAI</p>
            <p>
              Aprendizagem profissional com vínculo e formação em manutenção
              de sistemas eletrônicos.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
