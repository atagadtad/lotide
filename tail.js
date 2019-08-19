let compare = function(c, d) {
  for (let j = 0; j < c.length; j++) {
    if (c[j] !== d[j]) {
      return false;
    }
  }
  return true;
};

let tail = function(a) {
  let b = [];
  for (let i = 1; i < a.length; i++) {
    b.push(a[i]);
  }
  return b;
};

const assertEqual = function(actual, expected) {
  compare(actual, expected) === true ? console.log(`😄 Assertion Passed: ${actual} === ${expected}`) : console.log(`😡 Assertion Failed: "${actual}" !== "${expected}"`);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!