import axios from "axios";
import {
    GET_VIDEO_GAMES,
    GET_GAMES_BY_NAME,
    GET_GENRES,
    GET_PLATFORMS,
    FILTER_BY_GENRE,
    ORDER_BY_NAME,
    ORDER_BY_RATING,
    GET_GENRE_TYPES,
    FILTER_CREATED,
    SUBMIT_GAME,
    GET_DETAIL,
 CLEAN_DETAIL_VIDEOGAME,
 RESET_FILTERS
   
    
  
} from "./Types";

export function getVideoGames() {
    return function (dispatch) {
      axios
        .get("http://localhost:3001/videogames")
        .then((response) => {
          dispatch({ type: GET_VIDEO_GAMES, payload: response.data });
        })
        .catch(() => {
          alert("error videogames not found");
        });
    };
  }

  export function getNameVideoGames(name) {
    return function (dispatch) {
      return axios
        .get(`http://localhost:3001/videogames?name=${name}`)
        .then((res) => {
          dispatch({ type: GET_GAMES_BY_NAME, payload: res.data });
        })
        .catch(() => {
         alert("error videogames not found")
        });
    };
  }

  export function getGenres() {
    return function (dispatch) {
      axios
        .get("http://localhost:3001/genres")
        .then((response) => {
          dispatch({ type: GET_GENRES, payload: response.data });
        })
        .catch(() => {
          alert("Error, genres not found");
        });
    };
  }

  
export function getPlatforms() {
    return async function (dispatch) {
      var json = await axios.get("http://localhost:3001/videogames", {});
      return dispatch({
        type: GET_PLATFORMS,
        payload: json.data,
      });
    };
  }
  


    
  export const orderByName = (payload) => {
    return {
      type: ORDER_BY_NAME,
      payload: payload,
    };
  };


  export const orderByRating = (payload) => {
    return {
      type: ORDER_BY_RATING,
      payload: payload,
    };
  };
  export const getGenderType = () => {
    return async function (dispatch) {
      try {
        let genderTy = [];
        let json = await axios.get("http://localhost:3001/videogames");
        let genres = json.data.map((e) => e.genderTypes);
        genres.forEach((a) =>
          Array.isArray(a)
            ? a.forEach((e) => (!genderTy.includes(e) ? genderTy.push(e) : e))
            : a
        );
        return dispatch({
          type: GET_GENRE_TYPES,
          payload: genderTy,
        });
      } catch (error) {
        alert({error:error.message})
      }
    };
  };
  
  
  export const filterVideogamesByGenre = (payload) => {
    return {
      type: FILTER_BY_GENRE,
      payload: payload,
    };
  };
  

  export function filterCreated(payload) {
    
    return {
      type: FILTER_CREATED,
      payload
    };
  }

  export const postVideoGames = (payload) => {
    return async function () {
      try {
        const json = await axios.post(
          "http://localhost:3001/videogames",
          payload
        );
        return {
          type: SUBMIT_GAME,
          json: json.data,
        };
      } catch (error) {
        alert({error:error.message})
      }
    };
  };

  export const getDetails = (id) => {
    return async function (dispatch) {
      try {
       
        const response = await axios.get(`http://localhost:3001/videogames/${id}`);
        return dispatch({
          type: GET_DETAIL,
          payload: response.data,
        });
      } catch (error) {
        alert({error:error.message})
      }
    };
  };
  
 

  export function cleanDetail(){
    return {
      type: CLEAN_DETAIL_VIDEOGAME,
    }
  }

  
  export function resetfilters(){
    return {
      type: RESET_FILTERS,
    }
  }

  
  
  
  
  
