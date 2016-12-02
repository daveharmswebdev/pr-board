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

describe('route not found test', () => {
	it('should respond with 404 with `get /api/nowhere`', done => {
		request(app)
			.get('/api/nowhere')
			.expect('Content-Type', /json/)
			.expect(404)
			.end((err, res) => {
				expect(res.body).to.have.property('message')
				expect(res.body.message).to.equal('route not found')
				done()
			})
	})
})

describe('error handling', () => {
	it('should give a proper error message', done => {
		request(app)
			.get('/api/profile/1')
			.expect('Content-Type', /json/)
			.expect(500)
			.end((err, res) => {
				expect(res.body).to.have.property('message')
				expect(res.body.message).to.equal('internal error')
				done()
			})
	})
})