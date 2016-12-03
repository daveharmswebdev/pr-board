'use strict'

const passport = require('passport')
const { Strategy } = require('passport-local')
const { compare } = require('bcrypt')
const { knexConfig } = require('../config')
const knex = require('knex')(knexConfig)

passport.serializeUser((user, done) => {
	return done(null, user.profile_id)
})

passport.deserializeUser((id, done) => {
	knex('profile')
		.where({profile_id: id})
		.select()
		.then(user => {
			[user] = user
			console.log('deserialized user', user)
			if (!user) return done(null,false)
			return done(null, user)
		})
})

passport.use(new Strategy({
		usernameField: 'user_name',
		passwordField: 'password'
	},
	function(user_name, password, done) {
		knex('profile')
			.where({user_name: user_name})
			.then((user, err) => {
				user = user[0]
				if (err) return done(err)
				if (!user) {
					return done(null, false, {message: 'Incorrect username.'})
				}
				compare(password, user.password, (err, matches) => {
					if (err) return done(err)
					if (!matches) {
						return done(null, false, {message: 'Incorrect password'})
					} else {
						return done(null, user)
					}
				})
			})
	}
))