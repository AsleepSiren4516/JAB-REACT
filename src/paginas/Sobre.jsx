import NavBar2 from "../componentes/NavBar";
import PiePagina from "../componentes/PiePagina";

export default function Sobre() {
  return (
    <>
      <NavBar2 />

      <div className="container mt-5">
        <h1>Sobre nosotros</h1>
        <p>Contenido sobre la organización…</p>
      </div>

      {/* Valores */}
      <div className="container-fluid py-5" style={{ backgroundColor: "#f4f6fa" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Nuestros</h4>
            <h1 className="display-4 font-weight-bold">Valores</h1>
          </div>
          <div className="row g-4">

            {/* Inclusión */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 text-center p-4 shadow-lg"
                  style={{
                    backgroundColor: "#FFDDD2",
                    borderRadius: "30px 10px 30px 10px",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    cursor: "pointer"
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
                  }}
              >
                <div className="icon-circle text-white mx-auto mb-3 d-flex align-items-center justify-content-center"
                    style={{ width: "70px", height: "70px", borderRadius: "50%", backgroundColor: "#FF6F61", fontSize: "28px" }}>
                  <i className="fa fa-users"></i>
                </div>
                <h5 className="mb-3 font-weight-bold">Inclusión</h5>
                <p>Promovemos la participación equitativa de todas las personas, valorando la diversidad y la igualdad de oportunidades.</p>
              </div>
            </div>

            {/* Honestidad */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 text-center p-4 shadow-lg"
                  style={{
                    backgroundColor: "#D2E4FF",
                    borderRadius: "10px 30px 10px 30px",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    cursor: "pointer"
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
                  }}
              >
                <div className="icon-circle text-white mx-auto mb-3 d-flex align-items-center justify-content-center"
                    style={{ width: "70px", height: "70px", borderRadius: "50%", backgroundColor: "#1E90FF", fontSize: "28px" }}>
                  <i className="fa fa-balance-scale"></i>
                </div>
                <h5 className="mb-3 font-weight-bold">Honestidad</h5>
                <p>Actuar con transparencia e integridad en todas las acciones y comunicaciones de la asociación.</p>
              </div>
            </div>

            {/* Empatía */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 text-center p-4 shadow-lg"
                  style={{
                    backgroundColor: "#FFE6D2",
                    borderRadius: "50px 10px 50px 10px",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    cursor: "pointer"
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
                  }}
              >
                <div className="icon-circle text-white mx-auto mb-3 d-flex align-items-center justify-content-center"
                    style={{ width: "70px", height: "70px", borderRadius: "50%", backgroundColor: "#FF8C42", fontSize: "28px" }}>
                  <i className="fa fa-heart"></i>
                </div>
                <h5 className="mb-3 font-weight-bold">Empatía</h5>
                <p>Comprendemos las emociones y circunstancias de los demás sin juzgar, brindando siempre lo mejor de nosotros.</p>
              </div>
            </div>

            {/* Responsabilidad */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 text-center p-4 shadow-lg"
                  style={{
                    backgroundColor: "#D2FFD2",
                    borderRadius: "20px 40px 20px 40px",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    cursor: "pointer"
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
                  }}
              >
                <div className="icon-circle text-white mx-auto mb-3 d-flex align-items-center justify-content-center"
                    style={{ width: "70px", height: "70px", borderRadius: "50%", backgroundColor: "#28A745", fontSize: "28px" }}>
                  <i className="fa fa-hand-holding-heart"></i>
                </div>
                <h5 className="mb-3 font-weight-bold">Responsabilidad</h5>
                <p>Todos los miembros de la asociación actúan intencionadamente en favor del bienestar y crecimiento de la comunidad.</p>
              </div>
            </div>

            {/* Compromiso */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 text-center p-4 shadow-lg"
                  style={{
                    backgroundColor: "#FFF2D2",
                    borderRadius: "40px 20px 40px 20px",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    cursor: "pointer"
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
                  }}
              >
                <div className="icon-circle text-white mx-auto mb-3 d-flex align-items-center justify-content-center"
                    style={{ width: "70px", height: "70px", borderRadius: "50%", backgroundColor: "#FFC107", fontSize: "28px" }}>
                  <i className="fa fa-handshake"></i>
                </div>
                <h5 className="mb-3 font-weight-bold">Compromiso</h5>
                <p>Asumimos con dedicación la tarea de servir y transformar vidas con pasión y constancia.</p>
              </div>
            </div>

            {/* Profesionalismo */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 text-center p-4 shadow-lg"
                  style={{
                    backgroundColor: "#DAD2FF",
                    borderRadius: "25px 10px 25px 10px",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    cursor: "pointer"
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
                  }}
              >
                <div className="icon-circle text-white mx-auto mb-3 d-flex align-items-center justify-content-center"
                    style={{ width: "70px", height: "70px", borderRadius: "50%", backgroundColor: "#6F42C1", fontSize: "28px" }}>
                  <i className="fa fa-briefcase"></i>
                </div>
                <h5 className="mb-3 font-weight-bold">Profesionalismo</h5>
                <p>Brindamos atención de calidad mediante un equipo capacitado y ético, actuando con responsabilidad y respeto.</p>
              </div>
            </div>

            {/* Trabajo en equipo */}
            <div className="col-lg-12 col-md-12 mb-4">
              <div className="card h-100 text-center p-4 shadow-lg"
                  style={{
                    backgroundColor: "#FFD2F2",
                    borderRadius: "50px",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    cursor: "pointer"
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
                  }}
              >
                <div className="icon-circle text-white mx-auto mb-3 d-flex align-items-center justify-content-center"
                    style={{ width: "70px", height: "70px", borderRadius: "50%", backgroundColor: "#E83E8C", fontSize: "28px" }}>
                  <i className="fa fa-people-carry"></i>
                </div>
                <h5 className="mb-3 font-weight-bold">Trabajo en equipo</h5>
                <p>Fomentamos la colaboración entre profesionales, familias y comunidad para lograr un impacto integral y sostenido.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <PiePagina />
    </>
  );
}

