const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./router')

const app = express()

require('dotenv').config()
const MONGOURI = process.env.DATABASE

mongoose
	.connect(MONGOURI, { useNewUrlParser: true })
	.then(() => console.log('connected to mongodb :)'))
	.catch(error => console.log(error))

// APP SETUP
app.use(bodyParser.json())
app.use(cors())
router(app)

app.listen(process.env.PORT, () => {
	console.log(`'server running on port' ${process.env.PORT}`)
})

// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
//
// require("dotenv").config();
// const MONGOURI = process.env.DATABASE;
//
// const app = express();
//
// mongoose
//   .connect(MONGOURI)
//   .then(() => console.log("connected to mongodb :)"))
//   .catch(error => console.log(error));
//
// const { User } = require("./models/user");
//
// app.use(bodyParser.json());
//
// app.post("/user/signup", (req, res) => {
//   const user = new User({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//     avatar: req.body.avatar
//   }).save((err, response) => {
//     if (err) res.status(400).send(err);
//     res.status(200).send(response);
//   });
// });
//
// app.post("/user/login", (req, res) => {
//   User.findOne({ email: req.body.email }, (err, user) => {
//     if (!user) res.json({ message: "user not found" });
//     //compare if user email exists
//     user.comparePassword(req.body.password, (err, isMatch) => {
//       if (err) throw err;
//       if (!isMatch)
//         return res.status(400).json({
//           message: "Incorrect Password"
//         });
//       res.status(200).send("Logged in successfully");
//     });
//   });
// });
// //middleware
//
// // app.get("/controllers/root.js", (req, res) => {
// //   res.send("Welcome to Curate API");
// // });
//
// //routes: users
// // app.get("/users", require("./controllers/getUsers"));
// // app.get("/users:id", require("./controllers/getUsers"));
// // app.post("/users", require("./controllers/postUsers"));
// // app.patch("/users/:id", (req, res) => {
// //   console.log(req.params);
// // });
// // app.delete("/users/:id", (req, res) => {
// //   console.log(req.params);
// // });
// //
// app.listen(process.env.PORT, () => {
//   console.log(`'server running on port' ${process.env.PORT}`);
// });
//
// module.exports = app;
