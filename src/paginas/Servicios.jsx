import React from "react";
import "../css/style.css";

// Importa las imágenes de tus servicios
import Servicio1 from "../assets/service-1.jpg";
import Servicio2 from "../assets/service-2.jpg";
import Servicio3 from "../assets/service-3.jpg";
import Servicio4 from "../assets/service-4.jpg";

export default function Servicios() {
  const servicios = [
    {
      id: 1,
      img: Servicio1,
      titulo: "Servicio 1",
      descripcion: "Descripción breve del servicio 1.",
    },
    {
      id: 2,
      img: Servicio2,
      titulo: "Servicio 2",
      descripcion: "Descripción breve del servicio 2.",
    },
    {
      id: 3,
      img: Servicio3,
      titulo: "Servicio 3",
      descripcion: "Descripción breve del servicio 3.",
    },
    {
      id: 4,
      img: Servicio4,
      titulo: "Servicio 4",
      descripcion: "Descripción breve del servicio 4.",
    },
  ];

  return (
    <div className="servicios-container">
      {servicios.map((servicio) => (
        <div key={servicio.id} className="servicio-card">
          <img src={servicio.img} alt={servicio.titulo} className="servicio-img" />
          <h3 className="servicio-titulo">{servicio.titulo}</h3>
          <p className="servicio-texto">{servicio.descripcion}</p>
        </div>
      ))}
    </div>
  );
}
