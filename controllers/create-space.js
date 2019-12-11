require('../database')
const Spaces = require('../models/spaces.js')
const jwt = require('jsonwebtoken')

//
module.exports = (req, res) => {
	console.log('body', req.body)
	console.log('headers', req.headers.authorization)
	//check token in headers
	if (req.headers.authorization) {
		// 	//check that token is valid
		let valid = req.headers.authorization.split(' ')[1] //split from 'bearers'
		console.log('headurss', req.headers)

		//valid._id
		console.log(req.body) //terminal should return name, host
		if (valid) {
			req.body.user = valid._id
			Spaces.create(req.body)
				.then(spaceDocument => {
					res.send({ spaceDocument })
				})
				.catch(error => {
					res.send(error)
				})
		} else {
			res.send({
				error: 'Not Authorized'
			})
		}
	} else {
		res.send({
			error: 'Not Authorized'
		})
	}
}
