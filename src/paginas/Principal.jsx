import NavBar from "../componentes/NavBar";
import Carrusel from "../componentes/Carrusel";
import PiePagina from "../componentes/PiePagina";

export default function Principal() {
  return (
    <>
      <NavBar />
      <Carrusel />

      <div className="container text-center mt-5">
        <h1>Bienvenido a JAB</h1>
        <p>Construyendo tu nueva página en React.</p>
      </div>

      <PiePagina />
    </>
  );
}
