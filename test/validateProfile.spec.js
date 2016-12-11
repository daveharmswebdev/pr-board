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
			"height":"",
			"weight":"",
			"password":"",
			"compare":""
		}
		expect(validateProfile(profile)).to.include('compare value must be entered')
	})
})