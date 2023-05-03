import React from 'react'
import style from "./card.module.css"
function Card(props) {
  return (
    <div className={style.containercard}>
      <p>Name:{props.name} </p>
    <img className={style.imagecontainer} src={props.image} alt="" /> 
    </div>
  )
}

export default Card
