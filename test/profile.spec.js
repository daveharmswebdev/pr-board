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
				expect(res.body).to.have.property('user_name')
				expect(res.body.user_name).to.equal('huey')
				expect(res.body).to.have.property('full_name')
				expect(res.body.full_name).to.equal('Huey A. Duck')
				expect(res.body).to.have.property('height_string')
				expect(res.body.height_string).to.equal('5\' 10"')
				expect(res.body).to.have.property('weight')
				expect(res.body.weight).to.equal(155)
				expect(res.body).to.have.property('password')
				expect(res.body.password).to.equal('password')
				done()
			})
	})
	it('should respond with JSON to `post /profile`', done => {
		request(app)
			.post('/api/profile')
			.send({
				"user_name":"donald",
				"last_name":"Duck",
				"first_name":"Donald",
				"middle_initial":"D",
				"height":"72",
				"weight":"200",
				"password":"123",
				"compare":"123"
			})
			.end((err,res) => {
				expect(res.body).to.have.property('profile_id')
				expect(res.body.profile_id).to.equal(4)
				expect(res.body).to.have.property('user_name')
				expect(res.body.user_name).to.equal('donald')
				expect(res.body).to.have.property('full_name')
				expect(res.body.full_name).to.equal('Donald D. Duck')
				expect(res.body).to.have.property('height_string')
				expect(res.body.height_string).to.equal('6\' 0"')
				expect(res.body).to.have.property('weight')
				expect(res.body.weight).to.equal(200)
				expect(res.body).to.have.property('password')
				done()				
			})
	})
})