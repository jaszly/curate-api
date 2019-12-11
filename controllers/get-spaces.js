require('../database')
const Spaces = require('../models/spaces.js')

module.exports = (req, res) => {
	Spaces.find({})
		.populate('host features')
		.lean()
		.then(spaces => {
			spaces.map(space => {
				space.image = space.images[0]
				delete space.images
				return space
			})
			res.send(spaces)
		})
		.catch(error => res.send(error))
}
