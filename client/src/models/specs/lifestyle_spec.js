const assert = require('assert');
const LifestyleModel = require('../lifestyle.js');

describe('LifestyleModel', function() {

  it('can calculate score depending on checked items', function() {
    const values = new LifestyleModel();
    const actual = values.add(["0", "0", "3"]);
    assert.strictEqual(actual, 3);
  });
});
