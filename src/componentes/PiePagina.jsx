export default function PiePagina() {
  return (
    <div className="container-fluid bg-primary text-white mt-5 py-3">
      <div className="row justify-content-center">
        {/* Resumen */}
        <div className="col-lg-4 col-md-6 mb-3 text-center">
          <h4 className="text-uppercase mb-3">Resumen</h4>
          <p><i className="fa fa-map-marker-alt mr-2"></i>Zapopan, Guadalajara</p>
          <p><i className="fa fa-phone-alt mr-2"></i>+52 33 3661 2544</p>
          <p className="m-0"><i className="fa fa-envelope mr-2"></i>asociacion@jabcoloreandotuvida.org</p>
        </div>

        {/* Redes sociales */}
        <div className="col-lg-4 col-md-6 mb-3 text-center">
          <h4 className="text-uppercase mb-3">Síguenos</h4>
          <p>Visualiza nuestro contenido de redes sociales y apóyanos con un like</p>
          <div className="d-flex justify-content-center">
            <a className="btn btn-outline-dark btn-lg-square mr-2" 
               href="https://www.facebook.com/fundacionJAB/" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-outline-dark btn-lg-square mr-2" 
               href="https://www.instagram.com/jabcoloreandotuvida/" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="btn btn-outline-dark btn-lg-square"
               href="https://www.linkedin.com/company/jab-coloreando-tu-vida-a-c/" target="_blank">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Horario */}
        <div className="col-lg-4 col-md-6 mb-3 text-center">
          <h4 className="text-uppercase mb-3">Horario</h4>
          <h6 className="text-uppercase">Lunes - Viernes</h6>
          <p>8:00 AM - 8:00 PM</p>
          <h6 className="text-uppercase">Sábado - Domingo</h6>
          <p>2:00 PM - 8:00 PM</p>
        </div>
      </div>

      {/* Footer final */}
      <div className="text-center mt-2 py-2">
        <p className="mb-1">© 2024 JAB Coloreando tu Vida. Todos los derechos reservados.</p>
        <p className="m-0">Diseñado por Becarios</p>
      </div>
    </div>
  );
}

