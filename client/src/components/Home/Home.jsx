import React from "react";
import style from './home.module.css'
import Cards from "../Cards/Cards";
import SearchBar from "../SearchBar/SearchBar";
function Home() {
  return (
    <div>
    <SearchBar/>
      <div className={style.filters}> 
       <select>
       <option value="DEFAULT">By Genre</option>
        <option value=""></option>
        <option value=""></option>
       </select>
       <select >
       <option value="DEFAULT" >Rating</option>
        <option value="">High</option>
        <option value="">Low</option>
       </select>
       <select >
       <option value="DEFAULT">All</option>
        <option value="">A-Z</option>
        <option value="">Z-A</option>
       </select>
       <select >
       <option value="DEFAULT">In alphabetical Order</option>
        <option value="">Alredy Exist</option>
        <option value="">Created</option>
       </select>
      </div>
      <Cards></Cards>
    </div>
  );
}

export default Home;
