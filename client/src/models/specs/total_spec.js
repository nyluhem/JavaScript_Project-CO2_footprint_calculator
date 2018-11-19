const assert = require("assert")
const Total = require("../total.js")

describe("Total Calculator", function(){
  let totalCalculator

    beforeEach(function(){
      totalCalculator = new Total;
    });


  it("can calculate the three different inputs", function() {
      totalCalculator.values = {food: 5, travel: 5, lifestyle: 5};
      assert.deepStrictEqual(totalCalculator.calculateTotal, 15);
  })

});
