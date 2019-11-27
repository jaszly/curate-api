const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true
	},
	password: {
		type: String,
		required: true,
		minlength: 6,
		trim: true
	}
})

//encrypt pwd
userSchema.pre('save', next => {
	const user = this

	bcrypt.genSalt(10, (err, salt) => {
		if (err) return next(err)

		bcrypt.hash(user.password, salt, null, function(err, hash) {
			if (err) return next(err)
			user.password = hash
			next()
		})
	})
})

//compare pwd method
userSchema.methods.comparePassword = function(givenPassword, checkPassword) {
	bcrypt.compare(givenPassword, this.password, (err, isMatch) => {
		if (err) return checkPassword(err)
		checkPassword(null, isMatch)
	})
}

const User = mongoose.model('User', userSchema)
module.exports = User
