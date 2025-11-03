const Triangle = require('../src/triangle').triangle;
const expect = require('chai').expect;

describe('Triangle', function() {
  it('calcule correctement l\'aire', function() {
    const t = new Triangle(4, 6);
    expect(t.getArea()).to.equal(12); // 4*6/2 = 12
  });
});