const PubSub = require('../helpers/pub_sub.js');
const Highcharts = require('highcharts');


const Total = function() {
  this.values = {food: 0, travel: 0, lifestyle: 0};

};

Total.prototype.bindEvents = function () {

  PubSub.subscribe('FoodInfo', (event) => {
    console.log('Results from food form', event.detail);
    const foodData = event.detail;
    this.values.food = parseInt(foodData)
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
    // console.log(totalArray);
  });

};


Total.prototype.getTotal = function () {


};



// Total.prototype.getData = function () {
//
//   const foodData = this.getFoodData();
//   const travelData = this.getTravelData();
//   const lifestyleData = this.getLifestyleData();
//
//   const valuesArray = [foodData, travelData, lifestyleData];
//   const totalArray = this.calculateTotal(valuesArray);
//
//   console.log(totalArray);
//   return totalArray;
// };
//
// Total.prototype.getFoodData = function () {
//
//   PubSub.subscribe('FoodInfo', (event) => {
//     const foodData = event.detail;
//     console.log(foodData);
//     return foodData;
//   });
//
// };


// Total.prototype.getTravelData = function () {
//   PubSub.subscribe('TravelForm:display-results', (event) => {
//     const travelData = event.detail;
//     console.log(travelData);
//     return travelData;
//   });
//
// };

// Total.prototype.getLifestyleData = function () {
//
//   PubSub.subscribe('LifestyleView:values', (event) => {
//     const lifestyleData = event.detail;
//     console.log(lifestyleData);
//     return lifestyleData;
//   });
//
// };

Total.prototype.calculateTotal = function () {
  const array = Object.values(this.values)
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const result = array.reduce(reducer);

  return result;
};


// PubSub.publish('ResultsView:final-total-calculated', absoluteTotal);


module.exports = Total;
