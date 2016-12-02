'use strict'

const {Router} = require('express')
const router = Router()

// routes
const home = require('./home')
const profile = require('./profile')
const login = require('./login')

router.use(home)
router.use(profile)
router.use(login)

module.exports = router