const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
 it ("should pass", () => {
   const result = tail(["Hello", "Lighthouse", "Labs"]);
   assert.deepEqual(result, "Labs");
 })
});