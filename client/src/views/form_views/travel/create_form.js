const PubSub = require('../../../helpers/pub_sub.js');

const CreateTravelForm = function (formElement) {
  this.element = formElement
};


CreateTravelForm.prototype.createForm = function () {
  const form = document.createElement("form");
  form.classList.add('travel-form');

  header = document.createElement("h2");
  header.textContent = "Please enter travel details:"
  form.appendChild(header);

  const carQuestion = this.createCarQuestion();
  form.appendChild(carQuestion);

  const publicTransportQuestion = this.createPublicTransportQuestion();
  form.appendChild(publicTransportQuestion);

  const nonFootprintQuestion = this.createNonFootprintQuestion();
  form.appendChild(nonFootprintQuestion);s

  const submitButton = this.createSubmitButton();
  form.appendChild(submitButton);

  this.element = form;
  return form;
};

CreateTravelForm.prototype.createCarQuestion = function () {
  const
};

CreateTravelForm.prototype.createPublicTransportQuestion = function () {

};

CreateTravelForm.prototype.createNonFootprintQuestion = function () {

};

CreateTravelForm.prototype.createSubmitButton = function () {
  const submitButton = document.createElement("input");
  submitButton.classList.add("submit");
  submitButton.type = "submit"
  submitButton.value = "Submit Travel Details"

  return submitButton;
};

module.exports = CreateTravelForm;
