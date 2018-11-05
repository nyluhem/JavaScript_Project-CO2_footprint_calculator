const PubSub = require('../../../helpers/pub_sub.js');
const CreateForm = require("./create_form.js")

const TravelFormView = function (formElement) {
  this.element = formElement
};

TravelFormView.prototype.setupEventListeners = function() {
  this.element.addEventListener('submit', function(evt) {
    // evt.preventDefault();
    console.log(evt)
    const form = evt.target;
    const carAnswer = document.querySelector('input[name="car-miles"]:checked').value;
    console.log(carAnswer)


    //RUN CALCULATIONS BASED ON INPUTS

    form.reset();
  });
};



module.exports = TravelFormView
