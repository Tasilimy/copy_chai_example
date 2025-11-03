const Triangle = require('../src/triangle').triangle;
const expect = require('chai').expect;

describe('Triangle', function() {
  it('calcule correctement l\'aire pour 4x6', function() {
    const t = new Triangle(4, 6);
    expect(t.getArea()).to.equal(12); // 4*6/2 = 12
  });

  it('renvoie 0 si la base vaut 0', function() {
    const t = new Triangle(0, 10);
    expect(t.getArea()).to.equal(0);
  });
});
