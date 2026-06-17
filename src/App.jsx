import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/NavBar"; 
import Principal from "./paginas/Principal";
import Servicios from "./paginas/Servicios";
import Sobre from "./paginas/Sobre";
import Contacto from "./paginas/Contacto";
import PiePagina from "./componentes/PiePagina";
import Transparencia from "./paginas/Transparencia";
import Donar from "./paginas/Donar"
import "./css/style.css";
import "./index.css";
import Privacidad from "./paginas/Privacidad";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/transparencia" element={<Transparencia/>} />
        <Route path="/Donar" element={<Donar/>} />
        <Route path="/Privacidad" element={<Privacidad/>} />
      </Routes>
      <PiePagina/>
    </BrowserRouter>
  );
}

export default App;
