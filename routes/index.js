'use strict'

const {Router} = require('express')
const router = Router()

// routes
const home = require('./home')
const profile = require('./profile')
const login = require('./login')
const precord = require('./precord')

router.use(home)
router.use(profile)
router.use(login)
router.use(precord)

module.exports = router