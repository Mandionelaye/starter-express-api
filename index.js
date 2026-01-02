const express = require('express');
// const body = require('body-parser');
const cors = require('cors');
// const db  = require('./BasesDeDonnees/BD');
const routes = require('./route');
// require('dotenv').config();

// db.connection();
const app = express();
const port =  8000;

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(8000, ()=>(
    console.log(`http://localhost:${port}`)
))
