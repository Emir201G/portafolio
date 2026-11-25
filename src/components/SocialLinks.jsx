import { GitHubIcon } from "../assets/GitHubIcon";
import { LinkedinIcon } from "../assets/LinkedinIcon";
import { AtIcon } from "../assets/AtIcon";
import "../styles/SocialLinks.css";
import { useState } from "react";

export const SocialLinks = ({ className }) => {
  const email = "mguanactolay18@gmail.com";
  const [copiado, setCopiado] = useState(false);
  const handleCopy = async (e) => {
    e.preventDefault();

    try {
      await navigator.clipboard.writeText(email);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (error) {
      console.error("Error al copiar el correo:", error);
    }
  };
  return (
    <>
      <nav className={className}>
        <ul className="container-list">
          <li className="list github">
            <a
              className="btn-social btn-github"
              href="https://github.com/Emir201G"
            >
              <GitHubIcon className="icon icon-github" />
              <span className="span-social-icons">GitHub</span>
            </a>
          </li>
          <li className="list link-socialedin">
            <a
              className="btn-social btn-linkedin"
              href="https://www.linkedin.com/in/emir-g-28590227b/"
            >
              <LinkedinIcon className="icon icon-linkedin" />
              <span className="span-social-icons">Linkedin</span>
            </a>
          </li>

          <li className="list email">
            <a className="btn-social btn-email" onClick={handleCopy}>
              <AtIcon className="icon icon-cv" />
              <span className="span-social-icons">Email</span>
            </a>
          </li>
        </ul>
      </nav>
      {copiado && (
        <div className="toast-copiado">✓ Email copiado al portapapeles</div>
      )}
    </>
  );
};
