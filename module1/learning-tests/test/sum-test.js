'use strict'

const sum = require('./sum')

console.assert(
  typeof sum === 'function', 
  'Should sum is a function'
)

console.assert(
  sum(1, 2) === 3,
  'Should sum(1, 2) return 3'
)

console.assert(
  sum(2, 3) === 5,
  'Should sum(2, 3) return 5'
)

console.log('All tests passed!')