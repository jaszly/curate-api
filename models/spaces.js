const mongoose = require('../database')

const Spaces = mongoose.model('spaces', {
	title: {
		type: String,
		required: true
	},

	description: {
		type: String,
		required: false
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
		type: [String],
		required: false
	},

	features: [{ type: mongoose.Schema.Types.ObjectId, ref: 'features' }]
})

module.exports = Spaces
