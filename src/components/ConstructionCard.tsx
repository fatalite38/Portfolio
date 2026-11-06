import { Icon } from "./Icons";
import "./ConstructionCard.css";

function ConstructionVisual() {
  return (
    <div className="construction-visual" aria-hidden="true">
      <span className="construction-shine" />
      <svg viewBox="0 0 600 420" focusable="false">
        <path
          className="construction-grid"
          d="M0 340 600 305M0 368l600-40M0 400l600-44M40 420l250-144M180 420l160-144M320 420l72-144M460 420l-14-144M595 420l-98-144"
        />
        <ellipse
          className="construction-orbit"
          cx="300"
          cy="236"
          rx="265"
          ry="80"
          transform="rotate(-16 300 236)"
        />
        <path className="construction-route" d="M70 310h76V190h338M146 344h254v-74h110" />
        <path className="construction-guides" d="M146 344V100l300-58v290M146 100l300 232M146 344l300-302" />
        <g className="construction-nodes">
          <circle cx="146" cy="190" r="3" />
          <circle cx="146" cy="344" r="3" />
          <circle cx="400" cy="270" r="3" />
          <circle cx="446" cy="42" r="3" />
          <circle cx="484" cy="190" r="3" />
        </g>
        <g transform="translate(160 124) skewY(-8)">
          <g className="construction-window">
            <rect className="construction-window-surface" width="286" height="218" rx="10" />
            <path className="construction-window-line" d="M0 33h286M72 33v185" />
            <g className="construction-nodes">
              <circle cx="17" cy="17" r="3" />
              <circle cx="29" cy="17" r="3" />
              <circle cx="41" cy="17" r="3" />
            </g>
            <g className="construction-blocks">
              <rect x="14" y="52" width="43" height="8" rx="3" />
              <rect x="14" y="78" width="32" height="6" rx="3" />
              <rect x="14" y="99" width="40" height="6" rx="3" />
              <rect x="14" y="120" width="35" height="6" rx="3" />
              <rect x="88" y="160" width="164" height="6" rx="3" />
              <rect x="88" y="178" width="136" height="6" rx="3" />
              <rect x="88" y="196" width="81" height="6" rx="3" />
            </g>
            <rect className="construction-image-panel" x="88" y="53" width="109" height="89" rx="6" />
            <path className="construction-landscape" d="m101 125 26-35 18 21 13-14 26 28z" />
            <circle className="construction-landscape" cx="175" cy="74" r="7" />
            <path className="construction-placeholder-lines" d="M213 65h51M213 84h38M213 103h47M213 122h29" />
          </g>
        </g>
        <g transform="translate(80 200) skewY(-8)">
          <g className="construction-piece construction-piece--code">
            <rect className="construction-floating-surface" width="65" height="58" rx="6" />
            <path className="construction-code" d="m24 19-11 10 11 10m17-20 11 10-11 10m-5-25-7 30" />
          </g>
        </g>
        <g transform="translate(448 75) skewY(-8)">
          <g className="construction-piece construction-piece--tiles">
            <rect className="construction-floating-surface" width="73" height="67" rx="6" />
            <circle className="construction-ring" cx="36" cy="33" r="17" />
            <circle className="construction-ring-highlight" cx="36" cy="33" r="17" />
          </g>
        </g>
        <g transform="translate(404 312) skewY(-8)">
          <g className="construction-piece construction-piece--message">
            <rect className="construction-floating-surface" width="94" height="48" rx="6" />
            <g className="construction-nodes">
              <circle cx="33" cy="24" r="3" />
              <circle cx="47" cy="24" r="3" />
              <circle cx="61" cy="24" r="3" />
            </g>
          </g>
        </g>
        <g className="construction-signal construction-signal--one">
          <circle cx="70" cy="310" r="3" />
        </g>
        <g className="construction-signal construction-signal--two">
          <circle cx="146" cy="344" r="3" />
        </g>
      </svg>
    </div>
  );
}

export function ConstructionCard() {
  return (
    <article className="construction-card" aria-labelledby="construction-title">
      <ConstructionVisual />
      <div className="construction-copy">
        <p className="construction-caption">Em construção</p>
        <h3 id="construction-title">
          O próximo projeto está tomando forma<span>.</span>
        </h3>
        <p className="construction-description">
          Estou explorando novos projetos em desenvolvimento full stack e
          inteligência artificial aplicada.
        </p>
        <a
          className="text-link construction-cta"
          href="#contato"
          onClick={() => {
            const target = document.getElementById("contato");
            if (target) {
              target.tabIndex = -1;
              target.focus({ preventScroll: true });
            }
          }}
        >
          Vamos criar algo juntos <Icon name="arrow" />
        </a>
      </div>
      <p className="construction-availability">
        <span aria-hidden="true" />
        Aberto a novos projetos e colaborações
      </p>
    </article>
  );
}
