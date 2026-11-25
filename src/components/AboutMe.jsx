import "../styles/AboutMe.css";
import { SocialLinks } from "./SocialLinks";
export const AboutMe = ({ className }) => {
  return (
    <section className={className}>
      <div className="container-about">
        <h3 className="title-about" id="sobre-mi">
          <span className="span-sobre">Sobre</span>{" "}
          <span className="span-mi">Mi</span>
        </h3>

        <SocialLinks className="social"></SocialLinks>
      </div>
      <article className="container-description">
        <p className="text-description">
          Soy estudiante de la Licenciatura en Sistemas, orientado
          principalmente al desarrollo Backend con Java y Spring Boot. Me
          especializo en la construcción de aplicaciones y servicios REST,
          trabajando con herramientas del ecosistema Spring como Spring Data
          JPA, Spring Security y Spring AI, además de bases de datos y otras
          tecnologías del entorno Java.
        </p>
        <p className="text-description">
          Actualmente estoy ampliando mis conocimientos en HTML, CSS, JavaScript
          y React, con el objetivo de complementar mi perfil Backend y adquirir
          las herramientas necesarias para desarrollar aplicaciones más
          completas, desde la lógica del servidor hasta la interfaz de usuario.
        </p>
      </article>
    </section>
  );
};
