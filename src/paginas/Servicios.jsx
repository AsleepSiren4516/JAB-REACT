import Carrusel from "../componentes/Carrusel";
import FotoServ1_1 from "../assets/7CB7E6E4.jpg";
import FotoServ1_2 from "../assets/7CB7E6E4.jpg";
import FotoServ2_1 from "../assets/7CB7E6E4.jpg";

export default function Servicios() {

  const fotosMedico = [
    { src: FotoServ1_1, descripcionFoto: "Consulta de especialidad para niños" },
    { src: FotoServ1_2, descripcionFoto: "Equipamiento médico moderno" }
  ];

  const fotosTerapia = [
    { src: FotoServ2_1, descripcionFoto: "Área de rehabilitación física" }
  ];

  return (
    <>
      <div className="services-fondo">    
        <div className="pt-5 px-5">
          <div className="container-titulos pt-5 px-4">
            <h1 className="head-title pt-5" style={{color: "#123448"}}>Nuestros servicios</h1>
            <p className="head-subtitle">Comprometidos con tu bienestar</p>   
          </div>    
        </div>
      </div>

      <div className="">

      </div>

      <section className="seccion-layout py-5">
        <div className="container">
          
          <div className="row align-items-center g-5 mb-5">
            <div className="col-lg-6">
              <Carrusel items={fotosMedico} modoServicios={true} />
            </div>
            <div className="col-lg-6">
              <h2 className="serv-titulo-interno">Atención Médica</h2>
              <p className="general-text">
                Ofrecemos servicios de salud integral para garantizar que cada paciente 
                reciba el tratamiento adecuado a sus necesidades específicas.
              </p>
              <div className="serv-contacto-box">
                <strong>Contacto: 33 1234 5678</strong>
              </div>
            </div>
          </div>

          <div className="row align-items-center g-5 flex-row-reverse">
            <div className="col-lg-6">
              <Carrusel items={fotosTerapia} modoServicios={true} />
            </div>
            <div className="col-lg-6">
              <h2 className=" ">Terapias de Rehabilitación</h2>
              <p className="general-text">
                Contamos con personal capacitado en fisioterapia y apoyo intelectual 
                para promover la autonomía de nuestros beneficiarios.
              </p>
              <div className="serv-contacto-box">
                <strong>Informes: contacto@jab.org</strong>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}