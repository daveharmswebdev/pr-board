'use strict'

const R = require('ramda')

const height = R.prop('height')
const invalid = R.ifElse(
	R.both(R.is(Number), R.gt(R.__, 0)),
	R.always([]),
	R.always(['numeric height value greater than zero must be entered'])
)

module.exports = R.compose(invalid, height)