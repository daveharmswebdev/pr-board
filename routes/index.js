'use strict'

const {Router} = require('express')
const router = Router()

// routes
const home = require('./home')
const profile = require('./profile')

router.use(home)
router.use(profile)

module.exports = router