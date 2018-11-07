const PubSub = require('../helpers/pub_sub.js');
const Highcharts = require('highcharts');

const TotalCalculator = function () {
    this.values = {food: 0, travel: 0, lifestyle: 0};
  };

  TotalCalculator.prototype.bindEvents = function () {

    PubSub.subscribe('FoodInfo', (event) => {
      const foodData = event.detail;
      this.values.food = parseInt(foodData);
      console.log('Food values:', this.values.food);
    });

    PubSub.subscribe('TravelForm:display-results', (event) => {
      console.log('Results from travel form', event.detail);
      const travelData = event.detail;
      this.values.travel = parseInt(travelData)
    });

    PubSub.subscribe('LifestyleView:result', (event) => {
      console.log('Results from lifestyle form', event.detail);
      const lifestyleData = event.detail;
      this.values.lifestyle = parseInt(lifestyleData)
    });

    const button = document.querySelector('#clicky-button');

    button.addEventListener('click', () => {
      const result = this.calculateTotal();
      console.log(result);
      PubSub.publish("PublishView:final-result", result);
    });

  };

  TotalCalculator.prototype.calculateTotal = function () {
  const array = Object.values(this.values)
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const result = array.reduce(reducer);

  return result;
  };

module.exports = TotalCalculator;
