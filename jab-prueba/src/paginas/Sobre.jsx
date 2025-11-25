// Sobre.jsx
import React from "react";
import Navbar from "../components/Navbar";
import PiePagina from "../components/PiePagina";

// Datos de valores
const valores = [
  { icon: "fa-users", title: "Inclusión", desc: "Promovemos la participación equitativa de todas las personas, sin importar su condición, fomentando una cultura que valore la diversidad y la igualdad de oportunidades." },
  { icon: "fa-balance-scale", title: "Honestidad", desc: "Actuar con verdad, transparencia e integridad en todas las acciones y comunicaciones de la asociación y de quienes la conforman." },
  { icon: "fa-heart", title: "Empatía", desc: "Comprendemos las emociones y circunstancias de los demás sin juzgar, brindando siempre lo mejor de nosotros." },
  { icon: "fa-hand-holding-heart", title: "Responsabilidad", desc: "Todos los miembros de la asociación tienen el compromiso de actuar intencionadamente en favor del bienestar y crecimiento de la comunidad." },
  { icon: "fa-handshake", title: "Compromiso", desc: "Asumimos con dedicación la tarea de servir y transformar vidas, cumpliendo nuestras promesas con pasión y constancia." },
  { icon: "fa-briefcase", title: "Profesionalismo", desc: "Brindamos atención de calidad mediante un equipo capacitado y ético, que actúa con responsabilidad y respeto en cada área de trabajo." },
  { icon: "fa-people-carry", title: "Trabajo en equipo", desc: "Fomentamos la colaboración entre profesionales, familias y comunidad para lograr un impacto integral y sostenido." }
];

export default function Sobre() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Page Header */}
      <div className="container-fluid page-header mb-5 position-relative overlay-bottom">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: "400px" }}>
          <h1 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase">Sobre nosotros</h1>
          <div className="d-inline-flex mb-lg-5">
            <p className="m-0 text-white"><a className="text-white" href="/">Inicio</a></p>
            <p className="m-0 text-white px-2">/</p>
            <p className="m-0 text-white">Sobre nosotros</p>
          </div>
        </div>
      </div>

      {/* Valores */}
      <div className="container-fluid py-5" style={{ backgroundColor: "#f9f6ff" }}>
        <div className="container">
          <div className="section-title text-center mb-5">
            <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Nuestros</h4>
            <h1 className="display-4 font-weight-bold">Valores</h1>
          </div>
          <div className="row">
            {valores.map((val, i) => (
              <div key={i} className={i === valores.length - 1 ? "col-lg-12 col-md-12 mb-4" : "col-lg-4 col-md-6 mb-4"}>
                <div className="card shadow-sm border-0 h-100 text-center p-4 rounded-4 hover-shadow">
                  <div className="icon-circle bg-purple text-white mx-auto mb-3">
                    <i className={`fa ${val.icon} fa-2x`}></i>
                  </div>
                  <h5 className="mb-3 font-weight-bold">{val.title}</h5>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PiePagina/>
      
    </div>
  );
}
