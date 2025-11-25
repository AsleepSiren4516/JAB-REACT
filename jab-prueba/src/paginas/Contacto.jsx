import React from "react";
import Navbar from "../components/Navbar";
import PiePagina from "../components/PiePagina";

export default function Contacto() {
  return (
    <>
      <Navbar />

      {/* Encabezado */}
      <div
        className="container-fluid page-header mb-5 position-relative"
        style={{ background: "linear-gradient(135deg, #A084CA, #D6C1F0)", minHeight: "420px" }}
      >
        <div className="d-flex flex-column align-items-center justify-content-center text-center text-white" style={{ minHeight: "420px" }}>
          <h1 className="display-3 font-weight-bold text-uppercase">Contacto</h1>
          <p className="lead mb-4">
            Estamos aquí para responder tus dudas y apoyarte en lo que necesites.
          </p>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center bg-transparent">
              <li className="breadcrumb-item">
                <a className="text-white" href="/">Inicio</a>
              </li>
              <li className="breadcrumb-item active text-white" aria-current="page">
                Contacto
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Contacto */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="section-title">
            <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Contáctanos</h4>
            <h1 className="display-4">¿Tienes alguna duda?</h1>
          </div>

          <div className="row px-3 pb-2">
            <div className="col-sm-4 text-center mb-3">
              <i className="fa fa-2x fa-map-marker-alt mb-3 text-primary"></i>
              <h4 className="font-weight-bold">Dirección</h4>
              <p>Zapopan, Jalisco</p>
            </div>
            <div className="col-sm-4 text-center mb-3">
              <i className="fa fa-2x fa-phone-alt mb-3 text-primary"></i>
              <h4 className="font-weight-bold">Teléfono</h4>
              <p>333 661 2544</p>
            </div>
            <div className="col-sm-4 text-center mb-3">
              <i className="far fa-2x fa-envelope mb-3 text-primary"></i>
              <h4 className="font-weight-bold">Email</h4>
              <p>asociacion@jabcoloreandotuvida.org</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 pb-5">
              <iframe
                title="mapa"
                style={{ width: "100%", height: "443px", border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119440.53865506902!2d-103.40345094999996!3d20.689227150000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae61a9704c13%3A0xafd8a5d47ed002ac!2sZapopan%2C%20Jal.!5e0!3m2!1ses!2smx!4v1752523961650!5m2!1ses!2smx"
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>

            <div className="col-md-6 pb-5 d-flex align-items-center">
              <div className="bg-light p-4 rounded shadow-sm w-100 text-center">
                <h2 className="text-primary font-weight-bold mb-3">Coloreando tu vida</h2>
                <p className="mb-4">
                  Trabajamos día con día para brindar apoyo, esperanza y nuevas oportunidades a quienes más lo necesitan.
                  ¡Súmate a nuestro proyecto y sé parte del cambio!
                </p>
                <a href="/sobre" className="btn btn-primary px-4">Conoce más</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Donaciones */}
      <div className="container-fluid pt-5" id="donaciones">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Apóyanos</h4>
            <h1 className="display-4">Haz tu donación</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="bg-light p-4 rounded shadow text-center">
                <p className="mb-4">
                  Tu apoyo nos ayuda a continuar con nuestra labor y a cambiar vidas. ¡Gracias por tu donación!
                </p>
                <a
                  href="https://www.paypal.com/donate?hosted_button_id=TU_ID_DE_BOTON"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg px-5"
                >
                  <i className="fab fa-paypal mr-2"></i> Apoya con tu donación
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PiePagina />
    </>
  );
}

