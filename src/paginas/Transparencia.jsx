import fondoTrans from "../assets/fondo-transparencia.jpg";
import { useState } from "react";
import { FaCheckCircle, FaBuilding, FaLandmark, FaShieldAlt } from "react-icons/fa";
import { FaUsers, FaBalanceScale, FaHeart, FaHandHoldingHeart, FaHandshake, FaBriefcase } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import objetivos from "../assets/objetivos.png";
import mariposa from "../assets/mariposa.svg";
import mv from "../assets/collage.png";
import tarjeta from "../assets/tarjetas.svg";
import tarjeta2 from "../assets/tarjetas2.svg";
import udg from "../assets/udg.webp";
import jv from "../assets/jv.png";
import sidral from "../assets/sidral.webp";
import bimbo from "../assets/bimbo.svg";
import walmart from "../assets/walmart.svg";
import uag from "../assets/uag.svg";
import uvm from "../assets/uvm.svg";
import unitec from "../assets/unitec.svg"

import Carrusel from "../componentes/Carrusel";

export default function Transparencia(){
    const lineaEstilo = {
      backgroundColor: "#EA0029", 
      height: "4px",               
      width: "150px",              
      display: "inline-block",     
      flexShrink: 0,               
      borderRadius: "2px"
    };
    const logosEjemplo = [
    {
      id: 1,
      src: bimbo,
      estiloImg: { transform: "scale(1.5)" } 
    },
    {
      id: 2,
      src: walmart,
      estiloImg: { transform: "scale(1.6)" } 
    },
    {
      id: 3,
      src: sidral,
      estiloImg: { transform: "scale(2)" }
    },
    {
      id: 4,
      src: udg,
      estiloImg: { transform: "scale(2.5)" }
    },
    {
      id: 5,
      src:uag,
      estiloImg: { transform: "scale(1.6)" } 
    },
    {
      id: 6,
      src:uvm,
      estiloImg: { transform: "scale(1.4)" }
    },
    {
      id: 7,
      src:unitec,
      estiloImg: { transform: "scale(1.9)" }
    },
    {
      id: 8,
      src:jv,
      estiloImg: { transform: "scale(1.5)" }
    }
  ];
    return(
    <>
    <div className="fondo" style={{ backgroundImage: `url(${fondoTrans})` }}>    
      <div className="pt-5 px-5">
        <div className="container-titulos pt-5 px-5">
          <h1 className="head-title pt-5" style={{color: "#123448"}}>Transparencia</h1>
          <p className="head-subtitle">Ajustemos cuentas</p>   
        </div>    
      </div>
    </div>
    
      <section className="avales-section py-5 bg-light">
        <div className="text-center mb-4 position-relative">
          <h2 className="txt-titulo mb-1">Avales institucionales</h2>
          
          <div className="d-flex align-items-center justify-content-center gap-3">
            <span style={lineaEstilo}></span>
            <span 
              className="text-uppercase fw-semibold" 
              style={{ color: "#4c5f68", letterSpacing: "1.5px", fontSize: "0.90rem" }}
            >
              NOS RESPALDAN
            </span>
            <span style={lineaEstilo}></span>
          </div>
        </div>
        <div className="container">
          
          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="aval-card">
                <div className="aval-icon-wrapper">
                  <FaBuilding />
                </div>
                <h3 className="aval-title">CEDHJ</h3>
                <p className="aval-desc text-center">Comisión Estatal de Derechos Humanos Jalisco</p>
                <span className="aval-tag tag-blue">Miembros activos</span>
              </div>
            </div>

            <div className="col-md-4">
              <div className="aval-card">
                <div className="aval-icon-wrapper">
                  <FaLandmark />
                </div>
                <h3 className="aval-title">Gobierno de Zapopan</h3>
                <p className="aval-desc">Dirección de Asociaciones Civiles</p>
                <span className="aval-tag tag-light-blue">Reconocidos</span>
              </div>
            </div>

            <div className="col-md-4">
              <div className="aval-card">
                <div className="aval-icon-wrapper">
                  <FaShieldAlt />
                </div>
                <h3 className="aval-title">SSAS Jalisco</h3>
                <p className="aval-desc">Secretaría del Sistema de Asistencia Social</p>
                <span className="aval-tag tag-light-blue">Avalados</span>
              </div>
            </div>
          </div>

          <div className="confiar-box">
            <h3 className="confiar-title mb-4">¿Por qué confiar en nosotros?</h3>
            <ul className="confiar-list">
              <li>
                <FaCheckCircle className="check-icon" />
                <span>
                 Defensa y Promoción: Miembros activos del Comité de Discapacidad de la CEDHJ.
                </span>
              </li>
              <li>
                <FaCheckCircle className="check-icon" />
                <span>
                  Vinculación Gubernamental: Avalados por la Secretaría del Sistema de Asistencia Social.
                </span>
              </li>
              <li>
                <FaCheckCircle className="check-icon" />
                <span >
                 Gestión Local: Reconocidos por la Dirección de Asociaciones Civiles de Zapopan.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="patrocinadores-section py-5 bg-white">
        <div className="container">
        <div className="text-center mb-4 position-relative">
          <h2 className="txt-titulo mb-1">Red de patrocinadores</h2>
          
          <div className="d-flex align-items-center justify-content-center gap-3">
            <span style={lineaEstilo}></span>
            <span 
              className="text-uppercase fw-semibold" 
              style={{ color: "#4c5f68", letterSpacing: "1.5px", fontSize: "0.90rem" }}
            >
              NOS RESPALDAN
            </span>
            <span style={lineaEstilo}></span>
          </div>

        </div>
          <Carrusel items={logosEjemplo} modoLogos={true} />
        </div>
      </section>
    </>
  );
}