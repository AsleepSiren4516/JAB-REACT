import Slide1 from "../assets/carrusel1.jpg";
import Slide2 from "../assets/carrusel2.jpg";
import Logo from "../assets/JAB_Logo.svg";

export default function Carrusel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      {/* Indicadores */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="carousel-slide">
            <img src={Slide1} className="d-block w-100" alt="Slide 1" />

            <div className="overlay"></div>

            <div className="carousel-content">
              {/*<h2>Titulo 1</h2>*/}
              {/*<p>Subtitulo 1</p>*/}
              <img src={Logo} className="logo"></img>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="carousel-slide">
            <img src={Slide2} className="d-block w-100" alt="Slide 2" />
            <div className="overlay"></div>
            <div className="carousel-content">
              <h2>Cambiando vidas</h2>
              <p>Desde 2018</p>
            </div>
          </div>
        </div>
      </div>

      {/* Controles */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}
