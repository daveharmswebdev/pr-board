'use strict'

const {Router} = require('express')
const router = Router()
const profile = require('../controller/profile')

router.get('/profile', profile.new)

router.post('/profile', profile.create)

module.exports = router