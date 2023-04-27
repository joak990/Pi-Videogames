const {createGame ,getGamesById,searchgamebyname,getallvideogames} = require ("../Controllers/VideoGamesController")



const getVideogamesHandler = async (req,res)=>{
    const  {name} = req.query
    
    const results = name ? searchgamebyname(name) : await getallvideogames()
   res.status(200).json(results)
  }



  const getVideogameHandler =  async(req,res)=>{
    const  { id } = req.params
   const source = isNaN(id)?"bd":"api"
        try {
        let game =  await getGamesById(id,source)
        res.status(200).json(game)
    } catch (error) {
        res.status(400).json({error:error.message})
    }

  }
  
  const createVideoHandler = async (req,res)=>{
    try {
        const {platforms,name,description,image,release_date,rating} = req.body
        const newgame = await createGame(platforms,name,description,image,release_date,rating)
        res.status(201).json(newgame)
    } catch (error) {
        res.status(400).json({error:error.message})
    }

    const getGenres = async (req,res)=> {
      try {
        
      } catch (error) {
        
      }


    }
 
   
}


  module.exports = {
    getVideogameHandler,
    getVideogamesHandler,
    createVideoHandler,
  }