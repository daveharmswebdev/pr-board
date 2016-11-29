'use strict'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    // Inserts seed entries
    knex('profile').insert({ 
      user_name: 'luey',
      last_name: 'Duck',
      first_name: 'Luey',
      middle_initial: 'B',
      height: 69,
      weight: 160,
      password: 'password'
    })
  ]);
};
