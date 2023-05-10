import React, { useEffect, useState } from "react";
import style from "./home.module.css";
import Cards from "../Cards/Cards";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { getGenres,resetfilters,getVideoGames,orderByName,orderByRating,filterCreated, filterVideogamesByGenre, getGenderType } from "../Redux/Actions";
import Loading from "../Loading/Loading";
function Home() {

  const [order, setOrder] = useState("");
  const [loading, setLoading] = useState(true);
  
  const{ genres, allVideoGames , videogamesoriginals} = useSelector((state) => state);
 console.log(genres, "test")
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getVideoGames());
    dispatch(getGenres());
  },[])


  function handleSort(event) {
    event.preventDefault();
    dispatch(orderByName(event.target.value)); //despacho la accion
    //setCurrentPage(1)
    setOrder(`Ordenado ${event.target.value}`); //es un estado local vacio, lo uso para modif estado local y renderize
  }
  function handleClick() {
   dispatch(resetfilters())
  }
  function handleSortRating(p) {
    p.preventDefault();
    dispatch(orderByRating(p.target.value)); //despacho la accion
   // setCurrentPage(1);
    setOrder(`Ordenado ${p.target.value}`); //es un estado local vacio, lo uso para modif estado local y renderize
  }
  function handlefilterCreated(event) {
    event.preventDefault();
    dispatch(filterCreated(event.target.value));
  }

  function handleFilterGamesByGenre(event) {
    event.preventDefault();
    dispatch(filterVideogamesByGenre(event.target.value));
    
  }

  

  return (
    <div className="home">
      <div className={style.topContainer}>
        <div className={style.searchbarContainer}> <SearchBar/></div>
        <div className={style.filters}>
        <select
              defaultValue={"DEFAULT"}
              className="select"
              onChange={(p) => handleSort(p)}
            >
              <option value="DEFAULT" disabled>
                In alphabetical order
              </option>
              <option value="asc"> A-Z</option>
              <option value="desc"> Z-A</option>
            </select>
            <select
              defaultValue={"DEFAULT"}
              className="select"
              onChange={(p) => handleSortRating(p)}
            >
              <option value="DEFAULT" disabled>
                Rating
              </option>
              <option value="rasd">Low Score</option>
              <option value="hs">High Score</option>
            </select>
            <select
              defaultValue={"sinFiltro"}
              className="select"
              onChange={(event) => handleFilterGamesByGenre(event)}
            >
              <option value="sinFiltro">Genres</option>
              Genres :{" "}
              {genres?.map((event, i) => {
                return (
                  <option value={event.name} key={i}>
                    {" "}
                    {event.name}{" "}
                  </option>
                );
              })}
            </select>
            <select
              defaultValue={"DEFAULT"}
              className="select"
              onChange={(p) => handlefilterCreated(p)}
            >
              <option value="DEFAULT" disabled>
                Show Games
              </option>
              <option value="all">All games</option>
              <option value="api">From API</option>
              <option value="created">Created</option>
            </select>
          <button className={style.reset} onClick={handleClick}>Reset</button>
        </div>
      </div>
      <div className="cards-container">
        <Cards/>
      </div>
    </div>
  );
}

export default Home;
