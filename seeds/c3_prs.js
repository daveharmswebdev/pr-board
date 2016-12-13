'use strict'

exports.seed = function(knex, Promise) {
  return Promise.all([
    // Inserts seed entries
    knex('personal_records').insert({ 
      profile_id: 3,
      lift_id: 3,
      weight: 225,
    })
  ]);
};

