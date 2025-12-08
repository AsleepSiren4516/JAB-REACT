import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Principal from './paginas/Principal'
import Servicios from './paginas/Servicios'
import Sobre from './paginas/Sobre'
import Contacto from './paginas/Contacto'
import "./css/style.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Principal/>} />
      <Route path="/sobre" element={<Sobre/>} />
      <Route path="/servicios" element={<Servicios/>} />
      <Route path="/contacto" element={<Contacto/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
