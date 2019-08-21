// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😄 Assertion Passed: ${actual} === ${expected}`) : console.log(`😡 Assertion Failed: "${actual}" !== "${expected}"`);
};

const firstNames = [
  'Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe'
];


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {}

  for (const item of allItems) {
    if (itemsToCount[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
    console.log(item);
  }

  return console.log(results);
}
countOnly(firstNames, 1);


// const result1 = countOnly(firstNames, { 'Jason': true, 'Karima': true, 'Fang': true});


// assertEqual(result1['Jason'], 1);
// assertEqual(result1['Karima'], undefined);
// assertEqual(result1['Fang'], 2);