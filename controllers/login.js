const Users = require('../models/users.js')
const bcrypt = require('bcrypt')

module.exports = (req, res) => {
	//find a user with the email from the request, if no user is found, respond with an error message
	Users.findOne({ email: req.body.email })
		.then(user => {
			if (!user) {
				res.send('Email or password is incorrect')
			}

			let match = bcrypt.compareSync(req.body.password, user.password)
			//comparing incoming one with the user data findOne
			if (match) {
				res.send('You are logged in')
			} else {
				res.send('Email or password is incorrect')
			}
		})
		.catch(error => res.send(error))
}
