const PubSub = require('../../../helpers/pub_sub.js');
const TravelCalculator = require("../../../models/travel.js")

const TravelFormView = function (formElement) {
  this.element = formElement
};

TravelFormView.prototype.setupEventListeners = function() {
  this.element.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const answerArray = this.getValues();
    PubSub.publish('TravelModel:send-values-array', answerArray);
    form.reset();
  });
};

TravelFormView.prototype.getValues = function () {
  const answerArray = [];
  const carAnswer = document.querySelector('input[name="car-miles"]:checked').value;
  const busAnswer = document.querySelector('input[name="bus-miles"]:checked').value;
  const bikeAnswer = document.querySelector('input[name="bike-miles"]:checked').value;

  answerArray.push(carAnswer, busAnswer, bikeAnswer);
  return answerArray
  // console.log("hello");
};



module.exports = TravelFormView
