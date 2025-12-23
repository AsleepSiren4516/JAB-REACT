import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function PiePagina() {
  return (
    <footer className="footer">
      <div className="footer-contenido">

        <div className="footer-col">
          <h4>Síguenos</h4>
          <div className="d-flex justify-content-center">
            <a className="icono-social" href="https://www.facebook.com/fundacionJAB/" target="_blank">
              <FaFacebookF />
            </a>
            <a className="icono-social" href="https://www.instagram.com/jabcoloreandotuvida/" target="_blank">
              <FaInstagram />
            </a>
            <a className="icono-social" href="https://www.linkedin.com/company/jab-coloreando-tu-vida-a-c/" target="_blank">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-copy">© 2026 JAB. Todos los derechos reservados. | Pagina y diseños desarrollados por <a className="autores" href="">Loana</a></div>
    </footer>
  );
}

