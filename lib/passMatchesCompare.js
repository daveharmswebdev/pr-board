'use strict'

const R = require('ramda')

const match = profile => {
	const password = R.prop('password', profile)
	const compare = R.prop('compare', profile)
	const checkForMatch = R.ifElse(
			R.equals,
			R.always([]),
			R.always(['password and compare do not match'])
		)

	return checkForMatch(password)(compare)
}

module.exports = match