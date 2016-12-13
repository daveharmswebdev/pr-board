'use strict'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('personal_records').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('personal_records').insert({ 
          profile_id: 1,
          lift_id: 1,
          weight: 300,
        })
      ]);
    });
};

