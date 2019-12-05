const mongoose = require('../database')

const Features = mongoose.model('features', {
	feature: {
		type: String,
		required: true
	},
	icon: {
		type: String,
		required: true
	}
})

module.exports = Features
