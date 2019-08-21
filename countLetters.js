const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😄 Assertion Passed: ${actual} === ${expected}`) : console.log(`😡 Assertion Failed: "${actual}" !== "${expected}"`);
};


// word: a string that were counting the numbers of letter in
const countLetters = function(word) {
  // numOfLetter object that we'll be pushing the number of letters to
  const numOfLetter = {}
  let string = [];
  let split = word.split(' ');
  let join = split.join('');
  console.log(join);

  // using the for loop to iterate through the word string
  for (letter of join) {

    // numOfLetter = true then add 1
    if (numOfLetter[letter]) {
      console.log('numof ->', numOfLetter[letter]);
      numOfLetter[letter] += 1;
      
    } else {
      numOfLetter[letter] = 1;
    }
  }
  return console.log(numOfLetter);
}

let string = 'lighthouse in the house';

countLetters(string);