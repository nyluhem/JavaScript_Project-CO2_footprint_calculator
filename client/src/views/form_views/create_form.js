const PubSub = require('../../helpers/pub_sub.js');

const CreateTravelForm = function(container) {
  this.container = container
};

CreateTravelForm.prototype.getResults = function () {
  PubSub.subscribe("TravelForm:display-results", (evt) => {
    const totalPoints = evt.detail
    const results = this.displayResults(totalPoints)
    return results
  });
};

CreateTravelForm.prototype.displayResults = function (value) {
  const points = document.createElement("h1");
  points.innerHTML = ""
  points.textContent = `${value}`
  return points
};

CreateTravelForm.prototype.bindEvents = function () {
  const menuItem = document.querySelector("#travel-menu-item");
  menuItem.addEventListener("click", (event) => {
    this.createForm();
  });
};

CreateTravelForm.prototype.createForm = function () {
  event.preventDefault();
  this.container.innerHTML = ""

  const travelForm = document.createElement("form");
  console.log("created travel-form", travelForm);

  travelForm.classList.add('travel-form');
  travelForm.id = ("travel-form");

  header = document.createElement("h2");
  header.textContent = "Enter travel details:"
  travelForm.appendChild(header);

  const carQuestion = this.createCarQuestion();
  travelForm.appendChild(carQuestion);

  const publicTransportQuestion = this.createPublicTransportQuestion();
  travelForm.appendChild(publicTransportQuestion);

  const nonFootprintQuestion = this.createNonFootprintQuestion();
  travelForm.appendChild(nonFootprintQuestion);

  const submitButton = this.createSubmitButton();
  travelForm.appendChild(submitButton);

  this.handleSubmit(travelForm);

  const newForm = this.container.appendChild(travelForm)
  console.log(newForm)
  return newForm;
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

  const carOptionOne = this.createRadioButton("car-miles", "0", "car-option-one");
  const labelCarOptionOne = this.createLabel("0", "car-option-one");

  carDiv.appendChild(carOptionOne)
  carDiv.appendChild(labelCarOptionOne)

  const carOptionTwo = this.createRadioButton("car-miles", "10", "car-option-two");
  const labelCarOptionTwo = this.createLabel("1-10", "car-option-two");

  carDiv.appendChild(carOptionTwo)
  carDiv.appendChild(labelCarOptionTwo)

  const carOptionThree = this.createRadioButton("car-miles", "20", "car-option-three");
  const labelCarOptionThree = this.createLabel("11-20", "car-option-three");

  carDiv.appendChild(carOptionThree)
  carDiv.appendChild(labelCarOptionThree)

  const carOptionFour = this.createRadioButton("car-miles", "30", "car-option-four");
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

  const busOptionOne = this.createRadioButton("bus-miles", "0", "bus-option-one");
  const labelBusOptionOne = this.createLabel("0", "bus-option-one");

  busDiv.appendChild(busOptionOne)
  busDiv.appendChild(labelBusOptionOne)

  const busOptionTwo = this.createRadioButton("bus-miles", "5", "bus-option-two");
  const labelBusOptionTwo = this.createLabel("1-10", "bus-option-two");

  busDiv.appendChild(busOptionTwo)
  busDiv.appendChild(labelBusOptionTwo)

  const busOptionThree = this.createRadioButton("bus-miles", "10", "bus-option-three");
  const labelBusOptionThree = this.createLabel("11-20", "bus-option-three");

  busDiv.appendChild(busOptionThree)
  busDiv.appendChild(labelBusOptionThree)

  const busOptionFour = this.createRadioButton("bus-miles", "15", "bus-option-four");
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

  const bikeOptionOne = this.createRadioButton("bike-miles", "0", "bike-option-one");
  const labelBikeOptionOne = this.createLabel("Yes", "bike-option-one");

  bikeDiv.appendChild(bikeOptionOne)
  bikeDiv.appendChild(labelBikeOptionOne)

  const bikeOptionTwo = this.createRadioButton("bike-miles", "0", "bike-option-two");
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

  CreateTravelForm.prototype.createRadioButton = function (name, value, id) {
    const detail = document.createElement("input");
    detail.type = "radio"
    detail.name = `${name}`
    detail.value = `${value}`
    detail.id = `${id}`

    return detail
  };

  CreateTravelForm.prototype.createLabel = function (textContent, id) {
    const detail = document.createElement("label");
    detail.textContent = `${textContent}`
    detail.id = `${id}`

    return detail
  };

  CreateTravelForm.prototype.handleSubmit = function (formInput) {
    formInput.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const answerArray = this.getValues();
      console.log(answerArray)
      PubSub.publish("TravelModel:send-values-array", answerArray);
      form.reset()
    });
  };

  CreateTravelForm.prototype.getValues = function () {
    const answerArray = [];
    const carAnswer = document.querySelector('input[name="car-miles"]:checked').value;
    const busAnswer = document.querySelector('input[name="bus-miles"]:checked').value;
    const bikeAnswer = document.querySelector('input[name="bike-miles"]:checked').value;

    answerArray.push(carAnswer, busAnswer, bikeAnswer);
    return answerArray
  };

module.exports = CreateTravelForm;
