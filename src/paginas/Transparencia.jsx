export default function Transparencia(){
  const logosEjemplo = [
    {
      id: 1,
      nombre: "Aval 1",
      svg: (
        <svg viewBox="0 0 100 100" width="50" height="50" fill="currentColor">
          <circle cx="50" cy="50" r="40" strokeWidth="4" stroke="currentColor" fill="none"/>
          <path d="M30 50 L45 65 L70 35" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      )
    },
    {
      id: 2,
      nombre: "Corporativo 2",
      svg: (
        <svg viewBox="0 0 100 100" width="50" height="50" fill="currentColor">
          <rect x="20" y="20" width="60" height="60" rx="10" strokeWidth="4" stroke="currentColor" fill="none"/>
          <polygon points="50,30 65,65 35,65" />
        </svg>
      )
    },
    {
      id: 3,
      nombre: "Educativo 3",
      svg: (
        <svg viewBox="0 0 100 100" width="50" height="50" fill="currentColor">
          <path d="M50 15 L85 35 L50 55 L15 35 Z" />
          <path d="M25 47 L25 70 C 25 80, 75 80, 75 70 L75 47" fill="none" stroke="currentColor" strokeWidth="4"/>
        </svg>
      )
    },
    {
      id: 4,
      nombre: "Aliado 4",
      svg: (
        <svg viewBox="0 0 100 100" width="50" height="50" fill="currentColor">
          <path d="M12 35 C 12 10, 47 10, 50 35 C 53 10, 88 10, 88 35 C 88 65, 50 85, 50 85 C 50 85, 12 65, 12 35 Z" />
        </svg>
      )
    },
    {
      id: 5,
      nombre: "Institución 5",
      svg: (
        <svg viewBox="0 0 100 100" width="50" height="50" fill="currentColor">
          <circle cx="50" cy="50" r="30" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="4" />
          <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="4" />
        </svg>
      )
    },
    {
      id: 6,
      nombre: "Socio 6",
      svg: (
        <svg viewBox="0 0 100 100" width="50" height="50" fill="currentColor">
          <polygon points="50,15 63,38 88,38 68,54 75,79 50,64 25,79 32,54 12,38 37,38" />
        </svg>
      )
    }
  ];

    return(
    <>
    <div className="transparencia-fondo">    
      <div className="pt-5 px-5">
        <div className="container-titulos pt-5 px-5">
          <h1 className="head-title pt-5" style={{color: "#123448"}}>Transparencia</h1>
          <p className="head-subtitle">Ajustemos cuentas</p>   
        </div>    
      </div>
    </div>

    <div className="transparencia-fondo">  
      </div>

      <section className="patrocinadores-section py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-5" style={{color: "#1A9ECC", fontWeight: 700}}>Nos respaldan</h2>
          
          <Carrusel items={logosEmpresas} modoLogos={true} />
          
        </div>
      </section>
    </>
    )
}