// NavBar.jsx
import { Link } from "react-router-dom";
import fondo from "../assets/fondo-de-textura-de-acuarela-de-cielo-azul-y-nubes.jpg";
import Logo from "../assets/JAB_Logo.svg"

export default function NavBar2() {
  return (
    <nav className="navbar navbar-expand-lg w-100 p-3" 
        style={{ 
          zIndex: 10,
          backgroundImage: `url(${fondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          }}
        >
      <Link className="navbar-brand" to="/">
            <img src={Logo} alt="JAB Logo" className="logo" />
      </Link>
      
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
        aria-controls="navMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
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