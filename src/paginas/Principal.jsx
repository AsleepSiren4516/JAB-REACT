import Carrusel from "../componentes/Carrusel";
import ServiciosBloque from "../componentes/ServiciosBloque.jsx"
import aboutImg from "../assets/niños.png";
import logoCorazon from "../assets/corazon_logo.svg";

// --- AGREGADO: Importación de imágenes para el carrusel ---
import Slide1 from "../assets/carrusel1.jpg";
import Slide2 from "../assets/carrusel2.jpg";

export default function Principal() {

  // --- AGREGADO: Definición de los datos que se mostrarán en la Home ---
  const slidesInicio = [
    { 
      src: Slide1, 
      titulo: "Construyendo Sueños", 
      texto: "Apoyando el futuro de los niños en México a través de experiencias inspiradoras.", 
      link: "/sobre", 
      botonLabel: "Saber más" 
    },
    { 
      src: Slide2, 
      titulo: "Alcanzando Metas", 
      texto: "Conoce cómo transformamos vidas a través del aprendizaje y la motivación.", 
      link: "/servicios", 
      botonLabel: "Ver Servicios" 
    }
  ];

  return (
    <>
      {/* --- MODIFICADO: Ahora pasamos los items al carrusel --- */}
      <Carrusel items={slidesInicio} />

      <section className="seccion-layout">
        <div className="row align-items-center g-5">
          
          <div className="col-lg-6">
            <img 
              src={aboutImg} 
              alt="Nosotros JAB" 
              className="img-fluid" 
            />
          </div>

          <div className="col-lg-6 container-texto-about">
            <span className="subtitle-prin">Cambiando vidas desde 2018</span>
            <h1 className="title-prin">¿Qué es JAB?</h1>
            <img src={logoCorazon} alt="Logo" className="about-logo-floating" />
            <br></br>
            <p className="general-text">
              Somos una <strong>Asociación Civil sin fines de lucro</strong> dedicada a brindar apoyo, atención
              y acompañamiento a personas con discapacidad física e intelectual, así como a sus familias
              y a su entorno.
            </p>
            
            <p className="general-text">
              Promovemos la inclusión de talentos en los ámbitos laboral, cultural y
              deportivo, sin distinción de género, creencias ni condiciones sociales.
            </p>
          </div>

        </div>
      </section>


      <section className="seccion-layout py-0">
        <ServiciosBloque />
      </section>

      <section className="metricas-section py-5">
      <div className="container">
        <div className="bento-grid">
          
          <div className="bento-card card-grande">
            <span className="card-tag">Children served</span>
            <div className="card-main-content">
              <h2 className="metric-number">8,500</h2>
              <hr className="card-divider" />
              <p className="card-text text-end">
                Young lives supported through therapy and care
              </p>
            </div>
          </div>

          <div className="bento-card card-foto">
            <img 
              src="/assets/comunidad-1.jpg" 
              alt="Voluntarios JAB conversando" 
              className="bento-img"
            />
          </div>

          <div className="bento-card card-mediana">
            <span className="card-tag">Active volunteers</span>
            <div className="card-main-content">
              <h2 className="metric-number">340</h2>
              <hr className="card-divider" />
              <p className="card-text text-end">
                Dedicated professionals giving their time freely
              </p>
            </div>
          </div>

          <div className="bento-card card-mediana-abajo">
            <span className="card-tag">Programs running</span>
            <div className="card-main-content">
              <h2 className="metric-number">12</h2>
              <hr className="card-divider" />
              <p className="card-text text-end">
                Specialized interventions across multiple communities
              </p>
            </div>
          </div>

          <div className="bento-card card-foto">
            <img 
              src="/assets/comunidad-2.jpg" 
              alt="Equipo JAB planeando actividades" 
              className="bento-img"
            />
          </div>

        </div>
      </div>
    </section>

    </>
  );
}