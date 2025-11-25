import React from "react";
import Testimonial1 from "../assets/testimonial-1.jpg";
import Testimonial2 from "../assets/testimonial-2.jpg";
import Testimonial3 from "../assets/testimonial-3.jpg";

const testimonialsData = [
  {
    name: "Lic. María Ivonne Vargas Contreras",
    role: "Presidenta",
    avatar: Testimonial1,
    text: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita",
  },
  {
    name: "Lic. Moisés Torres Hernánden",
    role: "Director",
    avatar: Testimonial2,
    text: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita",
  },
  {
    name: "Perla Denisse Maldonado Hernández",
    role: "Secretaria",
    avatar: Testimonial3,
    text: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita",
  },
];

export default function Testimonials() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="section-title">
          <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>
            Equipo de trabajo
          </h4>
          <h1 className="display-4">Nuestros colaboradores</h1>
        </div>
        <div className="owl-carousel testimonial-carousel">
          {testimonialsData.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <div className="d-flex align-items-center mb-3">
                <img className="img-fluid" src={testimonial.avatar} alt={testimonial.name} />
                <div className="ml-3">
                  <h4>{testimonial.name}</h4>
                  <i>{testimonial.role}</i>
                </div>
              </div>
              <p className="m-0">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
