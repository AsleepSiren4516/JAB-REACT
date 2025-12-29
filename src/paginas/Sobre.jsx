import { useState } from "react";
import fondo from "../assets/fondo-about.jpg";
import objetivos from "../assets/img-objetivos.png"
import Separador from "../assets/Separador.svg";

export default function Sobre() {

  return (
    <>
    <div className="about-fondo">    
      <div className="pt-5 px-5">
        <div className="container-titulos pt-5 px-5">
          <h1 className="head-title pt-5">Sobre nosotros</h1>
          <p className="head-subtitle">Lo que nos define...</p>   
        </div>    
      </div>
    </div>
    <div>
      <div className="text-center">
        <h2 className="pt-4 txt-titulo">Objetivos</h2>
        <div className="decor-line mx-auto mb-3"></div>
      </div> 
      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-start g-1">
            <div className="about-text col-lg-5 order-2 position-relative ps-1 py-4"> 
              <h5 className="about-subtitle mb-0">Acompañando a las personas en cada etapa</h5>
              <br/>
              <p>
              Crear un centro de atención multidisciplinaria abierto a toda la población,
              orientado a brindar un acompañamiento integral que responda a las diversas
              necesidades de las personas y sus familias. 
              <br /><br />
              Nuestro espacio ofrece apoyo
              médico, legal y pedagógico, complementado con actividades deportivas,
              culturales y programas de formación para el trabajo, promoviendo el desarrollo
              personal y social.
              </p>
              </div>  
              {/* Columna de imagen */}
              <div className="col-lg-6 order-1 text-center">
                <img src={objetivos} alt="nose" className="img-objetivos"/>
              </div>
          </div>
        </div>
      </section>

      <section className="mision-vision">
       
        <div>
          <h2 className="txt-titulo">Misión</h2>
          <div className="decor-line mx-auto mb-3"></div>
          <div className="about-text">
            <p>
            Nuestro espacio ofrece apoyo médico, legal y pedagógico, complementado
            con actividades deportivas, culturales y programas de formación para el
            trabajo, promoviendo el desarrollo personal y social.
            <br/>
            <br/>
            A través de un enfoque integral y humano, buscamos fortalecer habilidades,
            impulsar la autonomía y generar oportunidades que favorezcan la inclusión,
            el bienestar y la participación activa dentro de la comunidad.
            </p>
           
          </div>
        </div>

        <div className="mv-image">
          <div className="img-provisional">Aún no hay una imagen</div>
        </div>

        <div>
          <h2 className="txt-titulo">Visión</h2>
          <div className="decor-line mx-auto mb-3"></div>
          <div className="about-text">
            <p>
            Mejorar la calidad de vida de las personas con discapacidad y de sus
            familias, promoviendo una nueva cultura de inclusión y participación social.
            <br/>
            <br/>
            Buscamos generar espacios de oportunidades reales, donde cada individuo
            pueda desarrollarse plenamente, fortalecer sus habilidades y contribuir activamente
            a la comunidad, fomentando la igualdad, la autonomía y el bienestar colectivo.

            </p>
            
          </div>
        </div>
      </section>

      <img src={Separador} alt="Separador" className="separador" />

      <section>
        <h2 className="">Valores</h2>
        <div className="carrousel-valores">
          <div className="group">
            <div className="carta">             
                <h5>INCLUSION</h5>
                <p>
                Promovemos la participación equitativa de todas las personas, sin importar su condición, 
                fomentando una cultura que valore la diversidad y la igualdad de oportunidades.
                </p>
            </div>
            <div className="carta">2</div>
            <div className="carta">3</div>
            <div className="carta">4</div>
            <div className="carta">5</div>
            <div className="carta">6</div>
            <div className="carta">7</div>
          </div>
          <div aria-hidden className="group">
            <div className="carta">1</div>
            <div className="carta">2</div>
            <div className="carta">3</div>
            <div className="carta">4</div>
            <div className="carta">5</div>
            <div className="carta">6</div>
            <div className="carta">7</div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
