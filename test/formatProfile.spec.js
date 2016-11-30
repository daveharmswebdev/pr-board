'use strict'

const { formatProfile } = require('../model/profile')
const { expect } = require('chai')

describe('formatProfile method from model/profile', () => {
	const profile = { 
		attributes: {
			profile_id: 1,
			user_name: 'huey',
			last_name: 'Duck',
			first_name: 'Huey',
			middle_initial: null,
			height: 70,
			weight: 155,
			password: 'password'
		}
	}
	const expected = {
		profile_id: 1,
		user_name: 'huey',
		full_name: 'Huey Duck',
		height_string: '5\' 10"',
		weight: 155,
		password: 'password'
	}
	it('should be able to format a raw profile', () => {
		expect(formatProfile(profile)).to.deep.equal(expected)
	})
})