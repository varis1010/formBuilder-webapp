const express= require('express');
require("./db/mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');
const questionsRouter = require("./router/questionsRouter");
const app=express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.use(express.urlencoded({
    extended: true
  }));
app.use(cors());
app.use(express.json());
app.use(questionsRouter);

const port=5000;
app.listen(port, () =>{
    console.log('Server started', +port);
})