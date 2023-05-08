const { Router } = require('express');
const videogamesrouter = require ("./gamesrouter")
const Genresrouter = require ("./GenresRouter")
const platformsrouter = require ("./Platformrouter")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use("/videogames",videogamesrouter)
router.use("/genres",Genresrouter)
router.use("/platforms",platformsrouter)

module.exports = router;
