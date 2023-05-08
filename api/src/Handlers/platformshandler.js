//const { getAllPlatforms } = require('../Controllers/platformsController')
const getAllPlatformsHandler = async (req,res) => {
    
    try {
        const response = await getAllPlatforms();
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {getAllPlatformsHandler}