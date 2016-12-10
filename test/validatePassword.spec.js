'use strict'

const {expect} = require('chai')
const validatePassword = require('../lib/validatePassword')

describe('validation test and hash spec', () => {

	it('if no password expect error message', () => {
		const profile = {
			"user_name":"donald",
			"last_name":"Duck",
			"first_name":"Donald",
			"middle_initial":"D",
			"height":"72",
			"weight":"200",
			"password":"",
			"compare":"password"
		}

		const actual = validatePassword(profile)
		expect(actual).to.deep.equal(['password invalid'])
	})

})