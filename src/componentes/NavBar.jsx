import { NavLink } from "react-router-dom";
import Logo2 from "../assets/JAB_Logo_Negativo.svg";
import "../css/style.css";

export default function NavBar() {
  return (
    <nav className="navbar nav-sticky navbar-expand-lg p-3">
      <NavLink className="navbar-brand" to="/">
        <img src={Logo2} alt="JAB Logo" className="logo-negative" />
      </NavLink>

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
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/sobre"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Sobre nosotros
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/servicios"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Servicios
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contáctanos
            </NavLink>
          </li>
        </ul>

        <button className="nav-donar">Donar</button>
      </div>
    </nav>
  );
}
