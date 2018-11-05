const PubSub = require('../helpers/pub_sub.js');

const LifestyleModel = function() {
  this.values = [];
};

LifestyleModel.prototype.getValues = function () {
  PubSub.subscribe('LifestyleView:values', (event) => {
    const checkedValues = event.detail;
    this.add(checkedValues);
  });
};

LifestyleModel.prototype.add = function (values) {
  const arrayOfIntegers = values.map(value => parseInt(value));
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const result = arrayOfIntegers.reduce(reducer);
  console.log(result);
  return result;
};

module.exports = LifestyleModel;
