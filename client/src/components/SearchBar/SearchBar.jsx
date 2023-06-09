import React from 'react'
import style from './searchbar.module.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import {getNameVideoGames} from "../Redux/Actions"

 export function SearchBar() {
  const dispatch = useDispatch()
  const [name, setName] = useState("")

  function handleInputChange(e){
    e.preventDefault()
    setName(e.target.value)
  } 


function handleSubmit(e){
  e.preventDefault()
  console.log(name)
  dispatch(getNameVideoGames(name))

}
  return (
    <div>
    <form>
      <input
        className={style.searchinput}
        type="text"
        placeholder="Search game by name..." 
        onChange={(event)=>handleInputChange(event)}
        value={name}
        />

      <button type="submit" className={style.btnsearch}  onClick = {(e)=> handleSubmit(e)}>
        Search
      </button>
    </form>
  </div>
  )
}

export default SearchBar




