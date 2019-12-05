// const Auth = require('./controllers/auth')
// const passportService = require('./services/passport')
// const passport = require('passport')
//
// //Checking Authentication status before visiting aparticular route
// const requireAuth = passport.authenticate('jwt', { session: false })
// const requireLogin = passport.authenticate('local', { session: false })
//
// module.exports = app => {
// 	app.get('/', requireAuth, (req, res) => {
// 		res.send({ Working: 'Yes' })
// 	})
// 	app.post('/login', requireLogin, Auth.login)
// 	app.post('/signup', Auth.signup)
// }
