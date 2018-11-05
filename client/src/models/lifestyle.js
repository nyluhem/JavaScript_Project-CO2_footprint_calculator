const PubSub = require('../helpers/pub_sub.js');


const AddValues = function(values) {
  this.values = values;
};

AddValues.prototype.addValus = function () {
  PubSub.subscribe('LifestyleView:values', (event) => {
    // sum stuff
    console.log(event.detail);
  });
};

module.exports = AddValues;
