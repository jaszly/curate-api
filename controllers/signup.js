const User = require('../models/users.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	console.log(req.body)
	req.body.password = bcrypt.hashSync(req.body.password, 10)
	// assign password to this encrypted version of this password using bcrypt
	// TODO: make sure users don't sign up with exisitng email
	User.create(req.body)
		.then(user => {
			let token = jwt.sign(user.toObject(), process.env.SECRET)

			res.send({ token: token })
		})
		.catch(error => res.send(error))
	// 			encrypt =
}
//
// User.findOne({ email: req.body.email })
// 	.select()
// 	.then(user => {
// 		if (user) {
// 			// return res.send("An account with this email has already been created");
// 			return res
// 				.status(400)
// 				.json({ email: 'An account already exists under this email' })
// 		} else {
// 			const newUser = new User({
// 				name: req.body.name,
// 				email: req.body.email,
// 				password: req.body.password
// 			})
