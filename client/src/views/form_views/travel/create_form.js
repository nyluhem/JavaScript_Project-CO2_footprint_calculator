const PubSub = require('../../../helpers/pub_sub.js');

const CreateTravelForm = function(container) {
  this.container = container
};

// CreateTravelForm.prototype.bindEvents = function () {
//   this.container.innerHTML = ""
//   const form =
// };
//
// SightingsGridView.prototype.bindEvents = function () {
//   PubSub.subscribe('Sightings:data-loaded', (evt) => {
//     this.render(evt.detail);
//   });
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
  form.appendChild(nonFootprintQuestion);

  const submitButton = this.createSubmitButton();
  form.appendChild(submitButton);

  // this.element = form;
  const newForm = this.container.appendChild(form)
  return newForm;
  // return form;
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

  const carOptionThree = this.createRadioButton("car-miles", "11-20", "car-option-three");
  const labelCarOptionThree = this.createLabel("11-20", "car-option-three");

  carDiv.appendChild(carOptionThree)
  carDiv.appendChild(labelCarOptionThree)

  const carOptionFour = this.createRadioButton("car-miles", "20+", "car-option-four");
  const labelCarOptionFour = this.createLabel("20+", "car-option-four");

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

  const busOptionOne = this.createRadioButton("bus-miles", "0", "bus-option-one", true);
  const labelBusOptionOne = this.createLabel("0", "bus-option-one");

  busDiv.appendChild(busOptionOne)
  busDiv.appendChild(labelBusOptionOne)

  const busOptionTwo = this.createRadioButton("bus-miles", "1-10", "bus-option-two");
  const labelBusOptionTwo = this.createLabel("1-10", "bus-option-two");

  busDiv.appendChild(busOptionTwo)
  busDiv.appendChild(labelBusOptionTwo)

  const busOptionThree = this.createRadioButton("bus-miles", "11-20", "bus-option-three");
  const labelBusOptionThree = this.createLabel("11-20", "bus-option-three");

  busDiv.appendChild(busOptionThree)
  busDiv.appendChild(labelBusOptionThree)

  const busOptionFour = this.createRadioButton("bus-miles", "20+", "bus-option-four");
  const labelBusOptionFour = this.createLabel("20+", "bus-option-four");

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

  const bikeOptionOne = this.createRadioButton("bike-miles", "yes", "bike-option-one");
  const labelBikeOptionOne = this.createLabel("Yes", "bike-option-one");

  bikeDiv.appendChild(bikeOptionOne)
  bikeDiv.appendChild(labelBikeOptionOne)

  const bikeOptionTwo = this.createRadioButton("bike-miles", "no", "bike-option-two", true);
  const labelBikeOptionTwo = this.createLabel("No", "bike-option-two");

  bikeDiv.appendChild(bikeOptionTwo)
  bikeDiv.appendChild(labelBikeOptionTwo)

  return bikeDiv

};

CreateTravelForm.prototype.createSubmitButton = function () {
  const submitButton = document.createElement("input");
  submitButton.classList.add("submit");
  submitButton.type = "submit"
  submitButton.value = "Submit Travel Details"

  return submitButton;
};

  CreateTravelForm.prototype.createRadioButton = function (name, value, id, checked = false) {
    const detail = document.createElement("input");
    detail.type = "radio"
    detail.name = `${name}`
    detail.value = `${value}`
    detail.id = `${id}`
    detail.checked = checked

    return detail
  }

  CreateTravelForm.prototype.createLabel = function (textContent, id) {
    const detail = document.createElement("label");
    detail.textContent = `${textContent}`
    detail.id = `${id}`

    return detail
  }

module.exports = CreateTravelForm;
