
const middle = function(array) {
  let output = [];
  let middle = array.length/2;

  for (let i = 0; i < array.length; i++) {
    if (array.length < 3) {
      output.push();
      break;
    } else if (array.length % 2 === 0) {
      output.push(middle, middle + 1);
      break;
    } else {
      output.push(Math.round(middle));
      break;
    }
  }
  return output;
}

module.exports = middle;


