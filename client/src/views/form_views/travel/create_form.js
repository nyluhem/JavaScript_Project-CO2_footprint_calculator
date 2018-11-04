const PubSub = require('../../../helpers/pub_sub.js');

const CreateTravelForm = function(formElement) {
  this.element = formElement
};

// CreateTravelForm.prototype.bindEvents = function () {
//
// };


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
  const carDiv = document.createElement("div");
  carDiv.classList.add("car-section");

  const carHeader = document.createElement("legend");
  carHeader.textContent = "Car/Motorbike";
  carDiv.appendChild(carHeader)

  const carQuestion = document.createElement("p");
  carQuestion.textContent = "How many miles a week do you drive:"
  carDiv.appendChild(carQuestion)

  const carOptionOne = document.createElement("input");
  carOptionOne.type = "radio"
  carOptionOne.name = "car-miles"
  carOptionOne.value = "0"
  carOptionOne.id = "option-one"
  carOptionOne.checked = true;

  const labelCarOptionOne = document.createElement("label");
  labelCarOptionOne.textContent = "0"
  labelCarOptionOne.id = "option-one"

  carDiv.appendChild(carOptionOne)
  carDiv.appendChild(labelCarOptionOne)

  const carOptionTwo = document.createElement("input");
  carOptionTwo.type = "radio";
  carOptionTwo.name = "car-miles";
  carOptionTwo.value = "1-10";
  carOptionTwo.id = "option-two"

  const labelCarOptionTwo = document.createElement("label");
  labelCarOptionTwo.textContent = "1-10"
  labelCarOptionTwo.for = "option-two"

  carDiv.appendChild(carOptionTwo)
  carDiv.appendChild(labelCarOptionTwo)

  const carOptionThree = document.createElement("input");
  carOptionThree.type = "radio";
  carOptionThree.name = "car-miles";
  carOptionThree.value = "11-20";
  carOptionThree.id = "option-three"

  const labelCarOptionThree = document.createElement("label");
  labelCarOptionThree.textContent = "11-20"
  labelCarOptionThree.for = "option-three"

  carDiv.appendChild(carOptionThree)
  carDiv.appendChild(labelCarOptionThree)

  const carOptionFour = document.createElement("input");
  carOptionFour.type = "radio";
  carOptionFour.name = "car-miles";
  carOptionFour.value = "20+";
  carOptionFour.id = "option-four"

  const labelCarOptionFour = document.createElement("label");
  labelCarOptionFour.textContent = "20+"
  labelCarOptionFour.for = "option-four"

  carDiv.appendChild(carOptionFour)
  carDiv.appendChild(labelCarOptionFour)

  return carDiv
  console.log(carDiv)
};

CreateTravelForm.prototype.createPublicTransportQuestion = function () {
  const busDiv = document.createElement("div");
  busDiv.classList.add("bus-section");

  const busHeader = document.createElement("legend");
  busHeader.textContent = "Public Transport";
  busDiv.appendChild(busHeader)

  const busQuestion = document.createElement("p");
  busQuestion.textContent = "How many miles a week do you travel on Public Transport:"
  busDiv.appendChild(busQuestion)

  const busOptionOne = document.createElement("input");
  busOptionOne.type = "radio"
  busOptionOne.name = "bus-miles"
  busOptionOne.value = "0"
  busOptionOne.id = "option-one"
  busOptionOne.checked = true;

  const labelBusOptionOne = document.createElement("label");
  labelBusOptionOne.textContent = "0"
  labelBusOptionOne.id = "option-one"

  busDiv.appendChild(busOptionOne)
  busDiv.appendChild(labelBusOptionOne)

  const busOptionTwo = document.createElement("input");
  busOptionTwo.type = "radio";
  busOptionTwo.name = "bus-miles";
  busOptionTwo.value = "1-10";
  busOptionTwo.id = "option-two"

  const labelBusOptionTwo = document.createElement("label");
  labelBusOptionTwo.textContent = "1-10"
  labelBusOptionTwo.for = "option-two"

  busDiv.appendChild(busOptionTwo)
  busDiv.appendChild(labelBusOptionTwo)

  const busOptionThree = document.createElement("input");
  busOptionThree.type = "radio";
  busOptionThree.name = "bus-miles";
  busOptionThree.value = "11-20";
  busOptionThree.id = "option-three"

  const labelBusOptionThree = document.createElement("label");
  labelBusOptionThree.textContent = "11-20"
  labelBusOptionThree.for = "option-three"

  busDiv.appendChild(busOptionThree)
  busDiv.appendChild(labelBusOptionThree)

  const busOptionFour = document.createElement("input");
  busOptionFour.type = "radio";
  busOptionFour.name = "bus-miles";
  busOptionFour.value = "20+";
  busOptionFour.id = "option-four"

  const labelBusOptionFour = document.createElement("label");
  labelBusOptionFour.textContent = "20+"
  labelBusOptionFour.for = "option-four"

  busDiv.appendChild(busOptionFour)
  busDiv.appendChild(labelBusOptionFour)

  return busDiv
};

CreateTravelForm.prototype.createNonFootprintQuestion = function () {
  const bikeDiv = document.createElement("div");
  bikeDiv.classList.add("bike-section");

  const bikeHeader = document.createElement("legend");
  bikeHeader.textContent = "Cycling/Walking";
  bikeDiv.appendChild(bikeHeader)

  const bikeQuestion = document.createElement("p");
  bikeQuestion.textContent = "Do you cycle or walk to work (if you cycle/walk some of the way as part of your journey then please also calculate mileage of public/private transport):"
  bikeDiv.appendChild(bikeQuestion)

  const bikeOptionOne = document.createElement("input");
  bikeOptionOne.type = "radio"
  bikeOptionOne.name = "bike-miles"
  bikeOptionOne.value = "yes"
  bikeOptionOne.id = "option-one"
  bikeOptionOne.checked = false;

  const labelBikeOptionOne = document.createElement("label");
  labelBusOptionOne.textContent = "Yes"
  labelBusOptionOne.id = "option-one"

  bikeDiv.appendChild(bikeOptionOne)
  bikeDiv.appendChild(labelBikeOptionOne)

  const bikeOptionTwo = document.createElement("input");
  bikeOptionTwo.type = "radio";
  bikeOptionTwo.name = "bike-miles";
  bikeOptionTwo.value = "No";
  bikeOptionTwo.id = "option-two"
  bikeOptionTwo.checked = true


const labelBikeOptionTwo = document.createElement("label");
labelBikeOptionTwo.textContent = "No"
labelBikeOptionTwos.id = "option-two"

bikeDiv.appendChild(bikeOptionTwo)
bikeDiv.appendChild(labelBikeOptionTwo)

};





// function createRadialButton (name, value, id, checked = false) {
//   const button = document.createElement("input");
//   button.type = "radio"
//   button.name = name
//   button.value = value
//   button.checked = checked
// }

//ADD EVENT LISTENER FOR SUBMIT



CreateTravelForm.prototype.createSubmitButton = function () {
  const submitButton = document.createElement("input");
  submitButton.classList.add("submit");
  submitButton.type = "submit"
  submitButton.value = "Submit Travel Details"

  return submitButton;
};

module.exports = CreateTravelForm;
