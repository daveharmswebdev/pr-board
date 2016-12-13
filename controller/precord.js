'use strict'

const { knexConfig } = require('../config')
const knex = require('knex')(knexConfig)

module.exports.index = (req, res, next) => {
	knex('personal_records')
		.join('lifts', 'personal_records.lift_id', '=', 'lifts.lift_id')
		.join('profile', 'personal_records.profile_id', '=', 'profile.profile_id')
		.select('user_name', 'lift_name', 'personal_records.weight', 'pr_date')
		.then(records => {
			res.json(records)
		})
		.catch(error => {
			next(error)
		})
}

module.exports.indexByProfileId = (req, res, next) => {
	console.log('req.body', req.params)
	knex('personal_records')
		.join('lifts', 'personal_records.lift_id', '=', 'lifts.lift_id')
		.join('profile', 'personal_records.profile_id', '=', 'profile.profile_id')
		.select('user_name', 'lift_name', 'personal_records.weight', 'pr_date')
		.where('personal_records.profile_id', '=', req.params.profile_id)
		.then(records => {
			console.log('records', records)
			res.json(records)
		})
		.catch(error => {
			console.log('error', error)
			next(error)
		})
}