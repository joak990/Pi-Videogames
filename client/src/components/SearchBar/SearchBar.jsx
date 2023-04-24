import React from 'react'
import style from './searchbar.module.css'
function SearchBar() {
  return (
    <div>
    <form>
      <input
        className={style.searchinput}
        type="text"
        placeholder="Search game by name..."/>

      <button type="submit" className={style.btnsearch}>
        Search
      </button>
    </form>
  </div>
  )
}

export default SearchBar
