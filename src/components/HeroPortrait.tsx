import professionalPhoto from "../../assets/img/luiz-pedrozo-profissional.png";

export function HeroPortrait() {
  return (
    <figure className="hero-portrait">
      <div className="portrait-frame portrait-frame--photo">
        <div className="portrait-light" aria-hidden="true" />
        <img
          src={professionalPhoto}
          width={1254}
          height={1254}
          alt="Luiz Pedrozo de blazer azul-marinho e camisa clara"
          fetchPriority="high"
        />
        <span className="portrait-corner" aria-hidden="true" />
      </div>
      <figcaption>
        <span>Luiz Pedrozo</span>
        <span>Desenvolvedor full stack</span>
      </figcaption>
    </figure>
  );
}
