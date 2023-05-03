import { DELETE_GAME, FILTER_BY_GENRE, GET_DETAIL, GET_GAMES_BY_NAME, GET_GENRES, GET_PLATAFORMS, GET_VIDEO_GAMES, ORDER_BY_NAME, ORDER_BY_RATING, SUBMIT_GAME } from "./Types";

const initialState = {
  videogames: [],
  allVideoGames: [],
  genres: [],
  platform: [],
  resPost: [],
  createInDb: [],
  videoGamesdetails: [],
  };




export default function rootReducer(state = initialState, action){
 switch (action.type) {
  case GET_VIDEO_GAMES:
    return {
      ...state,
      videogames: action.payload,
      allVideoGames: action.payload,
    };

    case GET_GAMES_BY_NAME:
      return {
        ...state,
        videogames: action.payload,
      };
      case GET_GENRES:
        return {
          ...state,
          genres: action.payload,
        };
       
        case GET_PLATAFORMS:
      return {
        ...state,
        plataform: action.payload,
      };

      case FILTER_BY_GENRE:
        const allStateGames = state.allVideoGames;
        const tempGames = allStateGames.filter((p) => {
          if (p.genre) {
            const genres = p.genre;
            return genres.includes(action.payload);
          }
        });
        return {
          ...state,
          videogames: action.payload === "sinFiltro" ? allStateGames : tempGames,
        };
       
        case SUBMIT_GAME:
      return {
        ...state,
        resPost: action.json,
      };
      
      case GET_DETAIL:
        return {
          ...state,
          videoGamesdetails: action.payload,
        };
       
        case DELETE_GAME:
          return{
            ...state
          }

          case ORDER_BY_NAME:
      let sortedArr =
        action.payload === "asc"
          ? state.videogames.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }

              if (a.name < b.name) {
                return -1;
              }

              return 0;
            })
          : state.videogames.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }

              if (a.name < b.name) {
                return 1;
              }

              return 0;
            });
      return {
        ...state,
        videogames: sortedArr, // paso al estado el ordenamiento
      };
      case ORDER_BY_RATING:
        let RsortedArr =
          action.payload === "rasd"
            ? state.videogames.sort(function (a, b) {
                if (a.rating > b.rating) {
                  return 1;
                }
  
                if (a.rating < b.rating) {
                  return -1;
                }
  
                return 0;
              })
            : state.videogames.sort(function (a, b) {
                if (a.rating > b.rating) {
                  return -1;
                }
  
                if (a.rating < b.rating) {
                  return 1;
                }
  
                return 0;
              });
        return {
          ...state,
          videogames: RsortedArr, // paso al estado el ordenamiento
        };
  default:
    return state
 }
}