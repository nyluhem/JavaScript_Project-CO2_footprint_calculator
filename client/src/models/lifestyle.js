const PubSub = require('../helpers/pub_sub.js');

const LifestyleModel = function() {
  this.values = [];
};

LifestyleModel.prototype.getValues = function () {
  PubSub.subscribe('LifestyleView:values', (event) => {
    const checkedValues = event.detail;
    const total = this.add(checkedValues);
    PubSub.publish('LifestyleView:result', total);
  });

};

LifestyleModel.prototype.add = function (values) {
  const arrayOfIntegers = values.map(value => parseInt(value));
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const result = arrayOfIntegers.reduce(reducer);
  return result;
};

module.exports = LifestyleModel;
