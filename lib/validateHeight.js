'use strict'

const R = require('ramda')

const height = R.prop('height')
const invalid = R.ifElse(
	R.either(R.isNil, R.isEmpty),
	R.always(['height value must be entered']),
	R.always([])
)

module.exports = R.compose(invalid, height)