import { SocialLinks } from "./SocialLinks";
import "../styles/Home.css";
import Arrow from "../assets/right-arrow.svg";
import { DownloadIcon } from "../assets/DownloadIcon";
import { TechnologyBadge } from "./TechnologyBadge";
export const Home = ({ className }) => {
  return (
    <section className={className}>
      <section className="container-text">
        <h4 className="hi">Hola soy</h4>
        <h2 className="name">
          <span className="span-name">EM</span>
          <span className="span-name-last">IR</span>
        </h2>
        <h2 className="last-name">
          GUAN<span className="span-last-name">ACT</span>
          <span>O</span>
          <span className="span-last-name">LAY</span>
        </h2>
        <h3 className="developer">
          BACKEND
          <span className="span-backend">DEVELOPER </span>
        </h3>
        <p className="description">
          Desarrollador enfocado en el desarrollo Backend con Java y Spring
          Boot.
        </p>
      </section>
      <div className="container-links">
        <a
          href="https://github.com/Emir201G?tab=repositories"
          className="btn-projects"
        >
          Ver Repositorio <img src={Arrow} alt="" className="icon-arrow" />
        </a>
        <a
          className="btn-projects btns-cv"
          href="/EmirGuanactolay CV.pdf"
          download="EmirGuanactolay CV.pdf"
        >
          Descargar CV
          <DownloadIcon className="icon-cv" />
        </a>
      </div>
    </section>
  );
};
