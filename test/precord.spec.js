'use strict'

const request = require('supertest')
const app = require('../server/server')
const {expect} = require('chai')
const { knexConfig } = require('../config')
const knex = require('knex')(knexConfig)

describe('personal records `/api/precord` spec', () => {

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

	it('it should respond with JSON to `get /api/precord`', done => {
		request(app)
			.get('/api/precord')
			.expect('Content-Type', /json/)
			.end((err, res) => {
				expect(res.body).to.be.a('array')
				expect(res.body.length).to.equal(3)
				expect(res.body[0]).to.have.property('user_name')
				expect(res.body[0]).to.have.property('lift_name')
				expect(res.body[0]).to.have.property('weight')
				expect(res.body[0]).to.have.property('pr_date')
				done()
			})
	})

	it('it should respond with JSON to `get /api/precord`', done => {
		request(app)
			.get('/api/precord/1')
			.expect('Content-Type', /json/)
			.end((err, res) => {
				expect(res.body).to.be.a('array')
				expect(res.body[0]).to.have.property('user_name')
				expect(res.body[0].user_name).to.equal('huey')
				expect(res.body[0]).to.have.property('lift_name')
				expect(res.body[0].lift_name).to.equal('Front Squat')
				expect(res.body[0]).to.have.property('weight')
				expect(res.body[0].weight).to.equal(300)
				expect(res.body[0]).to.have.property('pr_date')
				done()
			})
	})

	it('it should be able to post a new pr', done => {
		request(app)
			.post('/api/precord')
			.send({
				"profile_id": 1,
				"lift_id": 0,
				"weight": 315
			})
			.end((err, res) => {
				expect(res.status).to.equal(200)
				expect(res.body).to.have.property('message')
				expect(res.body.message).to.include('new back squat pr of 315 pounds, posted')
				done()
			})
	})
})