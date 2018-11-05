const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const TravelCalculator = function (){

};

  TravelCalculator.prototype.bindEvents = function () {
    PubSub.subscribe('TravelModel:send-values-array', (evt) => {
      const array = evt.detail
      const travelPoints = this.calculateTotal(array)
      PubSub.publish("TravelForm:display-results", travelPoints);
    });
  };

  TravelCalculator.prototype.calculateTotal = function (array) {
    const mappedArray = this.mapArray(array);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sumOfArray = mappedArray.reduce(reducer);
    return sumOfArray
  };

  TravelCalculator.prototype.mapArray = function (array) {
    const mappedArray = array.map(x => parseInt(x))
    return mappedArray
  };

module.exports = TravelCalculator
