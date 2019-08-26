const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle');

assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false

// middle
// assertArraysEqual([])

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// middle([1, 2]) // => []
// middle([1, 2, 3, 4, 5]) // => [3]
// middle([1, 2, 3, 4, 5, 6, 7, 8])