import React, { useState } from 'react'
import style from "./Paginacion.module.css"
function Paginación({pagina,setPagina,maximo}) {
  const [input,setInput]= useState(1)


  const nextpage = ()=>{
    setInput(parseInt(input) + 1)
    setPagina(parseInt(pagina) + 1)
  }

  const prevpage = ()=>{
    setInput(parseInt(input) - 1 )
    setPagina(parseInt(pagina) - 1)
  }
  const maxMin = (e) =>{
    if(
        parseInt(e.target.value < 1) ||
        parseInt(e.target.value) > Math.ceil(maximo) ||
        isNaN(parseInt(e.target.value))){
            setPagina(1);
            setInput(1);
    } else {
            setPagina(parseInt(e.target.value))}};

            const Onchange = (e)=>{
                setInput(e.target.value)
            }
  
    return (
    <div  className={style.containerpag}>
      <button disabled={pagina===1 || pagina < 1 } onChange={e=>Onchange(e)} onClick={prevpage} className={style.buttonpag}>Previous Page</button>
      <input maxMin={e=>maxMin(e)} name='page'autoComplete='off' value={input} className={style.inputpag}  />
      <p> </p>
      <button disabled={pagina=== Math.ceil(maximo)|| pagina > maximo } onClick={nextpage}  className={style.buttonpag} >Next Page</button>

    </div>
  )
}

export default Paginación
