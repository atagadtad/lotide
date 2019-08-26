const expect = require('chai').expect;
const assertEqual = require('../assertEqual');
const head = require('../head');
const tail = require('../tail');
const eqArrays = require('../eqArrays');

describe("#assertEqual", ()  => {
  it('should return failed', () => {
    const input = 'Lighthouse Labs';
    const expected = 'BootCamp';
    
    expect(assertEqual(input, expected)).to.equal(expected);
  });
})
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// // head
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), undefined);
// assertEqual(head([1]), 1);

// // tail
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// // eqArrays
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// // eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false
