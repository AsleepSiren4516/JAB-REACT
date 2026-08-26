import "../css/style.css";
import Servicio1 from "../assets/rehabilitacion.jpg";
import Servicio2 from "../assets/capacitacion.jpg";
import Servicio3 from "../assets/conferencias.jpg";
import Servicio4 from "../assets/actividades.jpg";
import fondo from "../assets/fondo_papel.png"; 
import boton from "../assets/botonPapel.svg";

export default function ServiciosBloque() {
  const lineaEstilo = {
    backgroundColor: "#EA0029", 
    height: "4px",               
    width: "150px",              
    display: "inline-block",     
    flexShrink: 0,               
    borderRadius: "2px"
  };

  const servicios = [
    { id: 1, img: Servicio1, titulo: "Rehabilitación", desc: "Terapia física y funcional para mejorar la autonomía y calidad de vida de nuestros beneficiarios." },
    { id: 2, img: Servicio2, titulo: "Capacitación", desc: "Talleres de sensibilización, derechos humanos e inclusión para empresas y escuelas." },
    { id: 3, img: Servicio3, titulo: "Conferencias", desc: "Espacios formativos sobre discapacidad, cáncer y bienestar comunitario para la sociedad." },
    { id: 4, img: Servicio4, titulo: "Actividades", desc: "Programas recreativos, culturales y deportivos que impulsan el desarrollo social integral." },
  ];

  return (
    <section className="servicios-section py-5">
      <div className="container">
        
        <div className="text-center mb-4 position-relative">
          <h2 className="txt-titulo mb-1">Nuestros Servicios</h2>
          
          <div className="d-flex align-items-center justify-content-center gap-3">
            <span style={lineaEstilo}></span>
            <span 
              className="text-uppercase fw-semibold" 
              style={{ color: "#4c5f68", letterSpacing: "1.5px", fontSize: "0.90rem" }}
            >
              CON EL CORAZÓN POR DELANTE
            </span>
            <span style={lineaEstilo}></span>
          </div>

          <p className="general-text text-center mt-4">
            Impulsamos una sociedad donde las personas cuenten con las herramientas para superar barreras y desarrollarse plenamente, promoviendo su bienestar físico, social y cognitivo.
          </p>
        </div>
      
        <div className="row g-4 justify-content-center mt-1">
          {servicios.map((s) => (
            <div key={s.id} className="col-5 col-md-6 col-lg-3 d-flex justify-content-center">
              <div className="tarjeta">
  
                <div 
                  className="cara frente" 
                  style={{ backgroundImage: `url(${fondo})` }}
                >
                  <div className="foto-marco">
                    <img src={s.img} alt={s.titulo} />
                  </div>
                  <h5>{s.titulo}</h5>
                </div>

                <div 
                  className="cara atras" 
                  style={{ backgroundImage: `url(${fondo})` }}
                >
                  <div className="atras-content">
                    <p>{s.desc}</p>
                    <a href="#" className="btn-ver-mas" style={{ backgroundImage: `url(${boton})` }}>Ver más</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}