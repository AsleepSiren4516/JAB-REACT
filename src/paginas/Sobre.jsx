import NavBar2 from "../componentes/Navbar2";
import PiePagina from "../componentes/PiePagina";

export default function Sobre() {
  return (
    <>
      <NavBar2 />

      <div className="container mt-5">
        <h1>Sobre nosotros</h1>
        <p>Contenido sobre la organización…</p>
      </div>

      <PiePagina />
    </>
  );
}
