const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😄 Assertion Passed: ${actual} === ${expected}`) : console.log(`😡 Assertion Failed: "${actual}" !== "${expected}"`);
};


// word: a string that were counting the numbers of letter in
const countLetters = function(word) {
  // numOfLetter object that we'll be pushing the number of letters to
  const numOfLetter = {}
  // using the for loop to iterate through the word string
  for (letter of word) {
    console.log(letter)
    // if the letter inside the word matches what's being iterated
    // add an increment of 1 towards the numOfLetter object
    if (numOfLetter[letter]) {
      numOfLetter[letter] += 1;
      
    } else {
      numOfLetter[letter] = 1;
    }
  }
  return console.log(numOfLetter);
}

let string = 'lighthouse';

countLetters(string);