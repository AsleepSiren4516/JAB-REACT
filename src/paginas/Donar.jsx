import Donacion from "../componentes/Donacion";
import filosofo from "../assets/ghandi.jpeg";
import fondo from "../assets/bg.jpg"

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
   
        <div className="d-flex flex-column align-items-center">
          <h4 className="donar-datos-subtitle pt-4">Apoyanos</h4>
          <h1 className="donar-datos-title mt-2">Haz la diferencia</h1>
        </div>  
        <br/>

        <div className="py-2 pb-4">
          <div className="donar-datos">
            <div className="donar-datos-inner">
              <p className="about-text text-center">Tu apoyo nos ayuda a continuar con nuestra labor y a cambiar vidas. ¡Gracias por tu donación!</p>
              <Donacion />
            </div>      
          </div>
        </div>
        </>
      );
}