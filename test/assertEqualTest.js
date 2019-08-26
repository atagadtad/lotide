const assertEqual = require('../assertEqual');
const head = require('../head');
const tail = require('../tail');

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

// head
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head([1]), 1);

// tail
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!