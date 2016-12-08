'use strict'

const R = require('ramda')

const compare = R.prop('compare')
const invalid = R.ifElse(
	R.either(R.isNil, R.isEmpty),
	R.always(['compare value must be entered']),
	R.always([])
)

module.exports = R.compose(invalid, compare)