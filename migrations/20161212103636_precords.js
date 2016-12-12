'use strict'

exports.up = (knex, Promise) => {

	return Promise.all([

		knex.schema.createTable('personal_records', table => {
			table.increments('pr_id')
			table.integer('profile_id')
				.references('profile_id')
				.inTable('profile')
			table.integer('lift_id')
			table.float('weight')
      table.timestamp('pr_date').defaultTo(knex.fn.now())
		})
	])
  
}

exports.down = (knex, Promise) => {

	return Promise.all([
		knex.schema.dropTableIfExists('personal_records')
	])

}
