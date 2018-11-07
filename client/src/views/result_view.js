const PubSub = require('../helpers/pub_sub.js');
const Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);
const TotalCalculator = require("../models/total.js")

const ResultView = function (container) {
  this.container = container;
  this.travel = null;
  this.food = null;
  this.lifestyle = null;
  this.all = null;
};

ResultView.prototype.bindEvents = function () {

  PubSub.subscribe('FoodInfo', (event) => {
      this.food = event.detail;
  });

  PubSub.subscribe('TravelForm:display-results', (event) => {
    this.travel = event.detail;
  });

  PubSub.subscribe('LifestyleView:result', (event) => {
    this.lifestyle = event.detail;
  });

  PubSub.subscribe('PublishView:final-result', (event) => {
    this.all = event.detail;
    this.render();
    });
};

ResultView.prototype.render = function () {
  this.container.innerHTML = "";

  const foodParagraph = document.createElement('p');
  foodParagraph.textContent = `Food: ${this.food}`;

  const travelParagraph = document.createElement('p');
  travelParagraph.textContent = `Travel: ${this.travel}`;

  const lifestyleParagraph = document.createElement('p');
  lifestyleParagraph.textContent = `Lifestyle: ${this.lifestyle}`;

  const allParagraph = document.createElement('p');
  allParagraph.textContent = `Total: ${this.all}`;

  this.container.appendChild(foodParagraph)
  this.container.appendChild(travelParagraph)
  this.container.appendChild(lifestyleParagraph)
  this.container.appendChild(allParagraph);
};


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


module.exports = ResultView;
