import NavBar2 from "../componentes/NavBar";
import PiePagina from "../componentes/PiePagina";
import Donacion from "../componentes/Donacion";

export default function Contacto() {
  return (
    <>
      <NavBar2 />

      <div className="container mt-5">

        <h1>Contacto</h1>

        <p>Dirección, teléfono, correo…</p>

        <h2 className="mt-5">Haz una Donación</h2>
        <Donacion />
      </div>

      <PiePagina />
    </>
  );
}
