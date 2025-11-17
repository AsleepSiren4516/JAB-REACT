import React from "react";

const Navbar = () => {
    return (
        <div className="container-fluid p-0 nav-bar">
            <nav className="navbar navbar-expand-lg bg-none navbar-dar py-3">
                <a href="img/JAB_Logo.svg" alt="Logo JAB" style={{height: "100px"}}>
                </a>
                <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto p-4">
                        <a href="/" className="nav-item nav link active">Inicio</a>
                        <a href="/sobre" className="nav-item nav-link">Sobre nosotros</a>
                        <a href="/servicios" className="nav-item nav-link">Servicios</a>
                        <a href="/contacto" className="nav-item nav-link">Contactanos</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};