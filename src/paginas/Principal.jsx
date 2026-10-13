import Carrusel from "../componentes/Carrusel";
import ServiciosBloque from "../componentes/ServiciosBloque.jsx";
import aboutImg from "../assets/niños.png";
import logoCorazon from "../assets/corazon_logo.svg";
import Slide1 from "../assets/carrusel1.jpg";
import Slide2 from "../assets/carrusel2.jpg";
import familia from "../assets/Nota_familia.png";
import empresas from "../assets/Nota_empresa.png";
import voluntarios from "../assets/Nota_voluntarios.png";
import niños from "../assets/Actividades_niños.jpg";
import voluntario from "../assets/voluntarios.jpg";

export default function Principal() {
  const lineaEstilo = {
    backgroundColor: "#EA0029", 
    height: "4px",               
    width: "150px",              
    display: "inline-block",     
    flexShrink: 0,               
    borderRadius: "2px"
  };
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

      <ServiciosBloque />

      <section className="metricas-section py-5">
                <div className="text-center mb-4 position-relative">
          <h2 className="txt-titulo mb-1">Transparencia</h2>
          
          <div className="d-flex align-items-center justify-content-center gap-3">
            <span style={lineaEstilo}></span>
            <span 
              className="text-uppercase fw-semibold" 
              style={{ color: "#4c5f68", letterSpacing: "1.5px", fontSize: "0.90rem" }}
            >
              NUESTRO COMPROMISO CON LA COMUNIDAD
            </span>
            <span style={lineaEstilo}></span>
          </div>

          <p className="general-text text-center mt-4">
            Rendimos cuentas con hechos. Conoce el alcance de nuestras acciones y cómo, gracias al apoyo de nuestra comunidad, transformamos vidas día con día.
          </p>
        </div>

        <div className="container">
          <div className="bento-grid">
            
            {/* 1. Nota grande izquierda */}
            <div className="bento-card card-grande">
              <img src={familia} alt="Familia JAB" className="bento-img" />
            </div>

            {/* 2. Foto centro arriba */}
            <div className="bento-card card-foto-arriba card-foto-real">
              <img src={niños} alt="Voluntarios JAB conversando" className="bento-img" />
            </div>

            {/* 3. Nota mediana centro abajo */}
            <div className="bento-card card-mediana-abajo">
              <img src={empresas} alt="Empresas aliadas JAB" className="bento-img" />
            </div>

            {/* 4. Nota rosa derecha arriba */}
            <div className="bento-card card-derecha-1">
              <img src={voluntarios} alt="Voluntarios JAB" className="bento-img" />
            </div>

            {/* 5. Foto derecha abajo */}
            <div className="bento-card card-derecha-2 card-foto-real">
              <img src={voluntario} alt="Equipo JAB planeando actividades" className="bento-img" />
            </div>

          </div>
        </div>
        </section>
      </section>
    </>
  );
}