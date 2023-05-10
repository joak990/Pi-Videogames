const { Videogame, Genre } = require("../db");

const axios = require("axios");

const { KEY_API } = process.env;
const { Op } = require("sequelize");

const cleanArray = (arr) => {
  return arr.map((e) => {
    return {
      id: e.id,
      name: e.name,
      description: e.description_raw,
      platforms: e.platforms ? e.platforms.map((e) => e.platform.name) : [],
      image: e.background_image,
      release_date: e.released,
      rating: e.rating,
      genre: e.genres.map((elem) => elem.name),
      
    };
  });
};

const cleanArrayDb = (
  arr // esta funcion me ayuda a mostrar info necesaria
) =>
  arr.map((elem) => {
    // este array es el array de videojuegos que viene de la api.
    return {
      id: elem.id,
      name: elem.name,
      description: elem.description,
      platforms: elem.platforms,
      rating: elem.rating,
      released: elem.released,
      image: elem.image,
      genre: elem.Genres.map((elem) => elem.name),
      created: elem.createinDb,
    };
  });

const getallvideogames = async () => {
  const URL = `https://api.rawg.io/api/games`;
  const dbVideogamesRaw = await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  const dbVideogames = cleanArrayDb(dbVideogamesRaw);

  const apiVideogames = [];
  for (let i = 1; i <= 7; i++) {
    const response = await axios.get(`${URL}?key=${KEY_API}&page=${i}`);
    const apiVideogamesRaw = response.data.results;
    apiVideogames.push(...apiVideogamesRaw);
  }
  const cleanApiVideogames = cleanArray(apiVideogames);

  return [...dbVideogames, ...cleanApiVideogames];
};

const searchgamebyname = async (name) => {
  const databasegames = await Videogame.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });

  const url = "https://api.rawg.io/api/games";
  // const apigamesraw = (await axios.get(`${url}?key=${KEY_API}`)).data.results;
  const apigames = [];
  for (let i = 1; i <= 7; i++) {
    const response = await axios.get(`${url}?key=${KEY_API}&page=${i}`);
    const apiVideogamesRaw = response.data.results;
    apigames.push(...cleanArray(apiVideogamesRaw));
  }
  const filteredapi = apigames.filter((game) =>  game.name.toLowerCase().includes(name.toLowerCase()));
  return [...filteredapi, ...databasegames];
};



const createGame = async (
 platforms,
  name,
  description,
  image,
  release_date,
  rating,
  genre
) =>
  await Videogame.create({
    platforms,
    name,
    description,
    image,
    release_date,
    rating,
    genre,
  });

const getGamesyId = async (id) => {
  // por id

  const source = isNaN(id) ? "bdd" : "api"; // si no es un numero viene por bd
  if (source === "api") {
    let game = (
      await axios.get(`https://api.rawg.io/api/games/${id}?key=${KEY_API}`)
    ).data;
    return {
      id: game.id,
      name: game.name,
      description: game.description,
      platforms: game.platforms.map((game) => game.platform.name),
      image: game.background_image,
      release_date: game.released,
      rating: game.rating,
      created: false,
      genre: game.genres,
    };
  } else {
    const dbVideoGame = await Videogame.findByPk(id, {
      include: [
        {
          model: Genre,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    const gameDetails = Object.values(dbVideoGame)[0] ?? {};
   
    return {
      id: gameDetails.id,
      name: gameDetails.name,
      description: gameDetails.description,
      platforms: gameDetails.platforms.map(
      (platform) => platform
      ),
      image: gameDetails.image,
      release_date: gameDetails.release_date,
      rating: gameDetails.rating,
      created: true,
      genre: gameDetails.Genres,
    };
  }

  return await Videogame.FindByPk(id);
};

module.exports = {
  createGame,
  getGamesyId,
  getallvideogames,
  searchgamebyname,
};
