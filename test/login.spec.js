'use strict'

const request = require('supertest')
const {expect} = require('chai')
const app = require('../server/server')
const {knexConfig} = require('../config')
const knex = require('knex')(knexConfig)

describe('login route spec', () => {

	beforeEach( done => {
    knex.migrate.rollback()
    .then(() => {
      knex.migrate.latest()
      .then(() => {
        return knex.seed.run()
        .then(() => {
          done()
        })
      })
    })
  })

  afterEach(function(done) {
    knex.migrate.rollback()
    .then(function() {
      done();
    });
  });

	it('should respond with JSON to `get /api/login`', done => {
		request(app)
			.get('/api/login')
			.expect('Content-Type', /json/)
			.expect(200, done)
	})
	it('should respond with JSON to `post /api/login`', done => {
		request(app)
			.post('/api/login')
			.send({
				user_name:"dewey",
				password:"password"
			})
			.expect('Content-Type', /json/)
			.expect(200, done)
	})
})