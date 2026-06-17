import "../css/style.css";
import Servicio1 from "../assets/rehabilitacion.jpg";
import Servicio2 from "../assets/capacitacion.jpg";
import Servicio3 from "../assets/conferencias.jpg";
import Servicio4 from "../assets/actividades.jpg";
import fondo from "../assets/fondo_papel.png"; 
import boton from "../assets/botonPapel.svg"

export default function ServiciosBloque() {
  const servicios = [
    { id: 1, img: Servicio1, titulo: "Rehabilitación", subtitulo: "¿En que consiste?", desc: "Terapia física y funcional para mejorar la autonomía y calidad de vida de nuestros beneficiarios." },
    { id: 2, img: Servicio2, titulo: "Capacitación", subtitulo: "¿En que consiste?", desc: "Talleres de sensibilización, derechos humanos e inclusión para empresas y escuelas." },
    { id: 3, img: Servicio3, titulo: "Conferencias", subtitulo: "¿En que consiste?", desc: "Espacios formativos sobre discapacidad, cáncer y bienestar comunitario para la sociedad." },
    { id: 4, img: Servicio4, titulo: "Actividades", subtitulo: "¿En que consiste?",desc: "Programas recreativos, culturales y deportivos que impulsan el desarrollo social integral." },
  ];

  return (
    <section className="servicios-section py-5">
      <div className="container">
        <div className="text-center mb-5 position-relative">
          <h2 className="txt-titulo">Nuestros Servicios</h2>
        </div>

        <div className="row g-4 justify-content-center">
          {servicios.map((s) => (
            <div key={s.id} className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
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
                    <h5>{s.subtitulo}</h5>
                    <p>{s.desc}</p>
                    <a href="#" className="btn-ver-mas"style={{ backgroundImage: `url(${boton})` }}>Ver más</a>
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