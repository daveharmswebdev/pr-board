'use strict'

const R = require('ramda')

// library functions
const nameCheck = require('./nameCheck')
const numericHeight = require('./numericHeight')
const numericWeight = require('./numericWeight')
const passMatchesCompare = require('./passMatchesCompare')
const validateCompare = require('./validateCompare')
const validateHeight = require('./validateHeight')
const validatePassword = require('./validatePassword')
const validateWeight = require('./validateWeight')

const checkList = [
	nameCheck,
	numericHeight,
	numericWeight,
	passMatchesCompare,
	validateCompare,
	validateHeight,
	validatePassword,
	validateWeight
]

module.exports = profile => {
	const errorMessages = []
	checkList.forEach(item => errorMessages.push(item(profile)))
	return R.flatten(errorMessages)
}
