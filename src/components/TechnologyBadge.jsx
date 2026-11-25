import { useRef } from "react";
import "../styles/TechnologyBadge.css";

import Java from "../assets/java.svg";
import Spring from "../assets/spring-boot.svg";
import SpringData from "../assets/spring-data.svg";
import SpringSecurity from "../assets/spring-security.svg";
import SpringAI from "../assets/spring-ai.svg";
import ReactIcon from "../assets/react.svg";
import HTML from "../assets/html.svg";
import JavaScript from "../assets/javascript.svg";
import CSS from "../assets/css.svg";
import SQLite from "../assets/sqlite.svg";
import MySQL from "../assets/mysql.svg";
import Postman from "../assets/postman.svg";
import Git from "../assets/git.svg";
import Docker from "../assets/docker.svg";
import VsCode from "../assets/vscode.svg";
import Intellijidea from "../assets/intellijidea.svg";

const technology = [
  { icon: Java, name: "Java" },
  { icon: Spring, name: "Spring Boot" },
  { icon: SpringData, name: "Spring Data JPA " },
  { icon: SpringSecurity, name: "Spring Security" },
  { icon: SpringAI, name: "Spring AI" },
  { icon: JavaScript, name: "JavaScript" },
  { icon: HTML, name: "HTML" },
  { icon: CSS, name: "CSS" },
  { icon: ReactIcon, name: "React" },
  { icon: MySQL, name: "MySQL" },
  { icon: SQLite, name: "SQLite" },
];

const technologyTools = [
  { icon: Git, name: "Git" },
  { icon: Postman, name: "Postamn" },
  { icon: Docker, name: "Doker" },
  { icon: Intellijidea, name: "Intellijidea" },
  { icon: VsCode, name: "VsCode" },
];

export const TechnologyBadge = ({ className }) => {
  return (
    <section className={className}>
      <h3 id="habilidades" className="title-badge">
        <span className="span-tecno">Habil</span>

        <span className="span-logia">idades</span>
      </h3>
      <div className="technology-container">
        <section className="section container-technology">
          <h3 className="technology-title">Tecnologias</h3>
          <ul className="container-listT">
            {technology.map((technology) => {
              return (
                <li className="list-technology" key={technology.name}>
                  <img
                    src={technology.icon}
                    className="icon-technology"
                    title={technology.name}
                  />
                </li>
              );
            })}
          </ul>
        </section>
        <section className="section container-tools">
          <h3 className="technology-title">Herramientas</h3>

          <ul className="container-listT">
            {technologyTools.map((technology) => {
              return (
                <li className="list-technology" key={technology.name}>
                  <img
                    src={technology.icon}
                    className="icon-technology"
                    title={technology.name}
                  />
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </section>
  );
};
