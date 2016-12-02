'use strict'

const {expect} = require('chai')
const validateHash = require('../lib/validateHash')

describe('validate and hash spec', () => {


	it('if no password should return false', () => {
		const profile = {
			"user_name":"donald",
			"last_name":"Duck",
			"first_name":"Donald",
			"middle_initial":"D",
			"height":"72",
			"weight":"200",
			"password":"awesome"
		}

		expect(validateHash(profile)).to.equal(false)
	})
})