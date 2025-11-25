import React from "react";
import Navbar from "../components/Navbar";
import PiePagina from "../components/PiePagina";
import Carrusel1 from "../assets/carrusel1.jpg";
import Carrusel2 from "../assets/carrusel2.jpg";
import Senora from "../assets/señora.jpg";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";

export default function Principal() {
  return (
    <>
      <Navbar />

      {/* Carousel */}
      <div className="container-fluid p-0 mb-5">
        <div id="blog-carousel" className="carousel slide overlay-bottom" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src={Carrusel1} alt="Image" style={{ minHeight: "400px" }} />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <h1 className="display-1 text-white m-0">Cambiando vidas</h1>
                <h2 className="text-white m-0">DESDE 2018</h2>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src={Carrusel2} alt="Image" style={{ minHeight: "400px" }} />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <h1 className="display-1 text-white m-0">Cambiando vidas</h1>
                <h2 className="text-white m-0">DESDE 2018</h2>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#blog-carousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#blog-carousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>

      {/* About */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="section-title">
            <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Sobre nosotros</h4>
            <h1 className="display-4">Cambiando vidas desde 2018</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 py-0 py-lg-5">
              <h1 className="mb-3">Nuestra Historia</h1>
              <h5 className="mb-3">Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea</h5>
              <p>Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut. Labor diam sed ipsum et eirmod</p>
              <a href="#" className="btn btn-secondary font-weight-bold py-2 px-4 mt-2">Leer más</a>
            </div>
            <div className="col-lg-4 py-5 py-lg-0" style={{ minHeight: "500px" }}>
              <div className="position-relative h-100">
                <img className="position-absolute w-100 h-100" src={Senora} style={{ objectFit: "cover" }} alt="Nuestra historia"/>
              </div>
            </div>
            <div className="col-lg-4 py-0 py-lg-5">
              <h1 className="mb-3">Visión</h1>
              <p>Mejorar la calidad de vida de las personas con discapacidad y de sus familias, promoviendo una nueva cultura de inclusión y participación social.</p>
              <h5 className="mb-3"><i className="fa fa-check text-primary mr-3"></i>Lorem ipsum dolor sit amet</h5>
              <h5 className="mb-3"><i className="fa fa-check text-primary mr-3"></i>Lorem ipsum dolor sit amet</h5>
              <h5 className="mb-3"><i className="fa fa-check text-primary mr-3"></i>Lorem ipsum dolor sit amet</h5>
              <a href="#" className="btn btn-primary font-weight-bold py-2 px-4 mt-2">Leer más</a>
            </div>
          </div>
        </div>
      </div>

      <Services/>

      <Testimonials/>

      <PiePagina/>
    </>
  );
}
