import Carousel from 'react-bootstrap/Carousel';
import Slide1 from "../assets/carrusel1.jpg";
import Slide2 from "../assets/carrusel2.jpg";
import Logo from "../assets/JAB_Logo.svg";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Carrusel() {
  return (
    <Carousel
      pause={false}      // No se detiene al hover
      interval={5000}    // Tiempo entre slides (ms)
      controls={true}    // Muestra los botones prev/next
      indicators={true}  // Muestra los indicadores
      wrap={true}        // Repite el carrusel en bucle
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide1}
          alt="Slide 1"
        />
        <div className="overlay"></div>
        <div className="carousel-content">
          <img src={Logo} className="logo" alt="Logo" />
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide2}
          alt="Slide 2"
        />
        <div className="overlay"></div>
        <div className="carousel-content">
          <img src={Logo} className="logo" alt="Logo" />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
