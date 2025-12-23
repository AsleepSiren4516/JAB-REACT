import NavBar2 from "../componentes/NavBar";
import PiePagina from "../componentes/PiePagina";
import Donacion from "../componentes/Donacion";
import filosofico from "../assets/ghandi.jpeg";

export default function Donar(){
    return (
        <>
          <div className="container mt-5">
            <div>
              <img src={filosofico} alt="fil" className="donacion-ghandi"></img>
            </div>
    
            <h1>Contacto</h1>
    
            <p>Dirección, teléfono, correo…</p>
    
            <h2 className="mt-5">Haz una Donación</h2>
            <Donacion />
          </div>
        </>
      );
}