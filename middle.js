/*
const eqArrays = function(array1, array2) {
  
  for (i = 0; i < array1.length; i++) {
    
    if (array1[i] !==  array2[i]) {
      return false;
    } 
  }
  return true;
}

const assertArraysEqual = function(array1, array2) {
  for (i = 0; i < array1.length; i++) {
    if (array1[i] !==  array2[i]) {
      console.log(`😡 Assertion Failed: "${array1}" !== "${array2}"`);
      return false;
    } 
  }
  console.log(`😄 Assertion Passed: ${array1} === ${array2}`)
  return true;
};
*/
const middle = function(array) {
  let output = [];
  let middle = array.length/2;

  for (let i = 0; i < array.length; i++) {
    if (array.length < 3) {
      output.push();
      break;
    } else if (array.length % 2 === 0) {
      output.push(middle, middle + 1);
      break;
    } else {
      output.push(Math.round(middle));
      break;
    }
  }
  return console.log(output);
}


middle([1, 2]) // => []
// middle([1, 2, 3, 4, 5]) // => [3]
// middle([1, 2, 3, 4, 5, 6, 7, 8])