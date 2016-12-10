'use strict'

const R = require('ramda')

module.exports = R.cond([
  [R.propEq('first_name', '') , R.always(['first name required'])],
  [R.propEq('last_name', '')  , R.always(['last name required']) ],
  [R.propEq('user_name', '')  , R.always(['user name required']) ],
  [R.T                        , R.always([])                     ]
])