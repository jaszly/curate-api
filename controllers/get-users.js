require('../database')
const Users = require('../models/users.js')

module.exports = (req, res) => {
	Users.find({})
		.select()
		.then(data => {
			res.send({ data })
		})
		.catch(error => {
			res.send({ error })
		})
}
