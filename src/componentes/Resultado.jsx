import React from 'react'

const Resultado = ({cantidad, total, plazo}) => {
  return (
    <div className="resultado">
      <h1>Cotizacion:</h1>
      <p>La cantidad solicitadad es:${cantidad} </p>
      <p>A pagar en:${plazo} Mese </p>
      <p>Su pago mensual es de:${(total/plazo).toFixed(2)} </p>
      <p>El total a pagar es:${total} </p>
    </div>
  );
}
 
export default Resultado ;