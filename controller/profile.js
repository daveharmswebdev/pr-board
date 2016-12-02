'use strict'

const Profile = require('../model/profile')
const validate = require('../lib/validate')
const {omit} = require('ramda')

module.exports.new = (req, res) => {
	res.json({"message":"new profile"})
}

module.exports.show = (req, res, next) => {

	new Profile({'profile_id': req.params.profileId})
		.fetch()
		.then(profile => {
			res.json(Profile.formatProfile(profile))
		})
		.catch(error => next(error))
}

module.exports.create = (req, res, next) => {

	const errMessages = validate(req.body).error

	if (errMessages.length === 0) {
		const newProfile = omit(['error','compare'], req.body)
		Profile.forge(newProfile)
			.save()
			.then(profile => {
				res.json(Profile.formatProfile(profile))
			})
			.catch(error => next(error))
	} else {
		next(errMessages)
	}

}