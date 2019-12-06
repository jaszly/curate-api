const User = require('../models/users')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	//the token is set to this specific str of code
	let token = req.headers.authorization.split(' ')[1] //split from 'bearers'
	let verifiedUser = jwt.verify(token, `${process.env.SECRET}`)

	User.findOne({ email: verifiedUser.email })
		.then(user => {
			if (!verifiedUser) {
				res.send('token not valid')
			} else {
				res.send(user)
			}
		})

		.catch(err => {
			res.send(err)
		})
}

// const secret = 'irdgaf'
// // const config = require('../config')
//
// //create Token for new Users
// const userToken = user => {
// 	const timestamp = new Date().getTime()
// 	return jwt.encode(secret)
// }
//
// //providing token on successfull login
// exports.login = (req, res, next) => {
// 	// User has already have their email + password
// 	// we need to provide them a token
// 	res.send({ token: userToken(req.user) })
// }
//
// //SignUp User
// exports.signup = (req, res, next) => {
// 	const name = req.body.name
// 	const email = req.body.email
// 	const password = req.body.password
//
// 	//Validation
// 	if (!name || !email || !password) {
// 		return res.send({ error: 'all fields required' })
// 	}
//
// 	// check if email exists
// 	User.findOne({ email }, (err, existingUser) => {
// 		if (err) return next(err)
//
// 		if (existingUser) {
// 			return res.send({ error: 'an account with this email already exists' })
// 		}
//
// 		//else add to db
// 		const user = new User({
// 			name,
// 			email,
// 			password
// 		})
//
// 		user.save(err => {
// 			if (err) return next(err)
// 			res.json({ token: userToken(user) })
// 		})
// 	})
// }
