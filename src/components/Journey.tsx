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
            <span>Especialização em andamento</span>
            <h4>Inteligência Artificial</h4>
            <p className="entry-place">
              Universidade Tecnológica Federal do Paraná · UTFPR
            </p>
            <p>
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
            <span>Programa concluído</span>
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
            <span>Negócio familiar</span>
            <h4>Gelo Mais Sabor / Coco Cuesta</h4>
            <p>
              Vivência em rotinas administrativas, marketing e operação. Esse
              contexto ajuda a definir os problemas que busco resolver com o
              site da marca e o Gelo Gestão.
            </p>
          </article>
          <article className="journey-entry">
            <span>Estágio · 2023–2024</span>
            <h4>FMB / Unesp</h4>
            <p>
              Planejamento e levantamento de requisitos para um software de
              gestão de resíduos radioativos.
            </p>
          </article>
          <article className="journey-entry">
            <span>Aprendizagem · 2021–2022</span>
            <h4>Manutenção de Sistemas Eletrônicos</h4>
            <p className="entry-place">Senai</p>
            <p>
              Primeiro contato profissional com processos técnicos e manutenção.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
