const expres = require("express");
const body = require('body-parser');
const cors = require('cors');
const routes = require('./route');
const app = expres();

app.use(body.urlencoded({extended:false}));
app.use(body.json());
app.use(routes);

app.listen(9000, ()=>{
    console.log("http//localhost:9090");
})
