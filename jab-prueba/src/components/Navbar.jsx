import React from "react";
import Logo from "../assets/JAB_Logo.svg";

export default function Navbar() {
  return (
    <div className="container-fluid p-0 nav-bar">
      <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
        <a href="/" className="navbar-brand px-lg-4 m-0">
          <img src={Logo} alt="Logo JAB" style={{ height: "100px" }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <div className="navbar-nav ml-auto p-4">
            <a href="/" className="nav-item nav-link active">Inicio</a>
            <a href="/sobre" className="nav-item nav-link">Sobre nosotros</a>
            <a href="/servicios" className="nav-item nav-link">Servicios</a>
            <a href="/contacto" className="nav-item nav-link">Contáctanos</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
