const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true }, err => {
  err ? console.log(err) : console.log("Connected to mongoDB");
});

module.exports = mongoose;
