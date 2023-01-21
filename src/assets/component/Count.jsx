import React from 'react'

const Count = ({contador,acumulador}) => {
    let funcion = ()=>{acumulador(contador+1)}
  return (
    <>
    
    <h2>UseState</h2>
      <button onClick={funcion}>{contador}</button>
    </>
  )
}

export default Count