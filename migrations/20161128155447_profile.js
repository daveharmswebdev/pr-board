'use strict'

exports.up = (knex, Promise) => {

	return Promise.all([
		knex.schema.createTable('profile', table => {
			table.increments('profile_id')
			table.string('user_name')
		})
	])
  
}

exports.down = (knex, Promise) => {

	return Promise.all([
		knex.schema.dropTableIfExists('profile')
	])

}
