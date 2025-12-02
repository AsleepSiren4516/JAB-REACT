import NavBar from "../componentes/NavBar";
import PiePagina from "../componentes/PiePagina";

import Service1 from "../assets/service-1.jpg";
import Service2 from "../assets/service-2.jpg";
import Service3 from "../assets/service-3.jpg";
import Service4 from "../assets/service-4.jpg";

export default function Servicios() {
  return (
    <>
      <NavBar />

      <div className="container mt-5">
        <h1 className="mb-4">Nuestros Servicios</h1>

        <div className="row">
          {[Service1, Service2, Service3, Service4].map((img, i) => (
            <div className="col-md-6 mb-4" key={i}>
              <div className="card shadow-sm">
                <img src={img} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Servicio {i + 1}</h5>
                  <p className="card-text">Descripción del servicio…</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PiePagina />
    </>
  );
}

