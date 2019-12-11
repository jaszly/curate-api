require('../database')
const Cities = require('../models/cities.js')

module.exports = (req, res) => {
	Cities.find({})
		.then(cities => {
			cities.map(city => {
				return city
			})
			res.send(cities)
		})
		.catch(error => {
			console.log({ error })
			res.send(error)
		})
}
