const PubSub = require('../../../helpers/pub_sub.js')

const FoodView = function (container) {
  this.container = container;
}

// FoodView.prototype.bindEvents = function () {
//   const menuItem = document.getElementById("food-menu-item");
//   const self = this;
//   menuItem.addEventListener('dbclick', function _listener(event) {
//     console.log("event.target",  event.target);
//     self.createForm();
//     menuItem.removeEventListener('dbclick', _listener);
//   });
// };

FoodView.prototype.bindEvents = function () {
  const menuItem = document.querySelector("#food-menu-item");
  menuItem.addEventListener("click", (event) => {
    this.createForm()
  });
};

FoodView.prototype.createForm = function () {
  const foodForm = document.createElement("form");
  foodForm.id = "food-form"

  // Diet
 const diet = this.createLabel("Diet");
 foodForm.appendChild(diet);
 const dietQuestion = this.createQuestion("diet")
 foodForm.appendChild(dietQuestion);

 //vegetarian button
 const vegetarian = this.createCheckbutton("vegetarian", "diet", "50")
 const vegetarianLabel = this.createLableforButton("Vegetarian")
 foodForm.appendChild(vegetarian);
 foodForm.appendChild(vegetarianLabel);
 //meat button
const meat = this.createCheckbutton("meat", "diet", "0");
const meatLabel = this.createLableforButton("Non Vegetarian")
foodForm.appendChild(meat);
foodForm.appendChild(meatLabel);

//PREPARATION
const preparation = this.createLabel("Preparation")
foodForm.appendChild(preparation);
const preparationQuestion = this.preparationQuestion()
foodForm.appendChild(preparationQuestion);

//homemade
const homemade = this.createCheckbutton("homemade", "preparation", "50");
const homemadeLabel = this.createLableforButton("Home Made")
foodForm.appendChild(homemade);
foodForm.appendChild(homemadeLabel);
// take away
const takeaway = this.createCheckbutton("takeaway", "preparation", "0");
const takeawayLabel = this.createLableforButton("Take Away")
foodForm.appendChild(takeaway);
foodForm.appendChild(takeawayLabel);

//SOURCE
const source = this.createLabel("Source")
foodForm.appendChild(source);
const sourceQuestion = this.sourceQuestion()
foodForm.appendChild(sourceQuestion);

//local
const local = this.createCheckbutton("local", "source", "50");
const localLabel = this.createLableforButton("Local")
foodForm.appendChild(local);
foodForm.appendChild(localLabel);
//imported
const imported = this.createCheckbutton("imported", "source", "0");
const importedLabel = this.createLableforButton("Imported")
foodForm.appendChild(imported);
foodForm.appendChild(importedLabel);

//SUBMIT BUTTON!
const submitButton = this.createSubmitButton();
// submitButton.addEventListener("submit", (event) =>{
//   event.preventDefault();
//   console.log(event);
//   const submittInformation = event.target;
//   PubSub.publish("FoodForm:Inputted/Information", submittInformation)
//   console.log(submittInformation)
// })
foodForm.appendChild(submitButton);

foodForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const arrays = [meat.value, vegetarian.value, local.value, imported.value,takeaway.value,homemade.value]
  // console.log(arrays);
  PubSub.publish("FoodForm:values", arrays);
  foodForm.innerHTML = '';
})




  //create
  this.container.innerHTML = "";
  const newForm = this.container.appendChild(foodForm);
};

FoodView.prototype.createLabel = function (text, id) {
  const detail = document.createElement("label");
  detail.id = id
  return detail;
};

FoodView.prototype.createQuestion = function (text) {
  const question = document.createElement("p");
  question.textContent = `What describes your daily ${text}:`
  return question
};

FoodView.prototype.preparationQuestion = function (){
  const question2 = document.createElement("p")
  question2.textContent = "How do you mostly prepare your food:"
  return question2
};

FoodView.prototype.sourceQuestion = function (){
  const question = document.createElement("p")
  question.textContent = "Where do you mostly source your food:"
  return question
};


FoodView.prototype.createLableforButton = function (id) {
  const lable = document.createElement("lable");
  lable.id = id;
  lable.textContent = `${id}`
  return lable;

};

FoodView.prototype.createCheckbutton = function (id, name, truevalue) {
  var button = document.createElement("input")
  button.type = "radio";
  button.id = id;
  button.name = name;
  button.value = 0;


  button.addEventListener('click', () =>{
    if (!button.checked) {
      button.value = 0;
    }else{
      button.value = truevalue;
    }
  })
  return button
};

FoodView.prototype.createSubmitButton = function () {
  const button = document.createElement("input")
  button.type = "submit"
  button.value = "save"
  return button
};

// FoodView.prototype.createEventListener = function () {
//   const
//
// };


module.exports = FoodView;
