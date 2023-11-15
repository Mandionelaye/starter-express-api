const express = require('express');
const routes = express.Router();
const listPokemon = require('./BDPokemon');

module.exports = routes;

routes.get('/pokemon',(req,res)=>{
    res.json(listPokemon);
})

routes.get('/pokemon/:id',(req,res)=>{
    const id = req.params.id;
    const pokemon = listPokemon.find(pokemo => pokemo.id == id);
    res.json(pokemon);
})
