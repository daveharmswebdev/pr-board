'use strict'

const request = require('supertest')
const app = require('../server/server')

describe('personal records `/api/precord` spec', () => {
	it('it should respond with JSON to `get /api/precord`', done => {
		request(app)
			.get('/api/precord')
			.expect('Content-Type', /json/)
			.expect(200, done)
	})
})