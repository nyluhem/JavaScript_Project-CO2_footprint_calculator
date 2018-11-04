const CreateTravelForm = ("./views/form_views/travel/create_form.js")
const TravelFormView = ("./views/form_views/travel/travel_form_view.js");


document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript Loaded")

  // const travelForm = document.querySelector("form#travel-form")
  // const travelFormView = new CreateTravelForm(travelForm);
  // travelFormView.setupEventListeners();


  const form = document.createElement("form");
  form.classList.add('travel-form');

  header = document.createElement("h2");
  header.textContent = "Please enter travel details:"
  form.appendChild(header);

  // const carQuestion = this.createCarQuestion();
  // form.appendChild(carQuestion);

  // const publicTransportQuestion = this.createPublicTransportQuestion();
  // form.appendChild(publicTransportQuestion);
  //
  // const nonFootprintQuestion = this.createNonFootprintQuestion();
  // form.appendChild(nonFootprintQuestion);s
  //
  // const submitButton = this.createSubmitButton();
  // form.appendChild(submitButton);

  //
  // function createRadialButton (name, value, id, checked = false) {
  //   const button = document.createElement("input");
  //   button.type = "radio"
  //   button.name = name
  //   button.value = value
  //   button.checked = checked
  // }
  //
  //
  //
  // const carOptionOne
  // const car = carOptionOne.createRadialButton("car-miles", "0", "option-one", true);

  const carDiv = document.createElement("div");
  carDiv.classList.add("car-section");
  form.appendChild(carDiv)

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

  // <div class="radio">
  //   <input type="radio" name="car-miles-per-week" value="0" id="0" checked/>
  //   <label for="0">0</label>

  const submitButton = document.createElement("input");
  submitButton.type = "submit"
  submitButton.value = "Submit Travel Details"
  form.appendChild(submitButton);



  //ADD EVENT LISTENER FOR SUBMIT

  // this.element = form;
  const body = document.querySelector("body")
  body.appendChild(form);
});
