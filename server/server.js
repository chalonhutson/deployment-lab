const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("client"));


app.get("/", (req, res) => {res.sendFile(path.join(__dirname, "../client/index.html"))});

// app.get("/styles", (req, res) => {res.sendFile(path.join(__dirname, "../client/index.css"))});

const port = process.env.PORT || 4004;

app.listen(port, ()=> {console.log(`Listening on port ${port}, Captain!`)});