const assert = require("assert")
const Travel = require("../travel.js")

describe("Travel Calculator", function(){
  let travelCalculator

    beforeEach(function(){
      travelCalculator = new Travel;
    });


  it("can turn an array of strings into an array of integers", function () {
    arrayOfStrings = ["12", "44", "20"];
    assert.deepStrictEqual(travelCalculator.mapArray(arrayOfStrings), [12, 44, 20])
  });

  it("can reduce an array of integers into one number", function () {
    arrayOfInts = [12, 44, 20];
    assert.deepStrictEqual(travelCalculator.sum(arrayOfInts), 76)
  });

  it("can do both of the above as part of one function", function () {
    arrayOfStrings = ["12", "44", "20"]
    assert.deepStrictEqual(travelCalculator.calculateTotal(arrayOfStrings), 76);
  });

});
