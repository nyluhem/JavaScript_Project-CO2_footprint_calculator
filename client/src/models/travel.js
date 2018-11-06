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
    const sumOfArray = this.sum(mappedArray);
    return sumOfArray;
  };

  TravelCalculator.prototype.mapArray = function (array) {
    const mappedArray = array.map(x => parseInt(x))
    return mappedArray
  };

  TravelCalculator.prototype.sum = function (array) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sumOfArray = array.reduce(reducer);
    return sumOfArray
  };

module.exports = TravelCalculator
