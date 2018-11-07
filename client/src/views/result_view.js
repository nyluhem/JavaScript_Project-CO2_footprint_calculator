const PubSub = require('../helpers/pub_sub.js');
const Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);

const ResultView = function () {
  this.container = container;
};

  ResultView.prototype.bindEvents()





ResultView.prototype.render = function (data) {
  this.container.innerHTML = " ";
  const resultView = document.createElement('p');
  resultView.textContent  = data.result;
  this.container.appendChild(resultView);
  ch
};

// ResultView.prototype.displayResult = function (result) {
//   const resultElement = document.querySelector('#result');
//   if (result) {
//     resultElement.textContent = "Your carbon footprint is lower than expected!";
//   } else {
//     resultElement.textContent = "You are a little high on your carbon footprint";
//   }
// };

// random messages need to be added here for results
//
// Transport:
// flights to be added **
// “Why not walk or cycle today?”
// “You could car share with someone”
// “Run more errands in your next trip?”
// “It might be best to take the bus this week!”
// “Get some fresh air, take a walk today”
//
// Lifestyle:
//
// “Find another product that is reduced in CO2 emissions”
// “Donate your unused clothes to another to help keep CO2 emissions down”
// “If your not using it, turn it off”
// “Do you know where your garmet was made?”
//
// Food:
//
// “Cook a homemade meal for tomorrow to reduce your CO2!”
// “Check the label next time you buy food, look for local produce.”
// “Try a delicious vegetarian meal this week”
// “Why not mix up the recipe and add more vegetables than meat”



// const chart = function () {
//   const myChart = document.querySelector("#container")
//   const theChart = Highcharts.chart( myChart, {
//       chart: {
//           type: 'bar'
//       },
//       title: {
//           text: 'Fruit Consumption'
//       },
//       xAxis: {
//           categories: ['Apples', 'Bananas', 'Oranges']
//       },
//       yAxis: {
//           title: {
//               text: 'Fruit eaten'
//           }
//       },
//       series: [{
//           name: 'Jane',
//           data: [1, 0, 4]
//       }, {
//           name: 'John',
//           data: [5, 7, 3]
//       }]
//   });
// };
// chart();

module.exports = ResultView;
