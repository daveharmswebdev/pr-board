'use strict'

const {pipe} = require('ramda')

const hasPassword = profile => {
	if (profile.password !== null && profile.password.length) {
		profile.error = []
	} else {
		profile.error = ['password required']
	}
	return profile
}

const hasCompare = profile => {
	if (profile.compare === null || profile.compare.length === 0) {
		profile.error.push('compare password required')
	}
	return profile
}

const compareMatches = profile => {
	if (profile.compare !== profile.password) {
		profile.error.push('password and comparison password do not match')
	}
	return profile
}

const hasUserName = profile => {
	if (profile.user_name === null || profile.user_name.length === 0) {
		profile.error.push('user name required')
	}
	return profile
}

const hasLastName = profile => {
	if (profile.last_name === null || profile.last_name.length === 0) {
		profile.error.push('last name required')
	}
	return profile
}

const hasFirstName = profile => {
	if (profile.first_name === null || profile.first_name.length === 0) {
		profile.error.push('first name required')
	}
	return profile
}

const hasHeight = profile => {
	if (profile.height === null || profile.height.length === 0) {
		profile.error.push('height value required')
	}
	return profile
}

const hasWeight = profile => {
	if (profile.weight === null || profile.weight.length === 0) {
		profile.error.push('weight value required')
	}
	return profile
}

const validate = pipe(
	hasPassword, 
	hasCompare, 
	compareMatches, 
	hasUserName,
	hasLastName,
	hasFirstName,
	hasHeight,
	hasWeight
)

module.exports = validate