import "../styles/Contact.css";
import { useState } from "react";

export const Contact = ({ className = "" }) => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Enviando...");

    const formData = new FormData(event.target);
    formData.append("access_key", "b6d5747c-eb14-4d28-9439-de93fae455d9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("Mensaje enviado con éxito.");
        event.target.reset();
      } else {
        setResult("Hubo un error al enviar el mensaje.");
      }
    } catch {
      setResult("Error de conexión. Intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`contact-wrapper ${className}`}>
      <h2>Contactos</h2>
      <form onSubmit={onSubmit} className="form-contact">
        <div className="form-group">
          <label htmlFor="name" className="label-contact">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Tu nombre"
            required
            className="input-contact"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="label-contact">
            Correo electrónico
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="tu@email.com"
            required
            className="input-contact"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="label-contact">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Escribe tu mensaje aquí..."
            required
            className="text-contact"
          ></textarea>
        </div>

        <button type="submit" disabled={isSubmitting} className="btn-contact">
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>

        {result && <p className="form-result">{result}</p>}
      </form>
    </section>
  );
};
