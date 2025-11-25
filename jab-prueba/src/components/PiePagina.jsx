import React from "react";

export default function PiePagina() {
  return (
    <div className="container-fluid footer text-white mt-5 pt-5 px-0 position-relative overlay-top">
      <div className="row mx-0 pt-5 px-sm-3 px-lg-5 mt-4">
        <div className="col-lg-3 col-md-6 mb-5">
          <h4 className="text-white text-uppercase mb-4" style={{ letterSpacing: "3px" }}>Resumen</h4>
          <p><i className="fa fa-map-marker-alt mr-2"></i>Zapopan, Guadalajara</p>
          <p><i className="fa fa-phone-alt mr-2"></i>+52 33 3661 2544</p>
          <p className="m-0"><i className="fa fa-envelope mr-2"></i>asociacion@jabcoloreandotuvida.org</p>
        </div>

        <div className="col-lg-3 col-md-6 mb-5">
          <h4 className="text-white text-uppercase mb-4" style={{ letterSpacing: "3px" }}>Síguenos</h4>
          <p>Visualiza nuestro contenido de redes sociales y apóyanos con un like</p>
          <div className="d-flex justify-content-start">
            <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="https://www.facebook.com/fundacionJAB/" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="https://www.instagram.com/jabcoloreandotuvida/" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="btn btn-lg btn-outline-light btn-lg-square" href="https://www.linkedin.com/company/jab-coloreando-tu-vida-a-c/" target="_blank">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-5">
          <h4 className="text-white text-uppercase mb-4" style={{ letterSpacing: "3px" }}>Horario</h4>
          <div>
            <h6 className="text-white text-uppercase">Lunes - Viernes</h6>
            <p>8.00 AM - 8.00 PM</p>
            <h6 className="text-white text-uppercase">Sábado - Domingo</h6>
            <p>2.00 PM - 8.00 PM</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-5">
          <h4 className="text-white text-uppercase mb-4" style={{ letterSpacing: "3px" }}>Semanario</h4>
          <p>Recibe nuestro calendario de actividades por correo</p>
          <div className="w-100">
            <div className="input-group">
              <input type="text" className="form-control border-light" style={{ padding: "25px" }} placeholder="Tu correo" />
              <div className="input-group-append">
                <button className="btn btn-primary font-weight-bold px-3">Enviar</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid text-center text-white border-top mt-4 py-4 px-sm-3 px-md-5" style={{ borderColor: "rgba(256, 256, 256, .1)" }}>
        <p className="mb-2 text-white">Copyright &copy; <a className="font-weight-bold" href="#">Dominio</a>. Todos los derechos reservados.</p>
        <p className="m-0 text-white">Diseñado por <a className="font-weight-bold" href="https://htmlcodex.com">Becarios</a></p>
      </div>
    </div>
  );
}
