import {FaPhone, FaEnvelope } from "react-icons/fa";

export default function Contacto() {
  return (
    <>
      <div className="container mt-5">
        <h1>Contacto</h1>

        <div className="d-flex flex-column align-items-center py-4">
          <h2 className="about-title">¿Quieres ayudar como voluntario?</h2>
          <h3 className="text-capacitacion pb-5">¿Necesitas capacitacion?</h3>
          <h2 className="text-oscuro">Contactanos</h2> 
          <div className="mx-auto" style={{ width: '80px', height: '3.5px', backgroundColor: '#007bff' }}></div>
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
