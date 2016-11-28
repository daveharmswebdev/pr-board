'use strict'

const request = require('supertest')
const {expect} = require('chai')
const app = require('../server/server')

describe('test suite', () => {
	it('true should equal true', () => {
		expect(true).to.equal(true)
	})
})

describe('hello world test', () => {
	it('should respond with JSON to `get /`', done => {
		request(app)
			.get('/')
			.expect('Content-Type', /json/)
			.expect(200, done)
	})
})