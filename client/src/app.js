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

  const submitButton = document.createElement("input");
  submitButton.type = "submit"
  submitButton.value = "Submit Travel Details"
  form.appendChild(submitButton);

  //ADD EVENT LISTENER FOR SUBMIT

  // this.element = form;
  const body = document.querySelector("body")
  body.appendChild(form);
});
