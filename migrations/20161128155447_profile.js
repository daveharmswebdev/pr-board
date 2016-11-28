'use strict'

exports.up = (knex, Promise) => {

	return Promise.all([
		knex.schema.createTable('profile', table => {
			table.increments('profile_id')
			table.string('user_name')
			table.string('last_name')
			table.string('first_name')
			table.string('middle_initial')
			table.integer('height')
			table.integer('weight')
			table.string('password')
		})
	])
  
}

exports.down = (knex, Promise) => {

	return Promise.all([
		knex.schema.dropTableIfExists('profile')
	])

}
