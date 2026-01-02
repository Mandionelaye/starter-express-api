const express = require('express');
const routes = express.Router();
const listPokemon = require('./BDPokemon');
const email = require('./email');
const {getElm, setElm} = require('./reist')

module.exports = routes;

routes.get('/pokemon',(req,res)=>{
    res.json(listPokemon);
})

routes.get('/pokemon/:id',(req,res)=>{
    const id = req.params.id;
    const pokemon = listPokemon.find(pokemo => pokemo.id == id);
    res.json(pokemon);
})

routes.get('/elm/:id', async (req,res)=>{
    const id = req.params.id;
    const elm = await getElm(id);
    res.json(elm);
})

routes.get('/elmAdd/:keys/:value', async (req,res)=>{
    const {keys, value} = req.params;
    const elm = await setElm(keys, value);
    res.json(elm);
})

routes.post('/sendMail/', email)
