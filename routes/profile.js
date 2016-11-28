'use strict'

const {Router} = require('express')
const router = Router()
const profile = require('../controller/profile')

router.get('/api/profile', profile.new)

router.post('/api/profile', profile.create)

module.exports = router