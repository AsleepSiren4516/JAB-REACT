import { NavLink } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Carrusel({ items, modoServicios = false }) {
  return (
    <div className={`carrusel-container ${modoServicios ? "carrusel-modo-serv" : ""}`}>
      <Carousel interval={5000} controls={true} indicators={true} wrap={true}>
        
        {items.map((item, index) => (
          <Carousel.Item key={index} className="carrusel-item">
            <img
              className="d-block w-100 carrusel-img"
              src={item.src}
              alt={item.alt || "Slide"}
            />
            {!modoServicios ? (
              <div className="carrusel-overlay">
                <h3>{item.titulo}</h3>
                <p>{item.texto}</p>
                <NavLink to={item.link} className="btn-carrusel">
                  {item.botonLabel}
                </NavLink>
              </div>
            ) : (
              <div className="transparencia-servicios-boceto">
                <p>{item.descripcionFoto}</p>
              </div>
            )}
          </Carousel.Item>
        ))}

      </Carousel>
    </div>
  );
}