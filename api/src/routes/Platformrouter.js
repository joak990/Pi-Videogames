const { Router } = require('express');

const {getAllPlatformsHandler} = require('../Handlers/platformshandler')

const platformsRouter = Router();

platformsRouter.get('/',getAllPlatformsHandler)

module.exports= platformsRouter;