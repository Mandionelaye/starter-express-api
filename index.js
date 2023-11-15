const expres = require("express");
const routes = require('./route');
const app = expres();

app.use(routes);

app.listen(9000, ()=>{
    console.log("http//localhost:9090");
})
