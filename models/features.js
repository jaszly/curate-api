require('../database')
const mongoose = require('../database')

const Features = mongoose.model('features', {
	description: {
		type: String,
		required: false
	},
	icon: {
		type: String,
		required: false
	},

	displayText: {
		type: String,
		required: false
	}
})

module.exports = Features
