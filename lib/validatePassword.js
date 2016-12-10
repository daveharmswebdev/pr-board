'use strict'

const R = require('ramda')

const password = R.prop('password')
const invalid = R.ifElse(
	R.either(R.isNil, R.isEmpty),
	R.always(['password invalid']),
	R.always([])
)

module.exports = R.compose(invalid, password)