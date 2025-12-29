export default function Sobre() {
  const valores = [
    {
      titulo: "Inclusión",
      texto: "Promovemos la participación equitativa de todas las personas, valorando la diversidad y la igualdad de oportunidades.",
      icono: "fa-users",
      color: "rgba(249, 204, 58, 0.5)",
      iconBg: "#dcb73cff",
      radius: "30px 10px"
    },
    {
      titulo: "Honestidad",
      texto: "Actuar con transparencia e integridad en todas las acciones y comunicaciones de la asociación.",
      icono: "fa-balance-scale",
      color: "rgba(255, 212, 71, 0.5)",
      iconBg: "#0DA7E0",
      radius: "10px 30px"
    },
    {
      titulo: "Empatía",
      texto: "Comprendemos las emociones y circunstancias de los demás sin juzgar.",
      icono: "fa-heart",
      color: "rgba(13, 167, 224, 0.5)",
      iconBg: "#0DA7E0",
      radius: "40px 10px"
    },
    {
      titulo: "Responsabilidad",
      texto: "Actuamos en favor del bienestar y crecimiento de la comunidad.",
      icono: "fa-hand-holding-heart",
      color: "rgba(13, 167, 224, 0.5)",
      iconBg: "#0DA7E0",
      radius: "20px 40px"
    },
    {
      titulo: "Compromiso",
      texto: "Servimos y transformamos vidas con pasión y constancia.",
      icono: "fa-handshake",
      color: "rgba(13, 167, 224, 0.5)",
      iconBg: "#0DA7E0",
      radius: "40px 20px"
    },
    {
      titulo: "Profesionalismo",
      texto: "Atención de calidad mediante un equipo capacitado y ético.",
      icono: "fa-briefcase",
      color: "rgba(13, 167, 224, 0.5)",
      iconBg: "#0DA7E0",
      radius: "25px 10px"
    },
    {
      titulo: "Trabajo en equipo",
      texto: "Fomentamos la colaboración entre profesionales, familias y comunidad.",
      icono: "fa-people-carry",
      color: "rgba(13, 167, 224, 0.5)",
      iconBg: "#0DA7E0",
      radius: "50px",
      full: true
    }
  ];

  return (
    <>
      <div className="about-fondo">
        <div className="container start">
          <h1 className="head-title">Sobre nosotros</h1>
          <p className="head-subtitle">Contenido sobre la organización…</p>
        </div>
      </div>

      <section className="valores-section">
        <div className="container">
          <div className="text-center mb-5">
            <h4 className="valores-subtitle">Nuestros</h4>
            <h1 className="valores-title">Valores</h1>
          </div>

          <div className="row g-4">
            {valores.map((v, i) => (
              <div
                key={i}
                className={`col-lg-${v.full ? "12" : "4"} col-md-6`}
              >
                <div
                  className="valor-card"
                  style={{
                    backgroundColor: v.color,
                    borderRadius: v.radius
                  }}
                >
                  <div
                    className="valor-icon"
                    style={{ backgroundColor: v.iconBg }}
                  >
                    <i className={`fa ${v.icono}`}></i>
                  </div>

                  <h5>{v.titulo}</h5>
                  <p>{v.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}



