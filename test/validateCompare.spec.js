'use strict'

const {expect} = require('chai')
const validateCompare = require('../lib/validateCompare')

describe('validates compare', () => {
	it('if no compare value expect error message', () => {
		const profile = {
			"user_name":"donald",
			"last_name":"Duck",
			"first_name":"Donald",
			"middle_initial":"D",
			"height":"72",
			"weight":"200",
			"password":"password",
			"compare":""
		}

		const actual = validateCompare(profile)
		expect(actual).to.deep.equal(['compare value must be entered'])		
	})
})