'use strict'

const {expect} = require('chai')
const validateWeight = require('../lib/validateWeight')
const numericWeight = require('../lib/numericWeight')

describe('validates compare', () => {
	it('if no compare value expect error message', () => {
		const profile = {
			"user_name":"donald",
			"last_name":"Duck",
			"first_name":"Donald",
			"middle_initial":"D",
			"height": 72,
			"weight": "",
			"password":"password",
			"compare":"password"
		}

		const actual = validateWeight(profile)
		expect(actual).to.deep.equal(['weight value must be entered'])		
	})

	it('if no weight value expect error message', () => {
		const profile = {
			"user_name":"donald",
			"last_name":"Duck",
			"first_name":"Donald",
			"middle_initial":"D",
			"height": 72,
			"weight": 0,
			"password":"password",
			"compare":"password"
		}

		const actual = numericWeight(profile)
		expect(actual).to.deep.equal(['numeric weight value greater than zero must be entered'])			
	})
})