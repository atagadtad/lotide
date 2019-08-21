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

// flatten takes in array, outputs new array without nested arrays
const flatten = function(array) {
  let output = [];
  // for loop to iterate over inputted array
  for (let i = 0; i < array.length; i++) {
    // used .isArray to return truth boolean
    let isTrue = Array.isArray(array[i])
    // if boolean returns true then we begin iterating over the nested array
    if (isTrue) {
      // used 2nd for loop to iterate through nested array
      for (let j = 0; j < array[i].length; j++) {
        // pushed nested loop into the output variable
        output.push(array[i][j]);
      }
    } 
    // if not array, just push straight into output variable
    else {
      output.push(array[i]) 
    }

  }
  return console.log(output);
}


flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]

