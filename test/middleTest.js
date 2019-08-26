const expect = require('chai').expect;
const middle = require('../middle');

describe('# testing middle', () => {
  it('should pass', () => {
    expect(middle([1,2,3])).to.eql([2]);
  });
});  