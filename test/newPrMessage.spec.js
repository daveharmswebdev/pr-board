'use strict'

const newPrMessage = require('../lib/newPrMessage')
const {expect} = require('chai')

describe('New PR Message', () => {
	it('should be able to create a new pr message from a post', () => {
		const post = {
	    pr_id: 4,
	    profile_id: 1,
	    lift_id: 0,
	    weight: 315,
	    pr_date: '2016-12-13T20:36:20.468Z',
	    lift_name: 'Back Squat' 
	  }

	  const expected = {message:'new back squat pr of 315 pounds, posted 12/13/2016, 2:36:20 PM'}

		expect(newPrMessage(post)).to.deep.equal(expected)
	})
})