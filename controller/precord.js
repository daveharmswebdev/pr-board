'use strict'

const { knexConfig } = require('../config')
const knex = require('knex')(knexConfig)

module.exports.index = (req, res) => {
	res.json({"message":"new pr"})
}