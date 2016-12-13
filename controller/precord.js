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
	knex('personal_records')
		.join('lifts', 'personal_records.lift_id', '=', 'lifts.lift_id')
		.join('profile', 'personal_records.profile_id', '=', 'profile.profile_id')
		.select('user_name', 'lift_name', 'personal_records.weight', 'pr_date')
		.where('personal_records.profile_id', '=', req.params.profile_id)
		.then(records => {
			res.json(records)
		})
		.catch(error => {
			next(error)
		})
}

module.exports.create = (req, res, next) => {
	knex('personal_records')
		.insert(req.body)
		.returning('pr_id')
		.then(id => {
			console.log('id', id)
			knex('personal_records')
				.join('lifts', 'personal_records.lift_id','=', 'lifts.lift_id')
				.where('personal_records.pr_id', '=', Number(id))
				.select()
				.then(record => {
					console.log('record', record)
					res.json(record[0])
				})
				.catch(error => {
					console.log('big fat error', error)
					next(error)
				})
		})
		.catch(error => next(error))
}










