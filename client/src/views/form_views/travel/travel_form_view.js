const PubSub = require('../../../helpers/pub_sub.js');
const CreateForm = require("./create_form.js")

const TravelFormView = function (formElement) {
  this.element = formElement
};

TravelFormView.prototype.setupEventListeners = function() {
  this.element.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const form = evt.target;

    //RUN CALCULATIONS BASED ON INPUTS

    form.reset();
  });
};


module.exports = TravelFormView
