'use strict'

const { expect } = require('chai')
const validateProfile = require('../lib/validateProfile')

describe('validate Profile', () => {
	it('with an empty profile it will produce errors', () => {
		const profile = {
			"user_name":"",
			"last_name":"",
			"first_name":"",
			"middle_initial":"",
			"height":"a",
			"weight":"",
			"password":"",
			"compare":""
		}

		const expected = validateProfile(profile)

		expect(expected).to.include('compare value must be entered')
		expect(expected).to.include('password invalid')
		expect(expected).to.include('numeric height value greater than zero must be entered')
		expect(expected).to.include('weight value must be entered')
		expect(expected).to.include('first name required')
	})

	it('proper profile it will produce no error message', () => {
		const profile = {
			"user_name":"dave",
			"last_name":"Dave",
			"first_name":"Harms",
			"middle_initial":"D",
			"height":68,
			"weight":200,
			"password":"what",
			"compare":"what"
		}

		const expected = validateProfile(profile)

		expect(expected).to.deep.equal([])
	})
})