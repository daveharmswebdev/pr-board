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
			.get('/api/profile')
			.end((err,res) => {
				expect(res.status).to.equal(200)
				done()
			})
	})
	it('should respond wdith JSON to `post /profile`', done => {
		request(app)
			.post('/api/profile')
			.send({"user":"test"})
			.expect("the post was successful")
			.expect(200, done)
	})
})