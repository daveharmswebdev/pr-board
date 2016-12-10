'use strict'

const express = require('express')
const app = express()
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const bodyParser = require('body-parser')
const passport = require('passport')

const routes = require('../routes/')

const PORT = process.env.PORT || 3000

//serve static files
app.use(express.static('client'))

// middlewares
app.use(session({
  store: new RedisStore({
    url: process.env.REDIS_URL || 'redis://localhost:6379',
  }),
  resave: false,
  saveUninitialized: true,
  secret: 'davesecretkey',
}))

// passport
require('../lib/passport-strategies')
app.use(passport.initialize())
app.use(passport.session())

app.use(bodyParser.json())

app.use((req, res, next) => {
	app.locals.user = req.session && req.session.user_name
	next()
})



app.use(routes)

app.use((req, res) =>
  res.status(404).json({"message":"route not found"})
)

app.use((err, req, res, next) => {
	if (process.env.NODE_ENV !== 'testing') {
	  console.error(err)
	}
  res.status(500).json({"status":500, "message":"internal error", "type":"internal"})
})

app.listen(PORT, () => {
	console.log('now listening on port', PORT)
})

module.exports = app

