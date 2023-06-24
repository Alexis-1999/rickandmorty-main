const {getCharById} = require('../controllers/charById.js')
const {login} = require('../controllers/login')
const {postFav, deleteFav} = require("../controllers/handleFavs.js")

const express = require('express')
const router = express.Router()



router.get("/character/:id", (req, res)=>{
    getCharById(req,res)
    // return res.status(200).json(getcharById)/
})

router.get("/login", (req, res)=>{
    login(req,res)
    // return res.status(200).send(logins)
    
})

router.post("/fav", (req, res)=>{
    postFav(req, res)
})

router.delete("/fav/:id", (req, res) => {
    deleteFav(req, res)
})

module.exports = router