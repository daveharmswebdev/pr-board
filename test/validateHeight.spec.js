'use strict'

const {expect} = require('chai')
const validateHeight = require('../lib/validateHeight')
const numericHeight = require('../lib/numericHeight')

describe('validates height', () => {
	it('if no height value expect error message', () => {
		const profile = {
			"user_name":"donald",
			"last_name":"Duck",
			"first_name":"Donald",
			"middle_initial":"D",
			"height":"",
			"weight":"200",
			"password":"password",
			"compare":"password"
		}

		const actual = validateHeight(profile)
		expect(actual).to.deep.equal(['height value must be entered'])		
	})

	it('if non-numeric height value or zero expect error message', () => {
		const profile = {
			"user_name":"donald",
			"last_name":"Duck",
			"first_name":"Donald",
			"middle_initial":"D",
			"height": 0,
			"weight":"200",
			"password":"password",
			"compare":"password"
		}

		const actual = numericHeight(profile)
		expect(actual).to.deep.equal(['numeric height value greater than zero must be entered'])			
	})
})