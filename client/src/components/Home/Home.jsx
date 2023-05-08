import React, { useEffect } from "react";
import style from "./home.module.css";
import Cards from "../Cards/Cards";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import { getVideoGames } from "../Redux/Actions";
function Home() {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getVideoGames());
  },[dispatch])

  return (
    <div className="home">
      <div className={style.topContainer}>
        <div className={style.searchbarContainer}> <SearchBar/></div>
        <div className={style.filters}>
          <select>
            <option value="DEFAULT">By Genre</option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <select>
            <option value="DEFAULT">Rating</option>
            <option value="">High</option>
            <option value="">Low</option>
          </select>
          <select>
            <option value="DEFAULT">All</option>
            <option value="">A-Z</option>
            <option value="">Z-A</option>
          </select>
          <select>
            <option value="DEFAULT">In alphabetical Order</option>
            <option value="">Alredy Exist</option>
            <option value="">Created</option>
          </select>
        </div>
      </div>
      <div className="cards-container">
        <Cards />
      </div>
    </div>
  );
}

export default Home;
