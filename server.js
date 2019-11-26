const express = require("express");
const app = express();
const mongoose = require("mongoose");

// const port = process.env.PORT || 5000;

require("dotenv").config();

// app.get('/controllers/root.js', (req, res) => {
// 	res.send('Welcome to Curate API')
// })   api >> react

app.listen(process.env.PORT, () => {
  console.log(`'ready on port' ${process.env.PORT}`);
});

module.exports = app;
