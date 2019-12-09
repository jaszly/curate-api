const mongoose = require('../database')

const Features = mongoose.model('features', {
	feature: {
		type: String,
		required: false
	},
	icon: {
		type: String,
		required: false
	}
})

module.exports = Features
