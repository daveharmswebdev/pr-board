'use strict'

const {knexConfig} = require('../config')
const knex = require('knex')(knexConfig)

module.exports.new = (req, res) => {
	res.json({"message":"new profile"})
}

module.exports.show = (req, res, next) => {
	knex('profile')
		.select()
		.where('profile_id', req.params.profileId)
		.then(profile => {
			res.json(profile[0])
		})
		.catch(error => next(error))
}

module.exports.create = (req, res, next) => {
	knex('profile')
		.insert(req.body)
		.returning('profile_id')
		.then(id => {
			knex('profile')
				.select()
				.where('profile_id', id[0])
				.then(profile => {
					res.json(profile[0])
				})
		})
		.catch(error => next(error))
}