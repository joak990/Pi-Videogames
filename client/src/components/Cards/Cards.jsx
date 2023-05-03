import React from 'react'
import Card from "../Card/Card"
import style from "./cards.module.css"
const api = [{
  "id": 3498,
  "name": "Grand Theft Auto V",
  "platforms": [
    "PlayStation 5",
    "Xbox Series S/X",
    "PlayStation 4",
    "PC",
    "PlayStation 3",
    "Xbox 360",
    "Xbox One"
  ],
  "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
  "rating": 4.47,
  "created": false
},
{
  "id": 3328,
  "name": "The Witcher 3: Wild Hunt",
  "platforms": [
    "Xbox Series S/X",
    "PlayStation 4",
    "Nintendo Switch",
    "PC",
    "Xbox One",
    "PlayStation 5"
  ],
  "image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
  "rating": 4.66,
  "created": false
},
{
  "id": 4200,
  "name": "Portal 2",
  "platforms": [
    "Xbox 360",
    "Linux",
    "macOS",
    "PlayStation 3",
    "PC",
    "Xbox One"
  ],
  "image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
  "rating": 4.62,
  "created": false
},
{
  "id": 5286,
  "name": "Tomb Raider (2013)",
  "platforms": [
    "PlayStation 4",
    "macOS",
    "PC",
    "Xbox One",
    "Xbox 360",
    "PlayStation 3"
  ],}]


function Cards() {
  return (
    <div className={style.containercards}>
     {api.map(game=>{
      return <Card
      name={game.name}
      genre={game.genre}
      image={game.image}
      
      /> })}      
    </div>
  )
}

export default Cards
