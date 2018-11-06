
const TravelForm = require("./views/form_views/travel/create_form.js")
const TravelFormView = require("./views/form_views/travel/travel_form_view.js");
const TravelCalculator = require("./models/travel.js")
const LifestyleView = require('./views/lifestyle_form_view.js');
const LifestyleModel = require('./models/lifestyle.js');

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

// const GridView = require('./views/grid_view.js');

  const container = document.querySelector('#forms-window');
  const lifestyleForm = new LifestyleView(container);
  lifestyleForm.bindEvents();

  const lifestyleValues = new LifestyleModel();
  lifestyleValues.getValues();

  // const gridContainer = document.querySelector('div#results');
  // const gridView = new GridView(gridcontainer);
  // gridView.bindEvents();
});
