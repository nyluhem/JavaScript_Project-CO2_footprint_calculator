const PubSub = require('../helpers/pub_sub.js')
const FoodModel = require('../models/food.js')

const FoodFinalView = function (element) {
  this.element = element;
}

FoodFinalView.prototype.foodCarbon = function (foodpoints) {
  PubSub.subscribe("FoodInfo", (event) => {
   const carbonPoints = event.detail;
   console.log(carbonPoints);
   this.render(carbonPoints);
  })
};

FoodFinalView.prototype.render = function (carbonPoints) {

  const div = document.createElement("div")
  div.id = "carbon-information"

  const carbonPointsInfo = document.createElement('h3');
  carbonPointsInfo.textContent = "You are allowed to meet 23,287 g CO2 / day"

  const carbonPointYouhave = document.createElement('p');
  carbonPointYouhave.textContent = `You spend ${carbonPoints} on food`
  const porcentage = Math.ceil((carbonPoints*100)/23287);
  const carbonPocentage = document.createElement('p');
  carbonPocentage.textContent =  `Which is ${porcentage} % of what should be consuming`
  this.element.innerHTML = "";

  // const resetButton = this.resetButton()


  div.appendChild(carbonPointsInfo);
  div.appendChild(carbonPointYouhave);
  div.appendChild(carbonPocentage);
  // div.appendChild(resetButton)


  // div.addEventListener('submit', (event) => {
  //   const carbonStuff = document.querySelector("div#forms-window")
  //   carbonStuff.innerHTML = ""
  // })

  const result = this.element.appendChild(div);
  console.log(result);
  return result
};

// FoodFinalView.prototype.resetButton = function () {
//   const button = document.createElement("input")
//   button.type = "reset"
//   button.value = "Reset Form"
//   const carbonStuff = document.querySelector("#carbon-information")
//   carbonStuff.addEventListener('submit', (event) =>{
//     console.log(event);
//     event.innerHTML = ""
//   })
//   return button
// };

module.exports = FoodFinalView;
