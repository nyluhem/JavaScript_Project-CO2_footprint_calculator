const PubSub = require('../../helpers/pub_sub.js')

const FoodView = function (container) {
  this.container = container;
}

FoodView.prototype.bindEvents = function () {
  const menuItem = document.querySelector("#food-menu-item");
  menuItem.addEventListener("click", (event) => {
    this.createForm();
  });
};

FoodView.prototype.createForm = function () {
  event.preventDefault();
  this.container.innerHTML = "";
  const foodForm = document.createElement("form");
  foodForm.id = "food-form";

  header = document.createElement("h2");
  header.textContent = "ENTER FOOD DETAILS:"
  foodForm.appendChild(header);

 const diet = this.createLabel("Diet");
 foodForm.appendChild(diet);
 const dietQuestion = this.createQuestion("diet")
 foodForm.appendChild(dietQuestion);


 const vegetarian = this.createCheckbutton("vegetarian", "diet", "10")
 const vegetarianLabel = this.createLableforButton("Vegetarian")
 foodForm.appendChild(vegetarian);
 foodForm.appendChild(vegetarianLabel);
 //meat button
const meat = this.createCheckbutton("meat", "diet", "40");
const meatLabel = this.createLableforButton("Non Vegetarian")
foodForm.appendChild(meat);
foodForm.appendChild(meatLabel);


const preparation = this.createLabel("Preparation")
foodForm.appendChild(preparation);
const preparationQuestion = this.preparationQuestion()
foodForm.appendChild(preparationQuestion);

//homemade
const homemade = this.createCheckbutton("homemade", "preparation", "10");
const homemadeLabel = this.createLableforButton("Home Made")
foodForm.appendChild(homemade);
foodForm.appendChild(homemadeLabel);
// take away
const takeaway = this.createCheckbutton("takeaway", "preparation", "40");
const takeawayLabel = this.createLableforButton("Take Away")
foodForm.appendChild(takeaway);
foodForm.appendChild(takeawayLabel);

//SOURCE
const source = this.createLabel("Source")
foodForm.appendChild(source);
const sourceQuestion = this.sourceQuestion()
foodForm.appendChild(sourceQuestion);

//local
const local = this.createCheckbutton("local", "source", "10");
const localLabel = this.createLableforButton("Local")
foodForm.appendChild(local);
foodForm.appendChild(localLabel);
//imported
const imported = this.createCheckbutton("imported", "source", "40");
const importedLabel = this.createLableforButton("Imported")
foodForm.appendChild(imported);
foodForm.appendChild(importedLabel);

//SUBMIT BUTTON!
const submitButton = this.createSubmitButton();
foodForm.appendChild(submitButton);

foodForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const arrays = [meat.value, vegetarian.value, local.value, imported.value,takeaway.value,homemade.value];
  PubSub.publish("FoodForm:values", arrays);
  event.target.reset()
});

  //create
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
  lable.textContent = `${id}`;
  return lable;
};

FoodView.prototype.createCheckbutton = function (id, name, truevalue) {
  var button = document.createElement("input");
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
  button.value = "SUBMIT"
  return button
};

module.exports = FoodView;
