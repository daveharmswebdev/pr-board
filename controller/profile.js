'use strict'

const {knexConfig} = require('../config')
const knex = require('knex')(knexConfig)

module.exports.new = (req, res) => {
	res.json({"message":"new profile"})
}

module.exports.show = (req, res, next) => {
	console.log('profileId', req.params.profileId)
	knex('profile')
		.select()
		.where('profile_id', req.params.profileId)
		.then(profile => {
			console.log('profile', profile[0])
			res.json(profile[0])
		})
		.catch(error => next(error))
}

module.exports.create = (req, res) => {
	res.send('the post was successful')
}