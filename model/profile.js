'use strict'

let bookshelf = require('../bookshelf')

let Profile = bookshelf.Model.extend({
	tableName: 'profile',
	idAttribute: 'profile_id'
})

module.exports = Profile