'use strict'

const request = require('supertest')
const {expect} = require('chai')
const app = require('../server/server')
const {knexConfig} = require('../config')
const knex = require('knex')(knexConfig)

describe('profile route spec', () => {

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

	it('should respond with JSON to `get /profile`', done => {
		request(app)
			.get('/api/profile/1')
			.expect('Content-Type', /json/)
			.end((err, res) => {
				expect(res.body).to.have.property('profile_id')
				expect(res.body.profile_id).to.equal(1)
				done()
			})
	})
	it('should respond with JSON to `post /profile`', done => {
		request(app)
			.post('/api/profile')
			.send({"user":"test"})
			.expect("the post was successful")
			.expect(200, done)
	})
})