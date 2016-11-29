'use strict'

const express = require('express')
const app = express()
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const bodyParser = require('body-parser')

const routes = require('../routes/')

const PORT = process.env.PORT || 3000

// middlewares
app.use(session({
  store: new RedisStore({
    url: process.env.REDIS_URL || 'redis://localhost:6379',
  }),
  resave: false,
  saveUninitialized: true,
  secret: 'davesecretkey',
}))

app.use(bodyParser.json())

app.use((req, res, next) => {
	app.locals.user = req.session && req.session.user_name
	next()
})

app.use(routes)

app.listen(PORT, () => {
	console.log('now listening on port', PORT)
})

module.exports = app

