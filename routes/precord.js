'use strict'

const {Router} = require('express')
const router = Router()
const precord = require('../controller/precord')

router.get('/api/precord', precord.index)

router.get('/api/precord/:profile_id', precord.indexByProfileId)

router.post('/api/precord', precord.create)

// router.patch('/api/precord', precord.update)

// router.delete('/api/precord', precord.destroy)

module.exports = router