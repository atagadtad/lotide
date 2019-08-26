const assertEqual = require('./assertEqual');



let tail = function(a) {
  let b = [];
  for (let i = 1; i < a.length; i++) {
    b.push(a[i]);
  }
  return b;
};

module.exports = tail;


