import React, {useState} from 'react'
import './App.css' 
import Header from './componentes/Header'
import Formulario from './componentes/Formulario';

function App() {
    const [cantidad, setCantidad] = useState(0);
  return (
    <>
      <Header titulo="Cotizador de Prestamos"></Header>
      <div className="container">
        <Formulario cantidad={cantidad} setCantidad={setCantidad}></Formulario>
      </div>
    </>
  );
}

export default App
