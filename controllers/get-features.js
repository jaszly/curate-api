require('../database')
const Features = require('../models/features.js')

module.exports = (req, res) => {
	Features.find({})
		.then(features => {
			console.log({ features })
			res.send(features)
		})
		.catch(error => {
			console.log({ error })
			res.send(error)
		})
}
