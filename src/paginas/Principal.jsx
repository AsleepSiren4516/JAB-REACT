import Carrusel from "../componentes/Carrusel";
import ServiciosBloque from "../componentes/ServiciosBloque.jsx"
import PiePagina from "../componentes/PiePagina";
import Separador from "../assets/Separador.svg";
import aboutImg from "../assets/about.png";
import logo from "../assets/corazon_logo.svg";

export default function Principal() {
  return (
    <>
      <Carrusel />
      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-start g-1">

            <div className="col-lg-6 order-2 position-relative ps-0">
              <img
                src={logo}
                alt="Logo Corazón"
                className="about-logo"
              />
              <br />
              <h2 className="about-title">¿Qué es JAB?</h2>
              <h5 className="about-subtitle">Cambiando vidas desde 2018</h5>
              <br />
              <p className="about-text">
                Somos una Asociación Civil sin fines de lucro dedicada a brindar apoyo, atención
                y acompañamiento a personas con discapacidad física e intelectual, así como a sus familias
                y a su entorno.
                <br /><br />
                Promovemos la inclusión de talentos en los ámbitos laboral, cultural y
                deportivo, sin distinción de género, creencias ni condiciones sociales.
              </p>
            </div>

            {/* Columna de imagen */}
            <div className="col-lg-6 order-1 text-center">
              <img
                src={aboutImg}
                alt="Sobre nosotros"
                className="about-image img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <img src={Separador} alt="Separador" className="separador" />
      <ServiciosBloque />
      <PiePagina />
    </>
  );
}

