const express = require("express");
const cors = require('cors');
const path = require('path');

const planetRouter = require("./routes/planets/planets.router");

const app = express();

app.use(cors({
    origin:'http://localhost:3000'
}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'..','build')))

app.use(planetRouter);
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'..','build','index.html'))
})

module.exports = app;
