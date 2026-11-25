import "../styles/ProjectCard.css";
import Java from "../assets/java.svg";
import Spring from "../assets/spring-boot.svg";
import SpringData from "../assets/spring-data.svg";
import SpringSecurity from "../assets/spring-security.svg";
import SpringAI from "../assets/spring-ai.svg";
import MySQL from "../assets/mysql.svg";
import Firebase from "../assets/firebase.svg";
import Android from "../assets/android.svg";
import Cloudinary from "../assets/cloudinary.svg";
import Bookai from "../assets/bookai.png";
import GitHub from "../assets/github.svg";
import DualshareApp from "../assets/dualshare.jpg";
import DualshareBackend from "../assets/dualshare-backend.jpg";

const projects = [
  {
    number: 1,
    name: "BookAi",
    image: Bookai,
    status: "Terminado",
    repository: "https://github.com/Emir201G/BookAI",
    description:
      "BookAi es una aplicación Backend desarrollada con Java y Spring Boot que permite a barberías y peluquerías gestionar sus turnos mediante WhatsApp, utilizando inteligencia artificial para interpretar solicitudes en lenguaje natural. El sistema automatiza el proceso de reserva, consulta de disponibilidad, selección de servicios y gestión de citas, permitiendo que los clientes interactúen de manera sencilla a través de una conversación. Está diseñado bajo una arquitectura hexagonal, priorizando la separación de responsabilidades, la escalabilidad y el mantenimiento del código. La inteligencia artificial se encarga de interpretar las solicitudes, mientras que el Backend centraliza las reglas de negocio, valida las operaciones y administra la información",
    technologies: [
      { name: "Java", icon: Java },
      { name: "Spring Boot", icon: Spring },
      { name: "Spring Security", icon: SpringSecurity },
      { name: "Spring Data JPA", icon: SpringData },
      { name: "Spring AI", icon: SpringAI },
      { name: "MySQL", icon: MySQL },
    ],
  },
  {
    number: 2,
    name: "DualShare Backend",
    image: DualshareBackend,
    status: "Terminado",
    repository: "https://github.com/Emir201G/dualshare",
    description:
      "DualShare Backend es el servicio encargado de gestionar la lógica de negocio y la comunicación entre los usuarios de la aplicación Android. Desarrollado con Java y Spring Boot, proporciona una API REST para administrar usuarios, compartir imágenes y coordinar la información necesaria para mantener sincronizado el contenido entre dispositivos. Implementa una arquitectura modular, persistencia de datos y servicios externos para el almacenamiento y gestión de imágenes, utilizando Cloudinary y Firebase como parte de su ecosistema.",
    technologies: [
      { name: "Java", icon: Java },
      { name: "Spring Boot", icon: Spring },
      { name: "Spring Security", icon: SpringSecurity },
      { name: "Spring Data JPA", icon: SpringData },
      { name: "Firebase", icon: Firebase },
      { name: "Cloudinary", icon: Cloudinary },
    ],
  },
  {
    number: 3,
    name: "DualShare App",
    image: DualshareApp,
    status: "En desarrollo",
    repository: "https://github.com/Emir201G/Dual-Share",
    description:
      "DualShare es una aplicación Android que permite compartir imágenes entre usuarios y visualizarlas directamente desde los widgets de sus dispositivos móviles. La aplicación ofrece una experiencia de intercambio de imágenes sencilla, permitiendo enviar y recibir contenido de manera sincronizada. Su objetivo es llevar las imágenes compartidas directamente a la pantalla de inicio del teléfono mediante widgets personalizados.",
    technologies: [
      { name: "Java", icon: Java },
      { name: "Android", icon: Android },
      { name: "Firebase", icon: Firebase },
    ],
  },
];

export const ProjectCard = ({ className }) => {
  return (
    <section className={className}>
      <h2 className="title-card-project" id="proyectos">
        <span className="span-proye">Proye</span>
        <span className="span-ctos">ctos</span>
      </h2>
      {projects.map((project) => (
        <div className="box-project" key={project.name}>
          <div className="container-title-project">
            <span className="span-number-project">
              Proyecto 0{project.number}
            </span>
            <span
              className={`span-status${project.status === "En desarrollo" ? "-desarrollo" : ""}`}
            >
              {project.status}
            </span>
          </div>
          <div className="container-card-project">
            <article className="container-data">
              <h3 className="title-project">{project.name}</h3>
              <p className="description-project">{project.description}</p>
              <ul className="container-list-icon-project">
                {project.technologies.map((technology) => (
                  <li className="list-icon-technology" key={technology.name}>
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="icon-technology-project"
                    />
                  </li>
                ))}
              </ul>
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="repository"
              >
                <img
                  src={GitHub}
                  alt="GitHub"
                  className="icon-github-project"
                />
                Ver repositorio
              </a>
            </article>
            <div className="container-img-card">
              <img
                src={project.image}
                alt={project.name}
                className="img-project"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
