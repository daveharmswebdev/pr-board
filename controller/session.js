'use strict'

const passport = require('passport')

module.exports.new = (req, res) => {
	res.json({"message":"test"})
}

module.exports.create = (req, res, next) => {
	passport.authenticate('local', (err, user, info) => {
		if (err) {return next(err)}
		if (!user) {return next('failed authentication')}
		req.logIn(user, err => {
			if (err) {return next(err)}
			return res.status(200).json(user)
		})
	})(req, res, next)
}