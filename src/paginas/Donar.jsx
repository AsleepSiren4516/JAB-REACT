import Donacion from "../componentes/Donacion";
import filosofo from "../assets/ghandi.jpeg";
import { FaHeart, FaLock, FaBoxOpen } from "react-icons/fa";

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
   
        <div className="container-fluid px-5">
          <div className="row">

            {/* Contenedor 1 (más ancho) */}
            <div className="col-lg-8">
              <div className="donar-form text-start">
                <div className="d-flex flex-column">
                  <h1 className="donar-datos-title mt-3">Donacion economica</h1>
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
                      <p className="pago-seguro py-1 my-0 fs-6 "><FaLock/>Pago seguro. Todas las transacciones están cifradas y se realizan mediante PayPal.</p>
                    </div>
                  </div>
                  <hr />
                </div>
                <h3 className="general-text"><FaBoxOpen/>Tambien puedes donar en especie</h3>
              </div>
            </div>

            {/* Contenedor 2 (más pequeño) */}
            <div className="col-lg-4">
              <div className="donar-info">
                Aquí irá el segundo contenedor
              </div>
            </div>

          </div>
        </div>
                    
        </>
      );
}