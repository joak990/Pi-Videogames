import React from "react";
import style from "./card.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Card({genre,name,image,id}) {
 
  return (
    <div className={style.containercard}>
      <p className={style.pimage}>{name}</p>
      <div className={style.genres}>
    
        {Array.isArray(genre)&& genre.length > 0  ? 
        genre.map((elem,index)=><h5 className={style.pgenre} key={index}>{elem}</h5>)
      :<p>No genres</p>}
      </div>
      <NavLink className={style.navlink} to={`/videogames/${id}`}>
        <img className={style.imagecontainer} src={image} alt="" />
      </NavLink>
      
    </div>
  );
}

export default Card;

