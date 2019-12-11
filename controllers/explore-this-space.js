require('../database')
const Spaces = require('../models/spaces.js')

module.exports = (req, res) => {
	Spaces.findById(req.params.id)
		.populate('features host')
		.lean()
		.then(spaces => {
			console.log({ spaces })
			res.send(spaces)
		})
		.catch(error => {
			console.log({ error })
			res.send(error)
		})
}
