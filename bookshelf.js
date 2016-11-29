'use strict'

const {knexConfig} = require('./config')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)

bookshelf.plugin('registry')

module.exports = bookshelf