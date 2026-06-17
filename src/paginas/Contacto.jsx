import {FaPhone, FaEnvelope } from "react-icons/fa";

export default function Contacto() {
  return (
    <>
    <div className="contacto-fondo">    
      <div className="pt-5 px-5">
        <div className="container-titulos pt-5 px-5">
          <h1 className="head-title pt-5" style={{color: "#123448"}}>Contáctanos</h1>
          <p className="head-subtitle">Se parte del cambio</p>   
        </div>    
      </div>
    </div>

      <div className="container mt-5">
        <div className="contenedor-centrado d-flex flex-column align-items-center py-4">
          <h2 className="pt-4 txt-titulo">Capacitación</h2>
          <br/>
          <p className="general-text">
            Diseñamos programas de <strong>formación integral</strong> que transforman entornos y fortalecen a las personas. 
            Nuestras capacitaciones van desde la <strong>sensibilización y la cultura inclusiva</strong>, hasta el cumplimiento de los 
            <strong> derechos humanos y el Protocolo Facultativo</strong>. 
            Ofrecemos herramientas prácticas para impulsar la inclusión en empresas y centros educativos, y promovemos la 
            <strong> autonomía de las personas con discapacidad</strong> a través de talleres de vida independiente.
          </p>
          <br/>
          <h3 className="text-capacitacion pb-5">¡Tu talento puede cambiar vidas!</h3>
          <h2 className="text-oscuro">Contactanos</h2> 
          <div className="mx-auto"></div>
        </div>   
        <div className="d-flex justify-content-center gap-5 pb-5"> 
          <div className="d-flex flex-column align-items-center text-center">
            <a className="icono-contacto"><FaPhone/></a>
            <h4 className="text-oscuro py-2">Telefono</h4>
            <p className="about-text">33 3661 2544</p>
          </div>
          <div className="d-flex flex-column align-items-center text-center">
            <a className="icono-contacto"><FaEnvelope/></a>
            <h4 className="text-oscuro py-2">Correo</h4>
            <p className="about-text">asociacion@jabcoloreandotuvida.org</p>
          </div>         
        </div>
        <div>  
        </div>   
      </div>
    </>
  );
}
