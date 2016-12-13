'use strict'

exports.up = (knex, Promise) => {

	return Promise.all([

		knex.schema.createTable('lifts', table => {
			table.integer('lift_id').unique()
			table.string('lift_name')
		}),

		knex.schema.createTable('personal_records', table => {
			table.increments('pr_id')
			table.integer('profile_id')
				.references('profile_id')
				.inTable('profile')
			table.integer('lift_id')
				.references('lift_id')
				.inTable('lifts')
			table.float('weight')
      table.timestamp('pr_date').defaultTo(knex.fn.now())
		})

	])
  
}

exports.down = (knex, Promise) => {

	return Promise.all([
		knex.schema.dropTableIfExists('personal_records'),
		knex.schema.dropTableIfExists('lifts')
	])

}