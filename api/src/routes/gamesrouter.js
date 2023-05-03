const { Router} = require ("express")
const {getVideogameHandler,getVideogamesHandler,createVideoHandler} =require("../Handlers/videoGamesHandler")

const videogamesRouter = Router()


videogamesRouter.get("/",getVideogamesHandler)
videogamesRouter.get("/:id",getVideogameHandler)
videogamesRouter.post("/",createVideoHandler)




module.exports =videogamesRouter