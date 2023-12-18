import React, {useState} from 'react'
import './App.css' 
import Header from './componentes/Header'
import Formulario from './componentes/Formulario';
import Resultado from './componentes/Resultado';
import { Mensaje } from './componentes/Mensaje';

function App() {
    const [cantidad, setCantidad] = useState(0);
    const [plazo, setPlazo] = useState('');
    const [total, setTotal] = useState(0);

    let componentes
    if (total===0) {
      componentes=<Mensaje></Mensaje>
    }else{
      componentes = (
        <Resultado total={total} catidad={cantidad} plazo={plazo}></Resultado>
      );
    }
  return (
    <>
      <Header titulo="Cotizador de Prestamos"></Header>
      <div className="container">
        <Formulario cantidad={cantidad}
        setCantidad={setCantidad}
        plazo={plazo}
        setPlazo={setPlazo}
        setTotal={setTotal}>
        </Formulario>
      </div>
      <div className="mensaje">
        {componentes}
      </div>
    </>
  );
}

export default App
