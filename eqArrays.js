const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😄 Assertion Passed: ${actual} === ${expected}`) : console.log(`😡 Assertion Failed: "${actual}" !== "${expected}"`);
};

const eqArrays = function(array1, array2) {
  console.log(array2[2]);
  for (i = 0; i < array1.length; i++) {
    if (array1[i] !==  array2[i]) {
    
      return false;
    } 
  }
  return true;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS


// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false


