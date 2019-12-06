require('../database')
const Users = require('../models/users.js')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	User.find({})
		.select()
		.then(data => res.send(data))
		.catch(error => res.send(error))
}

module.exports = (req, res) => {
	//convert token to email password
	let token = req.headers.authorization.split(' ')[1] //split from 'bearers'
	console.log('headerz', req.headers)
	let user = jwt.verify(token, process.env.SECRET)

	User.findOne({ email: user.email })
		.then(dbuser => {
			if (!dbuser) {
				res.send('token not valid')
			} else {
				//authenticate
				if (user.password == dbUser.password) {
					dbUser = dbUser.toObject()
					delete dbUser.password
					res.send({ dbUser })
				} else {
					res.send('token not valid')
				}
			}
		})

		.catch(err => {
			res.send(err)
		})
}
