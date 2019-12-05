const User = require('../models/users.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	console.log(req.body)
	req.body.password = bcrypt.hashSync(req.body.password, 10)
	console.log(req.body.password)
	// assign password to this encrypted version of this password using bcrypt

	User.create(req.body)
		.then(user => {
			let token = jwt.sign(user.toObject(), process.env.SECRET)
			let data = jwt.verify(token, 'idgafwabgtsam')
			res.send({ token })
			//token that we want to sign th
		})
		.catch(error => res.send(error))
	// 			encrypt =
}
