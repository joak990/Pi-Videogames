const {Videogame,} = require("../db")
const axios = require("axios")

const {KEY_API} = process.env
const {Op} = require ("sequelize")
const Genre = require("../models/Genre")
const cleanArray = (arr)=>{
return arr.map(e=>{
    return {
        id:e.id,
        name:e.name,
        description:e.description,
        platforms:e.platforms.map((e) => e.platform.name),
        image:e.background_image,
        release_date:e.release_date,
        rating:e.rating,
        genre:e.genres,
        created: false

    }
})
}



const getallvideogames = async ()=>{
const dbGames =  await Videogame.findAll()
const url = "https://api.rawg.io/api/games"
let apigamesraw = (
    await axios.get(`${url}?key=${KEY_API}`)).data.results

    const apigames =cleanArray(apigamesraw)
 return [...dbGames,...apigames]
}

const searchgamebyname = async (name) => {
    const databasegames = await Videogame.findAll({where: {name: {
        [Op.iLike]: `%${name}%`,
      }}})
   
    const url = "https://api.rawg.io/api/games";
    const apigamesraw = (
      await axios.get(`${url}?key=${KEY_API}`)
    ).data.results;
    const apigames = cleanArray(apigamesraw);
    const filteredapi = apigames.filter((game)=>game.name.includes(name)
  )
    return [...filteredapi, ...databasegames];
  };
  



const createGame = async (platforms,name,description,image, release_date,rating)=>
await Videogame.create({platforms,name,description,image, release_date,rating})

const getGamesyId = async (id)=>{
    
    const source = isNaN(id) ? 'bdd' : 'api';
    if(source==="api"){
        let game = (await axios.get(`https://api.rawg.io/api/games/${id}?key=${KEY_API}`)).data
        return{
            id:game.id,
            name:game.name,
            description:game.description,
            platforms:game.platforms.map((game) => game.platform.name),
            image:game.background_image,
            release_date:game.release_date,
            rating:game.rating,
            created: false
        }
    }
return await Videogame.FindByPk(id)
}

module.exports = {createGame,getGamesyId,getallvideogames,searchgamebyname}