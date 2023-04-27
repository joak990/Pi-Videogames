import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from './home.module.css'
function Home() {
  return (
    <div>
      <div className={style.containernav}>
       <SearchBar/>
        <Link to={"/"}>
          <button className={style.button1}>Go to initial page</button>
        </Link>
        <Link to={"/createvideogame"}>
        <button>Create New Game</button>
        </Link>
        </div>
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
    </div>
  );
}

export default Home;
