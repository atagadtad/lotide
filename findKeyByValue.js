const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😄 Assertion Passed: ${actual} === ${expected}`) : console.log(`😡 Assertion Failed: "${actual}" !== "${expected}"`);
};

// function takes in object and value and outputs the matching KEY to the inputted VALUE of OBJECT
const findKeyByValue = function(object, value) {
  // key is giving me the keys in the object as an array
  let key = Object.keys(object);
  let output = '';
  // iterating over the key values array
  for (genre of key) {
    for (i = 0; i < key.length; i++) {
      if (object[genre] === value) {
        output = key[i];
      } else {
        output = undefined;
      }
    }
  }
  return output;
}

const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire'
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);