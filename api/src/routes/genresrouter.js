const { Router} = require ("express")

const GenresRouter = Router()



GenresRouter.get("/",(req,res)=>{
    res.send("aqui todos los generos")
})




module.exports =GenresRouter