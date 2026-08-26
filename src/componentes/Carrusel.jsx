import { useState } from "react";
import { NavLink } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const chunkArray = (arr, size) => {
  const chunked = [];
  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + size));
  }
  return chunked;
};

export default function Carrusel({ items = [], modoServicios = false, modoLogos = false }) {
  const [hoveredId, setHoveredId] = useState(null);

  if (modoLogos) {
    const logoPages = chunkArray(items, 5);

    return (
      <div className="carrusel-logos-paginado">
        <Carousel 
          interval={4000} 
          controls={true} 
          indicators={true} 
          wrap={true}
          pause="hover"
        >
          {logoPages.map((page, pageIndex) => (
            <Carousel.Item key={pageIndex} className="py-3">
              <Row className="justify-content-center align-items-center gx-2 gy-3">
                {page.map((logo, index) => {
                  const esElCentro = index === 2;
                  
                  const esActivo = hoveredId !== null 
                    ? hoveredId === logo.id 
                    : esElCentro;

                  return (
                    <Col key={logo.id} xs={6} sm={4} md={2} className="text-center">
                      <div 
                        className="logo-card-wrapper"
                        onMouseEnter={() => setHoveredId(logo.id)}
                        onMouseLeave={() => setHoveredId(null)}
                      >
                        <div className={`logo-circle-container ${esActivo ? "activo" : ""}`}>
                          {logo.svg ? (
                            logo.svg
                          ) : (
                            <img 
                              src={logo.src} 
                              alt={logo.nombre} 
                              className="logo-img" 
                              style={logo.estiloImg || {}} 
                            />
                          )}
                        </div>
                        <span className={`logo-caption ${esActivo ? "activo" : ""}`}>
                          {logo.nombre}
                        </span>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }

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