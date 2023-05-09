import React, { useState } from 'react'
import Card from "../Card/Card"
import style from "./cards.module.css"
import { useSelector } from 'react-redux'
import Paginación from '../Paginación/Paginación'


  
function Cards() {
  const Games = useSelector(state => state.allVideoGames)
  
  const [pagina,setPagina] = useState(1)
  const [porpagina,setPorpagina] = useState(15)

  const maximo = Games.length / porpagina
  
  return (
    <div className={style.containercards}>
     {Games.slice((pagina - 1) * porpagina,
     (pagina -1) * porpagina + porpagina)
     .map(game=>{
      return <Card
      id={game.id}
      key={game.id}
      name={game.name}
      genre={game.genre}
      image={game.image}
      rating={game.rating}
            />})} 
    <Paginación pagina={pagina} setPagina={setPagina} maximo={maximo}/>     
    </div>
  )
}

export default Cards
