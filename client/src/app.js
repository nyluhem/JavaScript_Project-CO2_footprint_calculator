const TravelForm = require("./views/form_views/travel/create_form.js")
const TravelFormView = require("./views/form_views/travel/travel_form_view.js");


document.addEventListener("DOMContentLoaded", () => {

  const formContainer = document.querySelector("div#travel-form-placement")
  const newForm = new TravelForm(formContainer);
  newForm.createForm();

  const form = document.querySelector("form#travel-form");
  const formView = new TravelFormView(form);
  formView.setupEventListeners();


});
