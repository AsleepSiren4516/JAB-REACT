import { Link } from "react-router-dom";
import "../css/style.css"

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg position-absolute w-100 p-3" style={{ zIndex: 10 }}>
      <Link className="navbar-brand text-white" to="/">JAB</Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navMenu">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link text-white" to="/">Inicio</Link></li>
          <li className="nav-item"><Link className="nav-link text-white" to="/sobre">Sobre nosotros</Link></li>
          <li className="nav-item"><Link className="nav-link text-white" to="/servicios">Servicios</Link></li>
          <li className="nav-item"><Link className="nav-link text-white" to="/contacto">Contactanos</Link></li>
        </ul>
      </div>
    </nav>
  );
}
