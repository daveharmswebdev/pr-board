'use strict'

const R = require('ramda')

const weight = R.prop('weight')
const invalid = R.ifElse(
	R.both(R.is(Number), R.gt(R.__, 0)),
	R.always([]),
	R.always(['numeric weight value greater than zero must be entered'])
)

module.exports = R.compose(invalid, weight)