import {React, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, NavLink} from 'react-router-dom'
import { cleanDetail, getDetails } from '../Redux/Actions'
import style from "./detail.module.css"
import Loading from "../Loading/Loading";


function Detail() {

  const [loading, setLoading] = useState(true);
  const {id}= useParams();
  const dispatch = useDispatch();
  const videogame = useSelector((state)=> state.videoGamesdetails);
  useEffect(()=>{
    dispatch(getDetails(id));
    return ()=>{
        dispatch(cleanDetail())
    }
},[id, dispatch]);

const changeLoading = () => {
    
    
  setTimeout(() => {
    setLoading(false);
  }, 1000);
};


if (loading) {
  changeLoading();
  return <Loading></Loading>;
} else {
  return (

    <div className={style.containerdeta}>
        <div className="containernav">
          <nav>
            
          </nav>
        </div>
     <h1 className={style.titledetail}>Detail Videogame</h1>
      <h1 className={style.idDetail}>{videogame.name}</h1>
      <div className={style.containerimagee}>
      <img className={style.imagedetail}src={videogame.image} alt=""/>
      </div>


      <h1 className={style.genresdetail}>Genres</h1>
        {videogame.genre?.map((genre, index) => (
  <div key={index}>
    <h2 className={style.namecont}>{genre.name}</h2>
 
  
   
   
    <p className={style.slug}>Slug: {genre.slug}</p>
    <p className={style.contgenres}>Games Count: {genre.games_count}</p>
    <div className={style.containerimagee}>
    <img className={style.imagedetail}src={genre.image_background} alt="Genre background"/>
    
    </div>
    
  </div>
))}      
       
        <div className={style.cont}>
        <h2 className={style.descriptiondetail}>Description: </h2>
        <p className={style.descriptionreal}>{(videogame.description)}</p>
        <h2 className={style.idDetail}>Released Date: <p className={style.release}></p></h2>
        <p className={style.release}>{videogame.release_date}</p>
        <h2 className={style.idDetail}>Rating: </h2>
        <p className={style.ratingrender}>{videogame.rating}</p>
        <h2 className={style.idDetail}>Platforms: </h2>
        <div className={style.platformscontainer}>
        {videogame.platforms?.map((elem, index)=>(
            <p className={style.platforms} key={index}>{elem}</p>
          
        ))}
     
        </div> 
        </div>
        <div className={style.containerbuttons}>
              <NavLink  to={"/home"}>
              <button   className={style.buttonscontainer}>Back</button>
              </NavLink>
              
            </div>
        <footer>james</footer>
      </div>
    
  )
}
}
export default Detail
