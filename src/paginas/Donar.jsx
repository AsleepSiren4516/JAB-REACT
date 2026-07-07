import { NavLink } from "react-router-dom";
import Donacion from "../componentes/Donacion";
import filosofo from "../assets/ghandi.jpeg";
import { FaHeart, FaLock, FaBoxOpen, FaHeartbeat, FaTshirt, FaPuzzlePiece, FaShoppingBasket, FaArrowCircleRight, FaBrain, FaWheelchair, FaPaintBrush } from "react-icons/fa";
import { BsPersonWheelchair } from "react-icons/bs";

export default function Donar(){
    return (
        <>
        <div className="donar">
          <div className="donar-contenedor container">
            <div className="row align-items-center g-4">

              <div className="col-lg-6 order-2 position-relative">
                <br />
                <h2 className="donar-title">
                  "La verdadera humanidad se muestra en cómo tratamos a los más vulnerables."
                </h2>
                <br />
                <h5 className="donar-subtitle text-end">
                  ~ Mahatma Gandhi
                </h5>
              </div>

              <div className="col-lg-6 order-1 text-center">
                <img
                  src={filosofo}
                  alt="Sobre nosotros"
                  className="donar-image img-fluid"
                />
              </div>

            </div>
          </div>
        </div>
   
        <div className="container py-3">
          <div className="row">

            {/* Contenedor 1 (más ancho) */}
            <div className="col-lg-8">
              <div className="donar-form text-start">
                <div className="d-flex flex-column">
                  <h1 className="donar-datos-title mt-5">Donacion economica</h1>
                </div>
                <div className="py-0 pb-1">
                  <div className="donar-datos">
                    <div className="donar-datos-inner">
                      
                      {/*
                      <p className="about-text">
                        Tu apoyo nos ayuda a continuar con nuestra labor y a cambiar vidas. ¡Gracias por tu donación!
                      </p>
                      */}

                      <p className="monto">Selecciona un monto</p>
                      
                      <Donacion />   
                      <p className="pago-seguro py-1 my-0 fs-6"><FaLock className="me-1"/>Pago seguro con PayPal</p>
                      
                    </div>
                  </div>
                  <hr/>
                </div>
                <div>
                  <h3 className="general-text mb-3 fs-5"><FaBoxOpen className="me-2 iconos"/>Tambien puedes donar en especie</h3>
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
            {/* Contenedor 2 (más pequeño) */}
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
                    <p className="agradecimiento-titulo">"Tus sueños son mis alas"</p>
                    <p className="agradecimiento-text">Gracias por permitirnos ser parte de tu vuelo y de cada historia de transformacion</p>
                    <p className="agradecimiento-text">- JAB Coloreando tu vida</p>
                  </div>                   
                </div>             
              </div>
              
            </div>

          </div>
        </div>
                    
        </>
      );
}