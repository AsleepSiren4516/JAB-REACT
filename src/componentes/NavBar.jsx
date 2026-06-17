import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import Logo2 from "../assets/JAB_Logo_Negativo.svg";
import "../css/style.css";

export default function NavBar() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".navbar");
      if (nav) {
        nav.classList.toggle("sticky", window.scrollY > 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar nav-sticky">
      <div className="nav-container">
 
        <div className="nav-column left">
          <NavLink className="navbar-brand-custom" to="/">
            <img src={Logo2} alt="JAB Logo" className="logo-img" />
          </NavLink>
        </div>
        <div className="nav-column center">
          <ul className="nav-links-container">
            <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>Inicio</NavLink></li>
            <li><NavLink to="/sobre" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>Sobre nosotros</NavLink></li>
            <li><NavLink to="/servicios" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>Servicios</NavLink></li>
            <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>Contáctanos</NavLink></li>
            <li><NavLink to="/transparencia" className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}>Transparencia</NavLink></li>
          </ul>
        </div>
        <div className="nav-column right">
          <NavLink to="/donar" className="btn-donar-vibrante">
            Donar
          </NavLink>
        </div>

      </div>
    </nav>
  );
}