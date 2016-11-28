'use strict'

const {Router} = require('express')
const router = Router()

// routes
const home = require('./home')

router.use(home)

module.exports = router