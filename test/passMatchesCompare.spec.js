'use strict'

const { expect } = require('chai')
const passMatchesCompare = require('../lib/passMatchesCompare')

describe('password matches compare', () => {
	it('if password and compare do not match there is an error', () => {
		const profile = {
			"user_name":"donald",
			"last_name":"Duck",
			"first_name":"Donald",
			"middle_initial":"D",
			"height": 72,
			"weight": 200,
			"password":"pass",
			"compare":"password"			
		}

		expect(passMatchesCompare(profile)).to.deep.equal(['password and compare do not match'])
	})

	it('if password and compare match no error', () => {
		const profile = {
			"user_name":"donald",
			"last_name":"Duck",
			"first_name":"Donald",
			"middle_initial":"D",
			"height": 72,
			"weight": 200,
			"password":"password",
			"compare":"password"			
		}

		expect(passMatchesCompare(profile)).to.deep.equal([])		
	})
})
