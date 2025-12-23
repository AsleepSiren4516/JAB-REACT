import "../css/style.css";

// Importa las imágenes de tus servicios
import Servicio1 from "../assets/service-1.jpg";
import Servicio2 from "../assets/service-2.jpg";
import Servicio3 from "../assets/service-3.jpg";
import Servicio4 from "../assets/service-4.jpg";

export default function ServiciosBloque() {
  const servicios = [
    {
      id: 1,
      img: Servicio1,
      titulo: "Acompañamiento",
      descripcion:
        "Ofrecemos apoyo y acompañamiento personalizado, promoviendo la inclusión en distintos ámbitos de la vida diaria.",
    },
    {
      id: 2,
      img: Servicio2,
      titulo: "Capacitación",
      descripcion:
        "Realizamos talleres para capacitar a maestros y familias, fortaleciendo el cuidado y bienestar de los niños.",
    },
    {
      id: 3,
      img: Servicio3,
      titulo: "Inclusión",
      descripcion:
        "Identificamos talentos y fomentamos su participación en el ámbito laboral, cultural y deportivo, impulsando su desarrollo integral.",
    },
    {
      id: 4,
      img: Servicio4,
      titulo: "Concientización",
      descripcion:
        "Promovemos la sensibilización sobre diversas condiciones y cómo abordarlas de manera adecuada.",
    },
  ];

  return (
    <div className="servicios-container">
      {servicios.map((servicio) => (
        <div key={servicio.id} className="servicio-card">
          <img
            src={servicio.img}
            alt={servicio.titulo}
            className="servicio-img"
          />

          {/* CONTENEDOR QUE SE MUEVE */}
          <div className="servicio-info">
            <h3 className="servicio-titulo">{servicio.titulo}</h3>
            <p className="servicio-texto">{servicio.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

