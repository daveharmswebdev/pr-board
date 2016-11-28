'use strict'

const request = require('supertest')
const app = require('../server/server')

describe('profile route spec', () => {
	it('should respond with JSON to `get /profile`', done => {
		request(app)
			.get('/profile')
			.expect('Content-Type', /json/)
			.expect(200, done)
	})
	it('should respond wdith JSON to `post /profile`', done => {
		request(app)
			.post('/profile')
			.send({"user":"test"})
			.expect("the post was successful")
			.expect(200, done)
	})
})