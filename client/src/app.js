const TravelForm = require("./views/form_views/travel/create_form.js")
const TravelFormView = require("./views/form_views/travel/travel_form_view.js");


document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript Loaded")

  const formContainer = document.querySelector("div#travel-form-placement")
  const newForm = new TravelForm(formContainer);
  newForm.createForm;
  console.log(newForm.createForm)

//   const sightingsContainer = document.querySelector('div#sightings');
// const sightingsGridView = new SightingGridView(sightingsContainer);
// sightingsGridView.bindEvents();
//
//   // const travelForm = document.querySelector("div#travel-form-placement");
//   // const travelFormView = new TravelForm(travelForm)
//   // console.log(travelFormView)
//   // travelFormView.createForm;
//   // console.log(travelFormView)
//
//   const form = document.querySelector("form#nyalls")
//   const formView = new TravelForm(form);
//   console.log(formView)
//   const travelFormView = new TravelFormView(formView)
//   console.log(travelFormView)
//   travelFormView.setupEventListeners();

});
