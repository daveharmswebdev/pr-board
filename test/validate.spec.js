'use strict'

const {expect} = require('chai')
const validate = require('../lib/validate')

describe('validate and hash spec', () => {

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

		expect(validate(profile).error).to.include('password required')
	})

	it('if no compare expect error message', () => {
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

		expect(validate(profile).error).to.include('compare password required')
	})

	it('if compare and password do not match expect message', () => {
		const profile = {
			"user_name":"donald",
			"last_name":"Duck",
			"first_name":"Donald",
			"middle_initial":"D",
			"height":"72",
			"weight":"200",
			"password":"password",
			"compare":"pass"
		}

		expect(validate(profile).error).to.include('password and comparison password do not match')	
	})

	it('if no user_name expect error message', () => {
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

		expect(validate(profile).error).to.include('user name required')
	})

	it('if no last_name expect error message', () => {
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

		expect(validate(profile).error).to.include('last name required')
	})

	it('if no first_name expect error message', () => {
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

		expect(validate(profile).error).to.include('first name required')
	})

	it('if no height expect error message', () => {
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

		expect(validate(profile).error).to.include('height value required')
	})

	it('if no weight expect error message', () => {
		const profile = {
			"user_name":"donald",
			"last_name":"Duck",
			"first_name":"Donald",
			"middle_initial":"D",
			"height":"72",
			"weight":"",
			"password":"password",
			"compare":"password"
		}

		expect(validate(profile).error).to.include('weight value required')
	})

	it('expect no error message if submission is complete', () => {
		const profile = {
			"user_name":"donald",
			"last_name":"Duck",
			"first_name":"Donald",
			"middle_initial":"D",
			"height":"72",
			"weight":"150",
			"password":"password",
			"compare":"password"
		}

		expect(validate(profile).error).to.deep.equal([])
	})

	it('expect two error messages if no last_name and no first_name', () => {
		const profile = {
			"user_name":"donald",
			"last_name":"",
			"first_name":"",
			"middle_initial":"D",
			"height":"72",
			"weight":"150",
			"password":"password",
			"compare":"password"
		}

		expect(validate(profile).error).to.deep.equal(['last name required','first name required'])
	})

	it('expect four error messages if no last_name, first_name, height and weight', () => {
		const profile = {
			"user_name":"donald",
			"last_name":"",
			"first_name":"",
			"middle_initial":"D",
			"height":"",
			"weight":"",
			"password":"password",
			"compare":"password"
		}

		expect(validate(profile).error).to.deep.equal([
			'last name required',
			'first name required',
			'height value required',
			'weight value required'
		])

	})

})