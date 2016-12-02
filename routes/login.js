'use strict'

const {Router} = require('express')
const router = Router()
const session = require('../controller/session')

router.get('/api/login', session.new)

router.post('/api/login', session.create)

module.exports = router