const mongoose = require('../database')

const Cities = mongoose.model('cities', {
	name: {
		type: String,
		required: true
	},

	state: {
		type: String,
		required: false
	},

	img: {
		type: String,
		required: false
	}
})

module.exports = Cities
