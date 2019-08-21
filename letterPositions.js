
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

const eqArrays = function(array1, array2) {
  console.log(array2[2]);
  for (i = 0; i < array1.length; i++) {
    if (array1[i] !==  array2[i]) {
    
      return false;
    } 
  }
  return true;
}

// function that returns string with no spaces
// const splitAndJoin = function(string) {
//   return string.split(' ').join('');
// }


// function that returns an object whose values reflect the key's
// index in the sentence
const letterPositions = function(sentence) {
  // object that we'll be pushing values with 
  // the amount of times the letter's index
  // appears within the sentence
  const results = {};


  // for loop to iterate through the sentence string
  for (let i = 0; i < sentence.length; i++) {

    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
      // results[i] += sentence[i];
    } else if (sentence[i] === ' ') {
      results[sentence[i]].push();
    } else {
      //results['h'] 
      results[sentence[i]] = [];
      results[sentence[i]].push(i);

 
    }
  }

  return (results);
};

// letterPositions('hello');


assertArraysEqual(letterPositions("hello").e, [1]);



