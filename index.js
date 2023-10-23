const express = require("express");
require('dotenv').config();
const path = require("path");
const app = express();
const ejs  = require('ejs');
const DB = require("./connectDB");
const router = require("./route");

const port = process.env.PORT || 3001;


const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.urlencoded({ extended: false }))
app.use(express.static('./frontend'));
// app.set('views', __dirname + '/views'); 
// app.use(express.json());
app.set("view engine", "ejs")
app.use(router);

app.get('/tasks',(req,res)=>{
    return res.send(`this is ${req.query.number}`)
})
DB();

app.listen(port,console.log("Server started on port 3000"));