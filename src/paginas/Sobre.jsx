import { FaUsers, FaBalanceScale, FaHeart, FaHandHoldingHeart, FaHandshake, FaBriefcase } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import objetivos from "../assets/objetivos.png";
import mariposa from "../assets/mariposa.svg";
import mv from "../assets/collage.png";
import tarjeta from "../assets/tarjetas.svg"
import tarjeta2 from "../assets/tarjetas2.svg"
import fondoSobre from "../assets/fondo-about.jpg";

export default function Sobre() {
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
    <div className="fondo" style={{ backgroundImage: `url(${fondoSobre})` }}>    
      <div className="pt-5 px-5">
        <div className="container-titulos pt-5 px-5">
          <h1 className="head-title pt-5" style={{color: "#123448"}}>Sobre nosotros</h1>
          <p className="head-subtitle">Lo que nos define</p>   
        </div>    
      </div>
    </div>
    <div>

    <section className="seccion-layout py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="txt-subtitle">Acompañando a las personas en cada etapa</span>
            <img src={objetivos} alt="objetivos" className="img-objetivos w-100"/>
          </div>
          <div className="col-lg-6 container-texto-about"> 
            <h1 className="txt-title">Objetivos</h1>
            <img src={mariposa} className="objetivos-mariposa"/>
            <p className="general-text">
              Nuestro objetivo es consolidar un centro multidisciplinario accesible para toda la comunidad, diseñado para ofrecer soluciones integrales que respondan con precisión a las necesidades sociales, médicas y humanas de las familias.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="seccion-layout py-5">
      <div className="container-fluid"> 
        <div className="row align-items-center">

          <div className="col-lg-3 container-texto-about text-center">
            <h2 className="txt-titulo">Misión</h2>
            <p className="mv-text">Elevamos la calidad de vida de las personas con discapacidad y sus familias,
              liderando una cultura de inclusión real y participación social para el
              bienestar colectivo.</p>
          </div>

          <div className="col-lg-6 d-flex justify-content-center my-4 my-lg-0">
            <img src={mv} alt="Misión y Visión" className="mv-image" />
          </div>

          <div className="col-lg-3 container-texto-about text-center">
            <h2 className="txt-titulo">Visión</h2>
            <p className="mv-text">Brindamos apoyo integral médico, legal y pedagógico, junto con programas
                deportivos, culturales y de formación laboral que impulsan la autonomía y
                el desarrollo social.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-5">
      <div className="container">
        <div className="text-center mb-4 position-relative">
          <h2 className="txt-titulo mb-1">Valores</h2>
          
          <div className="d-flex align-items-center justify-content-center gap-3">
            <span style={lineaEstilo}></span>
            <span 
              className="text-uppercase fw-semibold" 
              style={{ color: "#4c5f68", letterSpacing: "1.5px", fontSize: "0.90rem" }}
            >
              LOS PRINCIPIOS QUE NOS GUÍAN
            </span>
            <span style={lineaEstilo}></span>
          </div>
        </div>

        <br />
          <div className="valores-container">

            <div className="valor-card" style={{ backgroundImage: `url(${tarjeta})` }}>
              <div className="valor-icon">
                <FaBalanceScale />
              </div>
              <div className="valor-content">
                <h1>Honestidad</h1>
                <p>Actuar con transparencia e integridad en todas las acciones y comunicaciones de la asociación.</p>
              </div>
            </div>

            <div className="valor-card" style={{ backgroundImage: `url(${tarjeta})` }}>
              <div className="valor-icon">
                <FaHeart />
              </div>
              <div className="valor-content">
                <h1>Empatía</h1>
                <p>Comprendemos las emociones y circunstancias de los demás sin juzgar.</p>
              </div>
            </div>

            <div className="valor-card" style={{ backgroundImage: `url(${tarjeta})` }}>
              <div className="valor-icon">
                <FaHandHoldingHeart />
              </div>
              <div className="valor-content">
                <h1>Responsabilidad</h1>
                <p>Actuamos en favor del bienestar y crecimiento de la comunidad.</p>
              </div>
            </div>

            <div className="valor-card" style={{ backgroundImage: `url(${tarjeta})` }}>
              <div className="valor-icon">
                <FaHandshake />
              </div>
              <div className="valor-content">
                <h1>Compromiso</h1>
                <p>Servimos y transformamos vidas con pasión y constancia.</p>
              </div>
            </div>

            <div className="valor-card" style={{ backgroundImage: `url(${tarjeta})` }}>
              <div className="valor-icon">
                <FaBriefcase />
              </div>
              <div className="valor-content">
                <h1>Profesionalismo</h1>
                <p>Atención de calidad mediante un equipo capacitado y ético.</p>
              </div>
            </div>

            <div className="valor-card" style={{ backgroundImage: `url(${tarjeta})` }}>
              <div className="valor-icon">
                <FaPeopleGroup />
              </div>
              <div className="valor-content">
                <h1>Trabajo en equipo</h1>
                <p>Fomentamos la colaboración entre profesionales, familias y comunidad.</p>
              </div>
            </div>

            <div className="valor-card full" style={{ backgroundImage: `url(${tarjeta2})` }}>
              <div className="valor-icon">
                <FaUsers />
              </div>
              <div className="valor-content">
                <h1>Inclusión</h1>
                <p>Promovemos la participación equitativa de todas las personas, valorando la diversidad y la igualdad de oportunidades.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
    </>
  );
}
