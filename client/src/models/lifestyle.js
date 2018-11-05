const PubSub = require('../helpers/pub_sub.js');

const LifestyleModel = function() {
  this.values = [];
};

LifestyleModel.prototype.addValues = function () {
  PubSub.subscribe('LifestyleView:values', (event) => {
    console.log(event.detail);
    const array = event.detail;
    
  });
};

module.exports = LifestyleModel;
