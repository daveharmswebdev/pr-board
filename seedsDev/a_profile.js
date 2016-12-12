'use strict'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profile').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('profile').insert({ 
          user_name: 'huey',
          last_name: 'Duck',
          first_name: 'Huey',
          middle_initial: 'A',
          height: 70,
          weight: 155,
          password: 'password'
        }),
        knex('profile').insert({ 
          user_name: 'luey',
          last_name: 'Duck',
          first_name: 'Luey',
          middle_initial: 'B',
          height: 69,
          weight: 160,
          password: 'password'
        }),
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
