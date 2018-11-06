<<<<<<< HEAD
const TravelForm = require("./views/form_views/travel/create_form.js")
const TravelFormView = require("./views/form_views/travel/travel_form_view.js");
const TravelCalculator = require("./models/travel.js")

document.addEventListener("DOMContentLoaded", () => {

  const formContainer = document.querySelector("div#travel-form-placement")
  const newForm = new TravelForm(formContainer);
  newForm.createForm();
  newForm.getResults();

  const form = document.querySelector("form#travel-form");
  const formView = new TravelFormView(form);
  formView.setupEventListeners();

  const travelCalculator = new TravelCalculator();
  travelCalculator.bindEvents();
=======
const PubSub = require('./helpers/pub_sub.js');
const LifestyleView = require('./views/lifestyle_form_view.js');
const LifestyleModel = require('./models/lifestyle.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log("And I knew exactly what to do. But in a much more real sense, I had no idea what to do.\n - Michael Scott");

  const container = document.querySelector('#forms-window');
  const lifestyleForm = new LifestyleView(container);
  lifestyleForm.bindEvents();

  const lifestyleValues = new LifestyleModel();
  lifestyleValues.getValues();
>>>>>>> 277847eb4471575141a4acdf2a9429eb3a2cc24e
});
