const {createGame,getGamesyId,searchgamebyname,getallvideogames} = require ("../Controllers/VideoGamesController")



const getVideogamesHandler = async (req,res)=>{
    const {name} = req.query
    try {
      const results = name ? await searchgamebyname(name) : await getallvideogames()
   res.status(200).json(results)
    } catch (error) {
      res.status(400).json({error:error.message})
    }
    
  }



  const  getVideogameHandler =  async(req,res)=>{
    const  { id } = req.params
        try {
        let game =  await getGamesyId(id)
        res.status(200).json(game)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
  }
  
  const createVideoHandler = async (req,res)=>{
    try {
        const {platforms,name,description,image,release_date,rating,genre} = req.body
        const newgame = await createGame(platforms,name,description,image,release_date,rating)        
        newgame.addGenre(genre)
        res.status(201).json(newgame)
    } catch (error) {
        res.status(400).json({error:error.message})
    }

   
}

  module.exports = {
    getVideogameHandler,
    getVideogamesHandler,
    createVideoHandler,
  }