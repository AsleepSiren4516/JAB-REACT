import NavBar from "../componentes/NavBar";
import Carrusel from "../componentes/Carrusel";
import PiePagina from "../componentes/PiePagina";
import Separador from "../assets/Separador.svg";

export default function Principal() {
  return (
    <>
      <NavBar />
      <Carrusel />
      <img src={Separador} alt="Separador" className="separador"></img>
      <PiePagina />
    </>
  );
}
