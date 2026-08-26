import { NavLink } from "react-router-dom";
import Donacion from "../componentes/Donacion";
import frase from "../assets/frase-donar.jpg";
import fondoDonar from "../assets/fondo-donar.jpg";

import {
  FaLock, FaHeartbeat, FaTshirt,
  FaPuzzlePiece, FaShoppingBasket, FaArrowCircleRight,
  FaBrain, FaWheelchair, FaPaintBrush
} from "react-icons/fa";

export default function Donar() {
  return (
    <>
      <div
        className="donar"
        style={{ backgroundImage: `url(${fondoDonar})` }}
      >
        <div className="container h-100 donar-contenedor">
          <div className="row h-100 align-items-center justify-content-end">
            <div className="col-lg-6 col-md-8 text-white text-start pe-lg-4 py-5">
              <span className="text-uppercase fw-bold letter-spacing-1" style={{ color: "#ffd755" }}>
                APÓYANOS
              </span>
              <h1 className="display-4 fw-bold my-2 text-white">
                Tu donativo puede cambiar vidas
              </h1>
              <p className="lead fs-6 mb-4 text-white-80">
                Cada pequeño esfuerzo suma al éxito final. Juntos podemos lograr lo imposible y llenar de color el camino de quienes más lo necesitan.
              </p>
              <div className="hero-stats-card bg-white text-dark p-3 rounded-3 shadow-sm">
                <div className="row text-center align-items-center m-0">
                  <div className="col-4 border-end">
                    <h3 className="fw-bold m-0 text-primary-jab">+500</h3>
                    <small className="text-muted d-block fw-semibold">familias</small>
                  </div>
                  <div className="col-4 border-end">
                    <h3 className="fw-bold m-0 text-primary-jab">8</h3>
                    <small className="text-muted d-block fw-semibold">programas</small>
                  </div>
                  <div className="col-4">
                    <h3 className="fw-bold m-0 text-primary-jab">100%</h3>
                    <small className="text-muted d-block fw-semibold">impacto directo</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column">
        </div>
        <div className="w-100 p-0 m-0 text-center">
        <img 
          src={frase} 
          className="img-fluid d-block w-100"
        />
      </div>
      <div className="container py-3">
        <div className="row">
          <div className="col-lg-8">
            <div className="donar-form text-start">
              <div className="py-0 pb-1">
                <div className="donar-datos">
                  <div className="donar-datos-inner">
                    <p className="monto">Selecciona un monto</p>
                    <Donacion />  
                    <p className="pago-seguro py-1 my-0 fs-6">
                      <FaLock className="me-1"/>Pago seguro con PayPal
                    </p>
                  </div>
                </div>
                <hr/>
              </div>
              <div>
                <h3 className="general-text mb-3 fs-5">
                  Tambien puedes donar en especie
                </h3>
                <p><FaHeartbeat className="iconos me-3"/>Aparatos medicos</p>
                <hr/>
                <p><FaTshirt className="me-3 iconos"/>Ropa en buen estado</p>
                <hr/>
                <p><FaShoppingBasket className="me-3 iconos"/>Despensas y alimentos no perecederos</p>
                <hr/>
                <p><FaPuzzlePiece className="me-3 iconos"/>Juguetes y articulos para niños</p>
                <hr/>            
                <div className="text-center my-5 mb-5">
                  <NavLink to="/contacto" className="general-text autores fs-5.5 text-decoration-none">
                    Contáctanos para coordinar tu donación <FaArrowCircleRight />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="donar-info col-lg-4">
            <div>
              <h3 className="general-text mt-5">Tu donacion hace posible...</h3>
            </div>

            <div className="my-5">
              <div className="cartas-donacion">
                <FaBrain className="iconos"/>
                <p className="title-prin mt-2">Sesiones de psicologias</p>
                <p className="general-text mt-1">Para familias en situacion vulnerable</p>
              </div>

              <div className="cartas-donacion">
                <FaWheelchair className="iconos"/>
                <p className="title-prin mt-2">Terapias de rehabilitacion</p>  
                <p className="general-text mt-1">Para personas con discapacidad</p>                  
              </div>

              <div className="cartas-donacion">
                <FaPaintBrush className="iconos"/>
                <p className="title-prin mt-2">Actividades ludicas</p>
                <p className="general-text mt-1">Para niñas y niños de la comunidad</p>        
              </div>

              <div>
                <div className="cont-agradecimiento mt-4">
                  <p className="agradecimiento-titulo text-center">"Tus sueños son mis alas"</p>
                  <p className="agradecimiento-text text-center">
                    Gracias por permitirnos ser parte de tu vuelo y de cada historia de transformacion
                  </p>
                  <p className="agradecimiento-text text-center">
                    <strong>- JAB Coloreando tu vida -</strong>
                  </p>
                </div>                  
              </div>            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}