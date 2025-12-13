import { Link } from "react-router-dom";
import Logo2 from "../assets/JAB_Logo_Negativo.svg"
import "../css/style.css"

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg position-absolute w-100 p-3" style={{ zIndex: 10 }}>
      <Link className="navbar-brand" to="/">
        <img src={Logo2} alt="JAB Logo" className="logo-negative"/>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse middle-right" id="navMenu">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/sobre">Sobre nosotros</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/servicios">Servicios</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contacto">Contactanos</Link></li>
        </ul>

        <button className="nav-donar">Donar</button>

      </div>
    </nav>
  );
}
