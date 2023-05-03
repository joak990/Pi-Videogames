const {Router} = require("express");
const genresRoutes = Router();
const {getGenresHandler} = require("../Handlers/genresHandlers")

genresRoutes.get("/", getGenresHandler);


module.exports = genresRoutes;