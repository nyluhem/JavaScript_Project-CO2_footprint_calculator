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
});
