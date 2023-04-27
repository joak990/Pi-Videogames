const {Videogame} = require("../db")
const axios = require("axios")
const {KEY_API} = process.env




const getallvideogames = async ()=>{
const dbGames =  await Videogame.findAll()
const url = "https://api.rawg.io/api/games"
let apigames = (
    await axios.get(`${url}?key=${KEY_API}`)).data.results
 return [...dbGames,...apigames]
}

const searchgamebyname = ()=>{

}



const createGame = async (platforms,name,description,image, release_date,rating)=>
await Videogame.create({platforms,name,description,image, release_date,rating})

const getGamesById = async (id,source)=>{
    let game = source === "api"? 
    (await axios.get(`https://api.rawg.io/api/games/${id}?key=${KEY_API}`)).data
    : await Videogame.findByPk(id)
    return game
    }


module.exports = {createGame,getGamesById,getallvideogames,searchgamebyname}