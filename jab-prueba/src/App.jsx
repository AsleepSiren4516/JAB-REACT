import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Principal from './paginas/Principal'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Principal/>
    </>
  )
}

export default App
