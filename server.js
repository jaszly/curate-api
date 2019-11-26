const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const port = process.env.PORT || 5000;

const app = express();

// bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("dotenv").config();
require("./database");

// app.get('/controllers/root.js', (req, res) => {
// 	res.send('Welcome to Curate API')
// })   api >> react

app.listen(process.env.PORT, () => {
  console.log(`'ready on port' ${process.env.PORT}`);
});

module.exports = app;
