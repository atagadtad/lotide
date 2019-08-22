

const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😄 Assertion Passed: ${actual} === ${expected}`) : console.log(`😡 Assertion Failed: "${actual}" !== "${expected}"`);
};



const findKey = function(object, callback) {
  let output = '';
  for (element in object) {
    if (callback(object[element])) {
      output = element;
      break;
    }
  }

  return console.log(output);
};


findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"


