const passport = require('passport')
const User = require('../models/User')
// const config = require('../config')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local')

//local strategy for loging in user
const localOptions = { usernameField: 'email' }
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
	// Verify the email and password, call done with user
	// if it is correct email and password
	//otherwise, call done with false
	User.findOne({ email }, (err, user) => {
		if (err) return done(err)
		if (!user) return done(null, false)

		//Compare Passwords
		user.comparePassword(password, (err, isMatch) => {
			if (err) return done(err)
			if (!isMatch) return done(null, false)

			return done(null, user)
		})
	})
})

//JWT STRATEGY To CHECK AUTHORIZATION B4 VISITING A PARTICULAR ROUTE
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: 'secret'
}

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
	//See if user Id in thepayload is on our databse
	// If it does call 'done' with that user
	// Otherwise, call done without a user object

	User.findById(payload.sub, (err, user) => {
		if (err) return done(err, false)
		if (user) {
			done(null, user)
		} else {
			done(null, false)
		}
	})
})

// TEll PASSPORT TO USE THIS STRATEGY
passport.use(jwtLogin)
passport.use(localLogin)
