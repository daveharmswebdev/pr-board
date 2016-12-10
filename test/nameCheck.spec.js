'use strict'

const nameCheck = require('../lib/nameCheck')
const { expect } = require('chai')

describe('name check suite', () => {
	it('no last_name will produce an error', () => {
		const profile = {
				"user_name":"donald",
				"last_name":"",
				"first_name":"Donald",
				"middle_initial":"D",
				"height":"72",
				"weight":"200",
				"password":"password",
				"compare":"password"
		}
		expect(nameCheck(profile)).to.deep.equal(['last name required'])
	})
	it('no first_name will produce an error', () => {
		const profile = {
				"user_name":"donald",
				"last_name":"Duck",
				"first_name":"",
				"middle_initial":"D",
				"height":"72",
				"weight":"200",
				"password":"password",
				"compare":"password"
		}
		expect(nameCheck(profile)).to.deep.equal(['first name required'])
	})
	it('no user_name will produce an error', () => {
		const profile = {
				"user_name":"",
				"last_name":"Duck",
				"first_name":"Donald",
				"middle_initial":"D",
				"height":"72",
				"weight":"200",
				"password":"password",
				"compare":"password"
		}
		expect(nameCheck(profile)).to.deep.equal(['user name required'])
	})
	it('will produce no error with proper profile', () => {
		const profile = {
				"user_name":"donald",
				"last_name":"Duck",
				"first_name":"Donald",
				"middle_initial":"D",
				"height":"72",
				"weight":"200",
				"password":"password",
				"compare":"password"
		}
		expect(nameCheck(profile)).to.deep.equal([])		
	})
})