const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getallVideogames =require("../controllers/Getallvideogames")
const getVideogameById =require("../controllers/GetVideoGamesByid")
const getVideogameByName =require("../controllers/GetVideoGameByName")
const PostVideoGame =require("../controllers/PostVideoGame")
const GetGenres =require("../controllers/GetGenres")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


//router.get("/videogames", getallVideogames)
//router.get("/videogame/:id", getVideogameById)
//router.get("/videogame/name", getVideogameByName)
//router.post("/videogame", PostVideoGame)
//router.get("/genres", GetGenres)


module.exports = router;
