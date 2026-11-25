import { useState } from "react";
import "../styles/TopNav.css";
import MenuIcon from "../assets/menu.svg";

const listNav = ["Inicio", "Sobre Mi", "Habilidades", "Proyectos"];

export const Menu = ({ className, onClick, isOpen }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      aria-expanded={isOpen}
      aria-label="Abrir menú de navegación"
    >
      <img src={MenuIcon} alt="Menú" />
    </button>
  );
};

export const TopNav = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={className}>
      <nav>
        <ul className={`container-list-nav ${isOpen ? "open" : ""}`}>
          {listNav.map((name) => (
            <li className="list-nav" key={name}>
              <a
                href={`#${name.toLowerCase().replace(/\s+/g, "-")}`}
                className="btn-nav"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
        <Menu className="menu" onClick={toggleMenu} isOpen={isOpen} />
      </nav>
    </header>
  );
};
