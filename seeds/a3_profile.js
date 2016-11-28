'use strict'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profile').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('profile').insert({ 
          user_name: 'dewey',
          last_name: 'Duck',
          first_name: 'Dewey',
          middle_initial: 'C',
          height: 68,
          weight: 150,
          password: 'password'
        })
      ]);
    });
};
