'use strict'

const R = require('ramda')

const weight = R.prop('weight')
const invalid = R.ifElse(
	R.either(R.isNil, R.isEmpty),
	R.always(['weight value must be entered']),
	R.always([])
)

module.exports = R.compose(invalid, weight)