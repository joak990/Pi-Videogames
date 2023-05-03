const {Genre} = require("../db")
const axios = require("axios")
const {KEY_API} = process.env

const getAllGenres = async ()=> {
 const URL = `https://api.rawg.io/api/genres`
   const apiGenres = (await axios.get(`${URL}?key=${KEY_API}`)).data.results;
   const apiGenresMap = apiGenres.map((e)=> e.name)
   apiGenresMap.forEach((e)=> 
   Genre.findOrCreate({where: {name:e}} )
   )
   const totalGenre = await Genre.findAll();
    return totalGenre; 
}

module.exports = getAllGenres;