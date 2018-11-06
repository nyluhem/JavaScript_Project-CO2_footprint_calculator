const PubSub = require('../helpers/pub_sub.js');

const FoodModel = function() {
  this.formvalues = []
}

FoodModel.prototype.getFormValues = function () {
  PubSub.subscribe("FoodForm:values", (event) => {
   const foodValues = event.detail;
   // console.log(foodValues);
   const new2 = this.getValue(foodValues);
   const result = new2;
   console.log(result);
   PubSub.publish("FoodInfo", result);
  });
};

FoodModel.prototype.getValue = function (values) {
  const integers = values.map((str) => parseInt(str));
  // console.log(integers);
  const sum = integers.reduce((total,amount) => total + amount);
  return sum;
};




module.exports = FoodModel;
