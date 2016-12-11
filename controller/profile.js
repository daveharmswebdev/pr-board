'use strict'

const Profile = require('../model/profile')
const validateProfile = require('../lib/validateProfile')
const R = require('ramda')
const {hash} = require('bcrypt')

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
	let newProfile = req.body
	const errMessages = validateProfile(newProfile)
	if (errMessages.length === 0) {
		newProfile = R.omit('compare', newProfile)
		new Promise((resolve, reject) => {
			hash(newProfile.password, 15, (err, hash) => {
				if (err) {
					reject(err)
				} else {
					resolve(hash)
				}
			})
		})
		.then(hash => {
			newProfile.password = hash
			Profile.forge(newProfile)
				.save()
				.then(profile => {
					res.json(Profile.formatProfile(profile))
				})
				.catch(error => next(error))
		})
		.catch(error => {
			next(error)}
		)
	} else {
		next(errMessages)
	}

}