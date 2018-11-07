const PubSub = require('../../../helpers/pub_sub.js')

const FoodView = function (container) {
  this.container = container;
}

FoodView.prototype.bindEvents = function () {
  const menuItem = document.querySelector("#food-menu-item");
  menuItem.addEventListener("click", (event) => {
    this.createForm()
  });
};

FoodView.prototype.createForm = function () {
  const foodForm = document.createElement("form");
  foodForm.id = "food-form"

  header = document.createElement("h2");
  header.textContent = "ENTER FOOD DETAILS:"
  foodForm.appendChild(header);

  // Diet

  const dietDiv = document.createElement("div");
  dietDiv.classList.add('diet-section')

  const diet = this.createLabel("Diet");
  dietDiv.appendChild(diet);
  const dietQuestion = this.createQuestion("diet")
  dietDiv.appendChild(dietQuestion);

 //vegetarian button
  const vegetarian = this.createCheckbutton("vegetarian", "diet", "50")
  const vegetarianLabel = this.createLableforButton("Vegetarian")
  dietDiv.appendChild(vegetarian);
  dietDiv.appendChild(vegetarianLabel);
 //meat button
  const meat = this.createCheckbutton("meat", "diet", "0");
  const meatLabel = this.createLableforButton("Non Vegetarian")
  dietDiv.appendChild(meat);
  dietDiv.appendChild(meatLabel);
  foodForm.appendChild(dietDiv);

//PREPARATION
  const prepDiv = document.createElement("div");
  prepDiv.classList.add("prep-section");
  const preparation = this.createLabel("Preparation")
  prepDiv.appendChild(preparation);
  const preparationQuestion = this.preparationQuestion()
  prepDiv.appendChild(preparationQuestion);

//homemade
  const homemade = this.createCheckbutton("homemade", "preparation", "50");
  const homemadeLabel = this.createLableforButton("Homemade")
  prepDiv.appendChild(homemade);
  prepDiv.appendChild(homemadeLabel);
// take away
  const takeaway = this.createCheckbutton("takeaway", "preparation", "0");
  const takeawayLabel = this.createLableforButton("Take Away")
  prepDiv.appendChild(takeaway);
  prepDiv.appendChild(takeawayLabel);
  foodForm.appendChild(prepDiv);

//SOURCE
  const sourceDiv = document.createElement("div");
  sourceDiv.classList.add("source-section")
  const source = this.createLabel("Source")
  sourceDiv.appendChild(source);
  const sourceQuestion = this.sourceQuestion()
  sourceDiv.appendChild(sourceQuestion);

//local
  const local = this.createCheckbutton("local", "source", "50");
  const localLabel = this.createLableforButton("Local")
  sourceDiv.appendChild(local);
  sourceDiv.appendChild(localLabel);
//imported
  const imported = this.createCheckbutton("imported", "source", "0");
  const importedLabel = this.createLableforButton("Imported")
  sourceDiv.appendChild(imported);
  sourceDiv.appendChild(importedLabel);
  foodForm.appendChild(sourceDiv);

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
  question.textContent = `WHAT INGREDIANT WAS MAINLY USED:`
  return question
};

FoodView.prototype.preparationQuestion = function (){
  const question2 = document.createElement("p")
  question2.textContent = "HOW WAS THE FOOD PREPARED:"
  return question2
};

FoodView.prototype.sourceQuestion = function (){
  const question = document.createElement("p")
  question.textContent = "WHERE WAS THE FOOD SOURCED FROM:"
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
  button.value = "SUBMIT"
  return button
};

// FoodView.prototype.createEventListener = function () {
//   const
//
// };


module.exports = FoodView;
