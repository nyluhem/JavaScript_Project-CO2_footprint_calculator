const PubSub = require('./helpers/pub_sub.js');
const LifestyleView = require('./views/lifestyle_form_view.js');
const LifestyleModel = require('./models/lifestyle.js');
const FoodView = require('./views/food_form_view.js');
const FoodModel = require('./models/food.js');
const FoodFinalView = require('./views/food_final_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log("And I knew exactly what to do. But in a much more real sense, I had no idea what to do.\n - Michael Scott");

  const container = document.querySelector('#forms-window');
  const lifestyleForm = new LifestyleView(container);
  lifestyleForm.bindEvents();

  const lifestyleValues = new LifestyleModel();
  lifestyleValues.getValues();

// FOOD FORM
  const form = document.querySelector('#food-form-div')
  const newForm = new FoodView(form);
  const food = newForm.bindEvents();
  console.log(food);


  const foodValues = new FoodModel()
  console.log(foodValues);
  foodValues.getFormValues();

  const infoFood = document.querySelector("div#forms-window")
  const infoFoodInfo = new FoodFinalView(infoFood);
  infoFoodInfo.foodCarbon();



});
