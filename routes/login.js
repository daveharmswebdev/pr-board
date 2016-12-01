'use strict'

const {Router} = require('express')
const router = Router()
// const login = require('../controller/login')

router.get('/api/login/', login.new)

router.post('/api/login', login.create)

module.exports = router