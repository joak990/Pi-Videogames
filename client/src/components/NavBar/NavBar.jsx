import React from 'react'
import { Link } from 'react-router-dom'
import style from "./navbar.module.css"
function NavBar() {
  return (
    <div className={style.mainnavbar}> 
      <Link className={style.linksnav} to="/home">Home</Link>
      <Link className={style.linksnav} to="/create">Create</Link>
    </div>
  )
}

export default NavBar
