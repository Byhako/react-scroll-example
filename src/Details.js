import React from 'react'
import data from './data';
import './styles.css';

const Details = ({ history, match }) => {
  const { id } = match.params;
  const info = data[id].details[0];

  return (
    <div className='container'>
      <span>Details</span>
      <button onClick={() => history.push('/')}>Regresar</button>
      <p className='item'>Nombre: {info.nombre}</p>
      <p className='item'>Precio: {info.precio}</p>
      <p className='item'>Cantidad: {info.cantidad}</p>
    </div>
  )
}

export default Details;
