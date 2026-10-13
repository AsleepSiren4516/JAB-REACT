import Carrusel from "../componentes/Carrusel";
import FotoServ1_1 from "../assets/7CB7E6E4.jpg";
import FotoServ1_2 from "../assets/7CB7E6E4.jpg";
import FotoServ2_1 from "../assets/7CB7E6E4.jpg";
import fondoServicios from "../assets/fondo-services.jpg";

export default function Servicios() {

  // Imágenes para los servicios principales
  const fotosMedico = [
    { src: FotoServ1_1, descripcionFoto: "Consulta de especialidad para niños" },
    { src: FotoServ1_2, descripcionFoto: "Equipamiento médico moderno" }
  ];

  const fotosTerapia = [
    { src: FotoServ2_1, descripcionFoto: "Área de rehabilitación física" },
    { src: FotoServ2_1, descripcionFoto: "Equipamiento de rehabilitación" }
  ];

  const fotosConferencias = [
    { src: FotoServ1_1, descripcionFoto: "Conferencias y pláticas" },
    { src: FotoServ1_2, descripcionFoto: "Presentaciones y eventos" }
  ];

  const fotosActividades = [
    { src: FotoServ2_1, descripcionFoto: "Actividades recreativas" },
    { src: FotoServ2_1, descripcionFoto: "Dinámicas de integración" }
  ];

  // Arreglo escalable de eventos (puedes agregar los 6, 10 o 20 que necesites)
  const listaEventos = [
    {
      id: 1,
      anio: "2025",
      badgeAlt: false,
      titulo: "Jornada de Salud Comunitaria",
      descripcion: "Participación activa ofreciendo revisiones y asesorías gratuitas para familias y niños de la comunidad.",
      ubicacion: "Centro Comunitario"
    },
    {
      id: 2,
      anio: "2025",
      badgeAlt: true,
      titulo: "Feria de Inclusión Laboral",
      descripcion: "Encuentro empresarial enfocado en abrir espacios de empleo formal y digno para personas con discapacidad.",
      ubicacion: "Expo Guadalajara"
    },
    {
      id: 3,
      anio: "2024",
      badgeAlt: false,
      titulo: "Congreso de Derechos Humanos",
      descripcion: "Ponencia magistral impartida por nuestro equipo sobre la importancia del Protocolo Facultativo y autonomía.",
      ubicacion: "Auditorio Municipal"
    },
    {
      id: 4,
      anio: "2024",
      badgeAlt: true,
      titulo: "Encuentro de Vida Independiente",
      descripcion: "Talleres prácticos y dinámicas de convivencia orientadas al fortalecimiento de habilidades para la vida diaria.",
      ubicacion: "Instalaciones JAB"
    },
    {
      id: 5,
      anio: "2023",
      badgeAlt: false,
      titulo: "Carrera Atlética por la Inclusión",
      descripcion: "Evento deportivo recreativo de convivencia familiar para promover la integración y la actividad física sana.",
      ubicacion: "Parque Metropolitano"
    },
    {
      id: 6,
      anio: "2023",
      badgeAlt: true,
      titulo: "Expo Organizaciones Civiles",
      descripcion: "Exposición de proyectos sociales y alianzas estratégicas con fundaciones hermanas de la región.",
      ubicacion: "Plaza de la Ciudad"
    }
  ];

  const lineaEstilo = {
    backgroundColor: "#EA0029", 
    height: "4px",                             
    width: "150px",                             
    display: "inline-block",     
    flexShrink: 0,                              
    borderRadius: "2px"
  };

  return (
    <>
      {/* Banner Principal */}
      <div className="fondo" style={{ backgroundImage: `url(${fondoServicios})` }}>    
        <div className="pt-5 px-5">
          <div className="container-titulos pt-5 px-4 text-center">
            <h1 className="head-title pt-5" style={{color: "#123448"}}>Nuestros Servicios</h1>
            <p className="head-subtitle">Comprometidos con tu bienestar y desarrollo integral</p>   
          </div>   
        </div>
      </div>

      {/* Contenedor General */}
      <section className="seccion-layout py-5">
        <div className="container servicios-container-unificado">
          
          {/* --- SERVICIO 1: Terapias de Rehabilitación --- */}
          <div className="row align-items-center g-4 mb-4 service-card-ajustada p-4 rounded-4 shadow-sm mx-auto">
            <div className="col-lg-5">
              <div className="carrusel-ajustado-wrapper">
                <Carrusel items={fotosTerapia} modoServicios={true} />
              </div>
            </div>
            <div className="col-lg-7">
              <span className="badge-service alt mb-2">Rehabilitación</span>
              <h2 className="serv-titulo-interno">Terapias de Rehabilitación</h2>
              <p className="general-text">
                Contamos con personal capacitado en fisioterapia y apoyo intelectual 
                para promover la autonomía, movilidad e independencia de nuestros beneficiarios.
              </p>
              <div className="serv-contacto-box mt-3">
                <i className="bi bi-envelope-fill me-2"></i>
                <strong>Informes: contacto@jab.org</strong>
              </div>
            </div>
          </div>

          {/* --- SERVICIO 2: Capacitación --- */}
          <div className="row align-items-center g-4 mb-4 flex-row-reverse service-card-ajustada alt-bg p-4 rounded-4 shadow-sm mx-auto">
            <div className="col-lg-5">
              <div className="carrusel-ajustado-wrapper">
                <Carrusel items={fotosMedico} modoServicios={true} />
              </div>
            </div>
            <div className="col-lg-7">
              <span className="badge-service mb-2">Especializado</span>
              <h2 className="serv-titulo-interno">Capacitacion</h2>
              <p className="general-text">
                Brindamos programas de capacitación especializada orientados al desarrollo de habilidades técnicas y humanas, 
                promoviendo la inclusión laboral y el crecimiento integral de nuestra comunidad.
              </p>
              <div className="serv-contacto-box mt-3">
                <i className="bi bi-telephone-fill me-2"></i>
                <strong>Contacto directo: 33 1234 5678</strong>
              </div>
            </div>
          </div>

          {/* --- SERVICIO 3: Conferencias y Pláticas --- */}
          <div className="row align-items-center g-4 mb-4 service-card-ajustada p-4 rounded-4 shadow-sm mx-auto">
            <div className="col-lg-5">
              <div className="carrusel-ajustado-wrapper">
                <Carrusel items={fotosConferencias} modoServicios={true} />
              </div>
            </div>
            <div className="col-lg-7">
              <span className="badge-service alt mb-2">Divulgación</span>
              <h3 className="serv-titulo-interno mb-3">Conferencias y Pláticas</h3>
              <p className="general-text mb-3">
                Impartimos pláticas y charlas informativas dirigidas a instituciones, empresas y público en general, creando conciencia y compartiendo experiencia en temas de bienestar e inclusión.
              </p>
              <div className="serv-contacto-box small-box mt-3">
                <i className="bi bi-calendar-event me-2"></i>
                <strong>Agenda una plática: contacto@jab.org</strong>
              </div>
            </div>
          </div>

          {/* --- SERVICIO 4: Actividades Recreativas --- */}
          <div className="row align-items-center g-4 mb-4 flex-row-reverse service-card-ajustada alt-bg p-4 rounded-4 shadow-sm mx-auto">
            <div className="col-lg-5">
              <div className="carrusel-ajustado-wrapper">
                <Carrusel items={fotosActividades} modoServicios={true} />
              </div>
            </div>
            <div className="col-lg-7">
              <span className="badge-service mb-2">Comunidad</span>
              <h3 className="serv-titulo-interno mb-3">Actividades Recreativas</h3>
              <p className="general-text mb-3">
                Organizamos dinámicas de integración, eventos culturales y actividades de esparcimiento diseñadas para fomentar la convivencia sana, la alegría y la participación activa de la comunidad.
              </p>
              <div className="serv-contacto-box small-box mt-3">
                <i className="bi bi-info-circle-fill me-2"></i>
                <strong>Más información: 33 3661 2544</strong>
              </div>
            </div>
          </div>

          {/* --- SECCIÓN DE TÍTULO INTERMEDIO --- */}
          <div className="text-center mb-5 position-relative mt-5 pt-3">
            <h2 className="txt-titulo mb-1">Nuestros Eventos y Participaciones</h2>
            
            <div className="d-flex align-items-center justify-content-center gap-3 mt-2">
              <span style={lineaEstilo}></span>
              <span 
                className="text-uppercase fw-semibold" 
                style={{ color: "#4c5f68", letterSpacing: "1.5px", fontSize: "0.90rem" }}
              >
                CON EL CORAZÓN POR DELANTE
              </span>
              <span style={lineaEstilo}></span>
            </div>
          </div>

          {/* --- SECCIÓN DE EVENTOS REUTILIZANDO EL CARRUSEL --- */}
          <Carrusel items={listaEventos} modoEventos={true} />

        </div>
      </section>
    </>
  );
}