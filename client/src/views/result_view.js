const PubSub = require('../helpers/pub_sub.js');
const Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);
const TotalCalculator = require("../models/total.js");
const Recommend = require('../models/recommend.js');

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
    this.randomize(this.food, this.travel, this.lifestyle);

    });
};

ResultView.prototype.randomize = function (food, travel, lifestyle) {

  const randomQuote = new Recommend;
  const maxNumber = Math.max(food, travel, lifestyle)
  if (maxNumber === food) {
    randomQuote.generate("food")
  } else if (maxNumber === travel) {
    randomQuote.generate("travel");
  } else if (maxNumber === lifestyle) {
    randomQuote.generate("lifestyle");
  } else {
    randomQuote.generate("lifestyle")
  }

  return randomQuote
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

module.exports = ResultView;
