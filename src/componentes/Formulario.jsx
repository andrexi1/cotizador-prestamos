import React from 'react'

const Formulario = ({cantidad, setCantidad}) => {

  return ( 
    <form action="">
      {cantidad}
      <div className="column">
        <div>
          <label>Cantidad Prestamo</label>
          <input type="number" placeholder='Ej:3000'
            onChange={(e)=>setCantidad(e.target.value)}
          />
        </div>
        <div>
          <label>Plazo para pagar</label>
          <select>
            <optio value=''>Seleccionar</optio>
            <optio value='3'>3 meses</optio>
            <optio value='6'>6 meses</optio>
            <optio value='12'>12 meses</optio>
            <optio value='24'>24 meses</optio>
          </select>
        </div>
      </div>
      <div className="btnSubmit">
        <input type="submit" value='calcular'/>
      </div>
    </form>
  );
}

export default Formulario;