import React from 'react'

const Switch = ({prende,acumulador}) => {
    let foc = ()=>{ acumulador(!prende)}
  return (
    <>
    
    
    <button onClick={foc} className={`off  ${prende ? "a": ""}`}></button>

    </>
  )
}

export default Switch