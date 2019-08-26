// const assertEqual = function(actual, expected) {
//   actual === expected ? console.log(`😄 Assertion Passed: ${actual} === ${expected}`) : console.log(`😡 Assertion Failed: "${actual}" !== "${expected}"`);
// };

// const eqArrays = function(array1, array2) {
//   for (i = 0; i < array1.length; i++) {
//     if (array1[i] !==  array2[i]) {
//       return false;
//     } 
//   }
//   return true;
// }

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // check if object1 and object2 have the same # of keys
  if(Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key in object1) {
    // object1 and object2 do have the same # of keys
  
    if (!object2[key]) return false; // however, the key only exists in object1, not object2

    if (Array.isArray(object1[key])) {
      // object1 and object 2 both have the same keys
      // and the element at object1 is an array

      if (!Array.isArray(object2[key])) return false;
      // this checks to make sure the same key in object2 is also an array

      if (object1[key].length !== object2[key].length) return false;
      // we know the element at both object1 and object2 are arrays, we need to check if they have the same # of elements

      for(let i=0; i<object1[key].length; i++) {
        // both elements of object1 and object2 are array and have the same number of elements
        if(object1[key][i] !== object2[key][i]) return false;
      }
    } else {
      if (object1[key] !== object2[key]) return false;
    }
  }

  return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

