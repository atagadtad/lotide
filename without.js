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
const without = function(source, itemsToRemove) {
  let output = [];

  for (i = 0; i < source.length; i++) {
    if (source[i] !==  itemsToRemove[i]) {
      output.push(source[i]);
    } 
  }
  return console.log(output);
}

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
