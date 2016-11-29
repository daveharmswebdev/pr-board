'use strict'

const Profile = require('../model/profile')

module.exports.new = (req, res) => {
	res.json({"message":"new profile"})
}

module.exports.show = (req, res, next) => {

	new Profile({'profile_id': req.params.profileId})
		.fetch()
		.then(profile => {
			res.json(profile)
		})
		.catch(error => next(error))
}

module.exports.create = (req, res, next) => {

	Profile.forge(req.body)
		.save()
		.then(model => {
			model.attributes.height = parseInt(model.attributes.height)
			model.attributes.weight = parseInt(model.attributes.weight)
			res.json(model)
		})
		.catch(error => next(error))
}