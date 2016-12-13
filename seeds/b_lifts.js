'use strict'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lifts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('lifts').insert({ 
          lift_id: 0,
          lift_name: "Back Squat"
        }),
        knex('lifts').insert({ 
          lift_id: 1,
          lift_name: "Front Squat"
        }),
        knex('lifts').insert({ 
          lift_id: 2,
          lift_name: "Overhead Squat"
        }),
        knex('lifts').insert({ 
          lift_id: 3,
          lift_name: "Strict Shoulder Press"
        }),
        knex('lifts').insert({ 
          lift_id: 4,
          lift_name: "Push Press"
        }),
        knex('lifts').insert({ 
          lift_id: 5,
          lift_name: "Dead Lift"
        }),
        knex('lifts').insert({ 
          lift_id: 6,
          lift_name: "Clean"
        }),
        knex('lifts').insert({ 
          lift_id: 7,
          lift_name: "Sumo Deadlift High Pull"
        }),
        knex('lifts').insert({ 
          lift_id: 8,
          lift_name: "Split Jerk"
        }),
        knex('lifts').insert({ 
          lift_id: 9,
          lift_name: "Bench Press"
        })
      ]);
    });
};
