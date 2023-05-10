import {
  FILTER_CREATED,
  CLEAN_DETAIL_VIDEOGAME,
  FILTER_BY_GENRE,
  GET_DETAIL,
  GET_GAMES_BY_NAME,
  GET_GENRES,
  GET_PLATFORMS,
  GET_VIDEO_GAMES,
  ORDER_BY_NAME,
  ORDER_BY_RATING,
  SUBMIT_GAME,
  RESET_FILTERS,
} from "./Types";

const initialState = {

  allVideoGames: [],
  genres: [],
  platforms: [],
  resPost: [],
  videoGamesdetails: [],
  videogamesoriginals: [],
  };

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEO_GAMES:
      return {
        ...state,
        allVideoGames: action.payload,
        videogamesoriginals: action.payload,
      
      };
    case FILTER_CREATED:
        const setgame = state.videogamesoriginals
        const games = state.videogamesoriginals
        const createdFilter = action.payload === 'created' ?
            games.filter(el => el.created) :
            games.filter( el => !el.created )

         return {
             ...state,
             allVideoGames: action.payload.toLowerCase() === 'all' ?
                 setgame :
                 createdFilter,
                 
         }

    case GET_GAMES_BY_NAME:
      return {
        ...state,
        allVideoGames: action.payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };

    case GET_PLATFORMS:
      return {
        ...state,
        platforms: action.payload,
      };

    case FILTER_BY_GENRE:
      const allGames = state.videogamesoriginals;
      const filterGame = allGames.filter((elem)=> {
        if (elem.genre) {
          const genres = elem.genre;
          return genres.includes(action.payload);
        }
        return false; 
      });
      return {
        ...state,
        allVideoGames: action.payload === "sinFiltro" ? allGames : filterGame,
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

    case CLEAN_DETAIL_VIDEOGAME:
      return {
        ...state,
        videogamesDetails: {},
      };

   
    case RESET_FILTERS:
      return {
        ...state,
        allVideoGames: [...state.videogamesoriginals],
      };

    case ORDER_BY_NAME:
      let sortedArr =
        action.payload === "asc"
          ? state.allVideoGames.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }

              if (a.name < b.name) {
                return -1;
              }

              return 0;
            })
          : state.allVideoGames.sort(function (a, b) {
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
        allVideoGames: sortedArr, // paso al estado el ordenamiento
      };
    case ORDER_BY_RATING:
      let RsortedArr =
        action.payload === "rasd"
          ? state.allVideoGames.sort(function (a, b) {
              if (a.rating > b.rating) {
                return 1;
              }

              if (a.rating < b.rating) {
                return -1;
              }

              return 0;
            })
          : state.allVideoGames.sort(function (a, b) {
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
        allVideoGames: RsortedArr, // paso al estado el ordenamiento
      };
    default:
      return state;
  }
}
