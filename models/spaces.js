const mongoose = require('../database')

const Spaces = mongoose.model('spaces', {
	title: {
		type: String,
		required: true
	},
	neighborhood: {
		type: String,
		required: true
	},

	city: {
		type: String,
		required: true
	},

	price: {
		type: Number,
		required: true
	},

	images: {
		type: String,
		required: false
	}

module.exports = Spaces
