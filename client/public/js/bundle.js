/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.js":
/*!***************************!*\
  !*** ./client/src/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const TravelForm = __webpack_require__(/*! ./views/form_views/create_form.js */ \"./client/src/views/form_views/create_form.js\")\nconst TravelCalculator = __webpack_require__(/*! ./models/travel.js */ \"./client/src/models/travel.js\")\nconst LifestyleView = __webpack_require__(/*! ./views/form_views/lifestyle_form_view.js */ \"./client/src/views/form_views/lifestyle_form_view.js\");\nconst LifestyleModel = __webpack_require__(/*! ./models/lifestyle.js */ \"./client/src/models/lifestyle.js\");\nconst FoodView = __webpack_require__(/*! ./views/form_views/food/food_form_view.js */ \"./client/src/views/form_views/food/food_form_view.js\");\nconst FoodModel = __webpack_require__(/*! ./models/food.js */ \"./client/src/models/food.js\");\nconst FoodFinalView = __webpack_require__(/*! ./views/form_views/food/food_final_view.js */ \"./client/src/views/form_views/food/food_final_view.js\");\nconst Total = __webpack_require__(/*! ./models/total.js */ \"./client/src/models/total.js\");\nconst PubSub = __webpack_require__(/*! ./helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n\n  const formContainer = document.querySelector(\"#forms-window\")\n  const newFormTravel = new TravelForm(formContainer);\n  newFormTravel.bindEvents();\n  newFormTravel.getResults();\n\n  const travelCalculator = new TravelCalculator();\n  travelCalculator.bindEvents();\n\n\n  const container = document.querySelector('#forms-window');\n  const lifestyleForm = new LifestyleView(container);\n  lifestyleForm.bindEvents();\n\n  const lifestyleValues = new LifestyleModel();\n  lifestyleValues.getValues();\n\n  const form = document.querySelector('#forms-window')\n  const newForm = new FoodView(form);\n  const food = newForm.bindEvents();\n  console.log(food);\n\n\n  const foodValues = new FoodModel()\n  console.log(foodValues);\n  foodValues.getFormValues();\n\n  // const infoFood = document.querySelector(\"div#food-forms-window\")\n  // const infoFoodInfo = new FoodFinalView(infoFood);\n  // infoFoodInfo.foodCarbon();\n\n  const total = new Total();\n  total.bindEvents();\n\n  // const formTravel = document.querySelector(\"form#travel-form\");\n  // const formViewTravel = new TravelFormView(formTravel);\n  // formViewTravel.setupEventListeners();\n});\n\n  // const gridContainer = document.querySelector('div#results');\n  // const gridView = new GridView(gridcontainer);\n  // gridView.bindEvents();\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ }),

/***/ "./client/src/helpers/pub_sub.js":
/*!***************************************!*\
  !*** ./client/src/helpers/pub_sub.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n    // console.log(`channel: ${channel}, payload: ${payload}`);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n    // console.log(`channel: ${channel}`);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./client/src/helpers/pub_sub.js?");

/***/ }),

/***/ "./client/src/helpers/request_helper.js":
/*!**********************************************!*\
  !*** ./client/src/helpers/request_helper.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const RequestHelper = function (url) {\n  this.url = url;\n};\n\nRequestHelper.prototype.get = function () {\n  return fetch(this.url)\n    .then((response) => response.json());\n};\n\nRequestHelper.prototype.post = function (payload) {\n  return fetch(this.url, {\n    method: 'POST',\n    body: JSON.stringify(payload),\n    headers: { 'Content-Type': 'application/json' }\n  })\n    .then((response) => response.json());\n};\n\nRequestHelper.prototype.delete = function (id) {\n  return fetch(`${this.url}/${id}`, {\n    method: 'DELETE'\n  })\n    .then((response) => response.json());\n};\n\nmodule.exports = RequestHelper;\n\n\n//# sourceURL=webpack:///./client/src/helpers/request_helper.js?");

/***/ }),

/***/ "./client/src/models/food.js":
/*!***********************************!*\
  !*** ./client/src/models/food.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst FoodModel = function() {\n  this.formvalues = []\n}\n\nFoodModel.prototype.getFormValues = function () {\n  PubSub.subscribe(\"FoodForm:values\", (event) => {\n   const foodValues = event.detail;\n   // console.log(foodValues);\n   const new2 = this.getValue(foodValues);\n   const result = new2;\n   console.log(result);\n   PubSub.publish(\"FoodInfo\", result);\n  });\n};\n\nFoodModel.prototype.getValue = function (values) {\n  const integers = values.map((str) => parseInt(str));\n  // console.log(integers);\n  const sum = integers.reduce((total,amount) => total + amount);\n  return sum;\n};\n\n\n\n\nmodule.exports = FoodModel;\n\n\n//# sourceURL=webpack:///./client/src/models/food.js?");

/***/ }),

/***/ "./client/src/models/lifestyle.js":
/*!****************************************!*\
  !*** ./client/src/models/lifestyle.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst LifestyleModel = function() {\n  this.values = [];\n};\n\nLifestyleModel.prototype.getValues = function () {\n  PubSub.subscribe('LifestyleView:values', (event) => {\n    const checkedValues = event.detail;\n    const total = this.add(checkedValues);\n    PubSub.publish('LifestyleView:result', total);\n  });\n\n};\n\nLifestyleModel.prototype.add = function (values) {\n  const arrayOfIntegers = values.map(value => parseInt(value));\n  const reducer = (accumulator, currentValue) => accumulator + currentValue;\n  const result = arrayOfIntegers.reduce(reducer);\n  return result;\n};\n\nmodule.exports = LifestyleModel;\n\n\n//# sourceURL=webpack:///./client/src/models/lifestyle.js?");

/***/ }),

/***/ "./client/src/models/total.js":
/*!************************************!*\
  !*** ./client/src/models/total.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n// const Highcharts = require('highcharts');\n\nconst Total = function() {\n  this.values = {food: 0, travel: 0, lifestyle: 0};\n};\n\nTotal.prototype.bindEvents = function () {\n\n  PubSub.subscribe('FoodInfo', (event) => {\n    console.log('Results from food form', event.detail);\n    const foodData = event.detail;\n    this.values.food = parseInt(foodData)\n  });\n\n  PubSub.subscribe('TravelForm:display-results', (event) => {\n    console.log('Results from travel form', event.detail);\n    const travelData = event.detail;\n    this.values.travel = parseInt(travelData)\n  });\n\n  PubSub.subscribe('LifestyleView:result', (event) => {\n    console.log('Results from lifestyle form', event.detail);\n    const lifestyleData = event.detail;\n    this.values.lifestyle = parseInt(lifestyleData)\n  });\n\n  const button = document.querySelector('#clicky-button');\n\n  button.addEventListener('click', () => {\n    const result = this.calculateTotal();\n    console.log(result);\n    PubSub.publish(\"PublishView:final-result\", result);\n    // need to subscribe to this in results view\n  });\n\n};\n\nTotal.prototype.calculateTotal = function () {\n  const array = Object.values(this.values)\n  const reducer = (accumulator, currentValue) => accumulator + currentValue;\n  const result = array.reduce(reducer);\n\n  return result;\n};\n\n\n\n\nmodule.exports = Total;\n\n\n//# sourceURL=webpack:///./client/src/models/total.js?");

/***/ }),

/***/ "./client/src/models/travel.js":
/*!*************************************!*\
  !*** ./client/src/models/travel.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./client/src/helpers/request_helper.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst TravelCalculator = function (){\n\n};\n\n  TravelCalculator.prototype.bindEvents = function () {\n    PubSub.subscribe('TravelModel:send-values-array', (evt) => {\n      const array = evt.detail\n      const travelPoints = this.calculateTotal(array)\n      PubSub.publish(\"TravelForm:display-results\", travelPoints);\n    });\n  };\n\n  TravelCalculator.prototype.calculateTotal = function (array) {\n    const mappedArray = this.mapArray(array);\n    const sumOfArray = this.sum(mappedArray);\n    return sumOfArray;\n  };\n\n  TravelCalculator.prototype.mapArray = function (array) {\n    const mappedArray = array.map(x => parseInt(x))\n    return mappedArray\n  };\n\n  TravelCalculator.prototype.sum = function (array) {\n    const reducer = (accumulator, currentValue) => accumulator + currentValue;\n    const sumOfArray = array.reduce(reducer);\n    return sumOfArray\n  };\n\nmodule.exports = TravelCalculator\n\n\n//# sourceURL=webpack:///./client/src/models/travel.js?");

/***/ }),

/***/ "./client/src/views/form_views/create_form.js":
/*!****************************************************!*\
  !*** ./client/src/views/form_views/create_form.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst CreateTravelForm = function(container) {\n  this.container = container\n};\n\nCreateTravelForm.prototype.getResults = function () {\n  PubSub.subscribe(\"TravelForm:display-results\", (evt) => {\n    const totalPoints = evt.detail\n    const results = this.displayResults(totalPoints)\n    return results\n  });\n};\n\nCreateTravelForm.prototype.displayResults = function (value) {\n  const points = document.createElement(\"h1\");\n  points.innerHTML = \"\"\n  points.textContent = `${value}`\n  return points\n};\n\nCreateTravelForm.prototype.bindEvents = function () {\n  const menuItem = document.querySelector(\"#travel-menu-item\");\n  menuItem.addEventListener(\"click\", (event) => {\n    this.createForm();\n  });\n};\n\nCreateTravelForm.prototype.createForm = function () {\n  event.preventDefault();\n  this.container.innerHTML = \"\"\n\n  const travelForm = document.createElement(\"form\");\n  console.log(\"created travel-form\", travelForm);\n\n  travelForm.classList.add('travel-form');\n  travelForm.id = (\"travel-form\");\n\n  header = document.createElement(\"h2\");\n  header.textContent = \"ENTER TRAVEL DETAILS:\"\n  travelForm.appendChild(header);\n\n  const carQuestion = this.createCarQuestion();\n  travelForm.appendChild(carQuestion);\n\n  const publicTransportQuestion = this.createPublicTransportQuestion();\n  travelForm.appendChild(publicTransportQuestion);\n\n  const nonFootprintQuestion = this.createNonFootprintQuestion();\n  travelForm.appendChild(nonFootprintQuestion);\n\n  const submitButton = this.createSubmitButton();\n  travelForm.appendChild(submitButton);\n\n  this.handleSubmit(travelForm);\n\n  const newForm = this.container.appendChild(travelForm)\n  console.log(newForm)\n  return newForm;\n};\n\nCreateTravelForm.prototype.createCarQuestion = function () {\n  const carDiv = document.createElement(\"div\");\n  carDiv.classList.add(\"car-section\");\n\n  const carHeader = document.createElement(\"p\");\n  carHeader.textContent = \"PERSONAL MOTOR\";\n  carDiv.appendChild(carHeader)\n\n  const carQuestion = document.createElement(\"p\");\n  carQuestion.textContent = \"How many miles a week do you drive:\"\n  carDiv.appendChild(carQuestion)\n\n  const carOptionOne = this.createRadioButton(\"car-miles\", \"0\", \"car-option-one\");\n  const labelCarOptionOne = this.createLabel(\"0\", \"car-option-one\");\n\n  carDiv.appendChild(carOptionOne)\n  carDiv.appendChild(labelCarOptionOne)\n\n  const carOptionTwo = this.createRadioButton(\"car-miles\", \"10\", \"car-option-two\");\n  const labelCarOptionTwo = this.createLabel(\"1-10\", \"car-option-two\");\n\n  carDiv.appendChild(carOptionTwo)\n  carDiv.appendChild(labelCarOptionTwo)\n\n  const carOptionThree = this.createRadioButton(\"car-miles\", \"20\", \"car-option-three\");\n  const labelCarOptionThree = this.createLabel(\"11-20\", \"car-option-three\");\n\n  carDiv.appendChild(carOptionThree)\n  carDiv.appendChild(labelCarOptionThree)\n\n  const carOptionFour = this.createRadioButton(\"car-miles\", \"30\", \"car-option-four\");\n  const labelCarOptionFour = this.createLabel(\"20+\", \"car-option-four\");\n\n  carDiv.appendChild(carOptionFour)\n  carDiv.appendChild(labelCarOptionFour)\n\n  return carDiv\n  console.log(carDiv)\n};\n\nCreateTravelForm.prototype.createPublicTransportQuestion = function () {\n  const busDiv = document.createElement(\"div\");\n  busDiv.classList.add(\"bus-section\");\n\n  const busHeader = document.createElement(\"p\");\n  busHeader.textContent = \"PUBLIC TRANSPORT\";\n  busDiv.appendChild(busHeader)\n\n  const busQuestion = document.createElement(\"p\");\n  busQuestion.textContent = \"How many miles a week do you travel on Public Transport:\"\n  busDiv.appendChild(busQuestion)\n\n  const busOptionOne = this.createRadioButton(\"bus-miles\", \"0\", \"bus-option-one\");\n  const labelBusOptionOne = this.createLabel(\"0\", \"bus-option-one\");\n\n  busDiv.appendChild(busOptionOne)\n  busDiv.appendChild(labelBusOptionOne)\n\n  const busOptionTwo = this.createRadioButton(\"bus-miles\", \"5\", \"bus-option-two\");\n  const labelBusOptionTwo = this.createLabel(\"1-10\", \"bus-option-two\");\n\n  busDiv.appendChild(busOptionTwo)\n  busDiv.appendChild(labelBusOptionTwo)\n\n  const busOptionThree = this.createRadioButton(\"bus-miles\", \"10\", \"bus-option-three\");\n  const labelBusOptionThree = this.createLabel(\"11-20\", \"bus-option-three\");\n\n  busDiv.appendChild(busOptionThree)\n  busDiv.appendChild(labelBusOptionThree)\n\n  const busOptionFour = this.createRadioButton(\"bus-miles\", \"15\", \"bus-option-four\");\n  const labelBusOptionFour = this.createLabel(\"20+\", \"bus-option-four\");\n\n  busDiv.appendChild(busOptionFour)\n  busDiv.appendChild(labelBusOptionFour)\n\n  return busDiv\n};\n\nCreateTravelForm.prototype.createNonFootprintQuestion = function () {\n  const bikeDiv = document.createElement(\"div\");\n  bikeDiv.classList.add(\"bike-section\");\n\n  const bikeHeader = document.createElement(\"p\");\n  bikeHeader.textContent = \"CYCLE / WALK\";\n  bikeDiv.appendChild(bikeHeader)\n\n  const bikeQuestion = document.createElement(\"p\");\n  bikeQuestion.textContent = \"Do you cycle or walk to work (if you cycle/walk some of the way as part of your journey then please also calculate mileage of public/private transport):\"\n  bikeDiv.appendChild(bikeQuestion)\n\n  const bikeOptionOne = this.createRadioButton(\"bike-miles\", \"0\", \"bike-option-one\");\n  const labelBikeOptionOne = this.createLabel(\"Yes\", \"bike-option-one\");\n\n  bikeDiv.appendChild(bikeOptionOne)\n  bikeDiv.appendChild(labelBikeOptionOne)\n\n  const bikeOptionTwo = this.createRadioButton(\"bike-miles\", \"0\", \"bike-option-two\");\n  const labelBikeOptionTwo = this.createLabel(\"No\", \"bike-option-two\");\n\n  bikeDiv.appendChild(bikeOptionTwo)\n  bikeDiv.appendChild(labelBikeOptionTwo)\n\n  return bikeDiv\n\n};\n\nCreateTravelForm.prototype.createSubmitButton = function () {\n  const submitButton = document.createElement(\"input\");\n  submitButton.classList.add(\"submit\");\n  submitButton.type = \"submit\"\n  submitButton.value = \"SUBMIT\"\n\n  return submitButton;\n};\n\n  CreateTravelForm.prototype.createRadioButton = function (name, value, id) {\n    const detail = document.createElement(\"input\");\n    detail.classList.add('checkmark')\n    detail.type = \"radio\"\n    detail.name = `${name}`\n    detail.value = `${value}`\n    detail.id = `${id}`\n\n    return detail\n  };\n\n  CreateTravelForm.prototype.createLabel = function (textContent, id) {\n    const detail = document.createElement(\"label\");\n    detail.textContent = `${textContent}`\n    detail.id = `${id}`\n\n    return detail\n  };\n\n  CreateTravelForm.prototype.handleSubmit = function (formInput) {\n    formInput.addEventListener(\"submit\", (event) => {\n      event.preventDefault();\n      const form = event.target;\n      const answerArray = this.getValues();\n      console.log(answerArray)\n      PubSub.publish(\"TravelModel:send-values-array\", answerArray);\n      form.reset()\n    });\n  };\n\n  CreateTravelForm.prototype.getValues = function () {\n    const answerArray = [];\n    const carAnswer = document.querySelector('input[name=\"car-miles\"]:checked').value;\n    const busAnswer = document.querySelector('input[name=\"bus-miles\"]:checked').value;\n    const bikeAnswer = document.querySelector('input[name=\"bike-miles\"]:checked').value;\n\n    answerArray.push(carAnswer, busAnswer, bikeAnswer);\n    return answerArray\n  };\n\nmodule.exports = CreateTravelForm;\n\n\n//# sourceURL=webpack:///./client/src/views/form_views/create_form.js?");

/***/ }),

/***/ "./client/src/views/form_views/food/food_final_view.js":
/*!*************************************************************!*\
  !*** ./client/src/views/form_views/food/food_final_view.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../../../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\nconst FoodModel = __webpack_require__(/*! ../../../models/food.js */ \"./client/src/models/food.js\")\n\nconst FoodFinalView = function (element) {\n  this.element = element;\n}\n\nFoodFinalView.prototype.foodCarbon = function (foodpoints) {\n  PubSub.subscribe(\"FoodInfo\", (event) => {\n   const carbonPoints = event.detail;\n   // console.log(carbonPoints);\n   this.render(carbonPoints);\n  })\n};\n\nFoodFinalView.prototype.render = function (carbonPoints) {\n\n  const div = document.createElement(\"div\")\n  div.id = \"carbon-information\"\n\n  const carbonPointsInfo = document.createElement('h3');\n  carbonPointsInfo.textContent = \"You are allowed to meet 23,287 g CO2 / day\"\n\n  const carbonPointYouhave = document.createElement('p');\n  carbonPointYouhave.textContent = `You spend ${carbonPoints} on food`\n  const porcentage = Math.ceil((carbonPoints*100)/23287);\n  const carbonPocentage = document.createElement('p');\n  carbonPocentage.textContent =  `Which is ${porcentage} % of what should be consuming`\n  this.element.innerHTML = \"\";\n\n  // const resetButton = this.resetButton()\n\n\n  div.appendChild(carbonPointsInfo);\n  div.appendChild(carbonPointYouhave);\n  div.appendChild(carbonPocentage);\n  // div.appendChild(resetButton)\n\n\n  // div.addEventListener('submit', (event) => {\n  //   const carbonStuff = document.querySelector(\"div#forms-window\")\n  //   carbonStuff.innerHTML = \"\"\n  // })\n\n  const result = this.element.appendChild(div);\n  console.log(result);\n  return result\n};\n\n// FoodFinalView.prototype.resetButton = function () {\n//   const button = document.createElement(\"input\")\n//   button.type = \"reset\"\n//   button.value = \"Reset Form\"\n//   const carbonStuff = document.querySelector(\"#carbon-information\")\n//   carbonStuff.addEventListener('submit', (event) =>{\n//     console.log(event);\n//     event.innerHTML = \"\"\n//   })\n//   return button\n// };\n\nmodule.exports = FoodFinalView;\n\n\n//# sourceURL=webpack:///./client/src/views/form_views/food/food_final_view.js?");

/***/ }),

/***/ "./client/src/views/form_views/food/food_form_view.js":
/*!************************************************************!*\
  !*** ./client/src/views/form_views/food/food_form_view.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../../../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\n\nconst FoodView = function (container) {\n  this.container = container;\n}\n\nFoodView.prototype.bindEvents = function () {\n  const menuItem = document.querySelector(\"#food-menu-item\");\n  menuItem.addEventListener(\"click\", (event) => {\n    this.createForm()\n  });\n};\n\nFoodView.prototype.createForm = function () {\n  const foodForm = document.createElement(\"form\");\n  foodForm.id = \"food-form\"\n\n  header = document.createElement(\"h2\");\n  header.textContent = \"ENTER FOOD DETAILS:\"\n  foodForm.appendChild(header);\n\n  // Diet\n\n  const dietDiv = document.createElement(\"div\");\n  dietDiv.classList.add('diet-section')\n\n  const diet = this.createLabel(\"Diet\");\n  dietDiv.appendChild(diet);\n  const dietQuestion = this.createQuestion(\"diet\")\n  dietDiv.appendChild(dietQuestion);\n\n //vegetarian button\n  const vegetarian = this.createCheckbutton(\"vegetarian\", \"diet\", \"50\")\n  const vegetarianLabel = this.createLableforButton(\"Vegetarian\")\n  dietDiv.appendChild(vegetarian);\n  dietDiv.appendChild(vegetarianLabel);\n //meat button\n  const meat = this.createCheckbutton(\"meat\", \"diet\", \"0\");\n  const meatLabel = this.createLableforButton(\"Non Vegetarian\")\n  dietDiv.appendChild(meat);\n  dietDiv.appendChild(meatLabel);\n  foodForm.appendChild(dietDiv);\n\n//PREPARATION\n  const prepDiv = document.createElement(\"div\");\n  prepDiv.classList.add(\"prep-section\");\n  const preparation = this.createLabel(\"Preparation\")\n  prepDiv.appendChild(preparation);\n  const preparationQuestion = this.preparationQuestion()\n  prepDiv.appendChild(preparationQuestion);\n\n//homemade\n  const homemade = this.createCheckbutton(\"homemade\", \"preparation\", \"50\");\n  const homemadeLabel = this.createLableforButton(\"Homemade\")\n  prepDiv.appendChild(homemade);\n  prepDiv.appendChild(homemadeLabel);\n// take away\n  const takeaway = this.createCheckbutton(\"takeaway\", \"preparation\", \"0\");\n  const takeawayLabel = this.createLableforButton(\"Take Away\")\n  prepDiv.appendChild(takeaway);\n  prepDiv.appendChild(takeawayLabel);\n  foodForm.appendChild(prepDiv);\n\n//SOURCE\n  const sourceDiv = document.createElement(\"div\");\n  sourceDiv.classList.add(\"source-section\")\n  const source = this.createLabel(\"Source\")\n  sourceDiv.appendChild(source);\n  const sourceQuestion = this.sourceQuestion()\n  sourceDiv.appendChild(sourceQuestion);\n\n//local\n  const local = this.createCheckbutton(\"local\", \"source\", \"50\");\n  const localLabel = this.createLableforButton(\"Local\")\n  sourceDiv.appendChild(local);\n  sourceDiv.appendChild(localLabel);\n//imported\n  const imported = this.createCheckbutton(\"imported\", \"source\", \"0\");\n  const importedLabel = this.createLableforButton(\"Imported\")\n  sourceDiv.appendChild(imported);\n  sourceDiv.appendChild(importedLabel);\n  foodForm.appendChild(sourceDiv);\n\n//SUBMIT BUTTON!\nconst submitButton = this.createSubmitButton();\n// submitButton.addEventListener(\"submit\", (event) =>{\n//   event.preventDefault();\n//   console.log(event);\n//   const submittInformation = event.target;\n//   PubSub.publish(\"FoodForm:Inputted/Information\", submittInformation)\n//   console.log(submittInformation)\n// })\nfoodForm.appendChild(submitButton);\n\nfoodForm.addEventListener('submit', (event) => {\n  event.preventDefault();\n  const arrays = [meat.value, vegetarian.value, local.value, imported.value,takeaway.value,homemade.value]\n  // console.log(arrays);\n  PubSub.publish(\"FoodForm:values\", arrays);\n})\n\n\n\n\n  //create\n  this.container.innerHTML = \"\";\n  const newForm = this.container.appendChild(foodForm);\n};\n\nFoodView.prototype.createLabel = function (text, id) {\n  const detail = document.createElement(\"label\");\n  detail.id = id\n  return detail;\n};\n\nFoodView.prototype.createQuestion = function (text) {\n  const question = document.createElement(\"p\");\n  question.textContent = `WHAT INGREDIANT WAS MAINLY USED:`\n  return question\n};\n\nFoodView.prototype.preparationQuestion = function (){\n  const question2 = document.createElement(\"p\")\n  question2.textContent = \"HOW WAS THE FOOD PREPARED:\"\n  return question2\n};\n\nFoodView.prototype.sourceQuestion = function (){\n  const question = document.createElement(\"p\")\n  question.textContent = \"WHERE WAS THE FOOD SOURCED FROM:\"\n  return question\n};\n\n\nFoodView.prototype.createLableforButton = function (id) {\n  const lable = document.createElement(\"lable\");\n  lable.id = id;\n  lable.textContent = `${id}`\n  return lable;\n\n};\n\nFoodView.prototype.createCheckbutton = function (id, name, truevalue) {\n  var button = document.createElement(\"input\")\n  button.type = \"radio\";\n  button.id = id;\n  button.name = name;\n  button.value = 0;\n\n\n  button.addEventListener('click', () =>{\n    if (!button.checked) {\n      button.value = 0;\n    }else{\n      button.value = truevalue;\n    }\n  })\n  return button\n};\n\nFoodView.prototype.createSubmitButton = function () {\n  const button = document.createElement(\"input\")\n  button.type = \"submit\"\n  button.value = \"SUBMIT\"\n  return button\n};\n\n// FoodView.prototype.createEventListener = function () {\n//   const\n//\n// };\n\n\nmodule.exports = FoodView;\n\n\n//# sourceURL=webpack:///./client/src/views/form_views/food/food_form_view.js?");

/***/ }),

/***/ "./client/src/views/form_views/lifestyle_form_view.js":
/*!************************************************************!*\
  !*** ./client/src/views/form_views/lifestyle_form_view.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst LifestyleView = function(container) {\n  this.container = container;\n};\n\nLifestyleView.prototype.bindEvents = function () {\n  const menuItem = document.querySelector('#lifestyle-menu-item');\n  menuItem.addEventListener('click', (event) => {\n    this.createForm();\n  });\n};\n\nLifestyleView.prototype.createForm = function () {\n  event.preventDefault();\n  this.container.innerHTML = '';\n\n  const lifestyleForm = document.createElement('form');\n  lifestyleForm.id = 'lifestyle-form';\n\n  header = document.createElement(\"h2\");\n  header.textContent = \"ENTER LIFESTYLE DETAILS:\"\n  lifestyleForm.appendChild(header);\n\n  clothesQuestion = document.createElement(\"p\");\n  clothesQuestion.textContent = \"CLOTHES:\"\n  lifestyleForm.appendChild(clothesQuestion);\n\n  // const clothesLabel = this.createLabel(\"Clothes\");\n  // const clothes = this.createInput(\"checkbox\", \"1\", \"Clothes\")\n\n  const tShirtLabel = this.createLabel('T-Shirt');\n  const tShirt = this.createInput('checkbox', '2', '`T-Shirt`');\n\n  const trousersLabel = this.createLabel('Trousers');\n  const trousers = this.createInput('checkbox', '4', 'Trousers');\n\n  const coatLabel = this.createLabel('Coat');\n  const coat = this.createInput('checkbox', '5', '`Coat`');\n\n  const jumperLabel = this.createLabel('Jumper');\n  const jumper = this.createInput('checkbox', '3', '`Jumper`');\n\n  const underwearLabel = this.createLabel('Underwear');\n  const underwear = this.createInput('checkbox', '1', '`Underwear`');\n\n  const clothesDiv = document.createElement('div');\n  clothesDiv.classList.add(\"clothes-section\");\n  // clothesDiv.appendChild(clothes);\n  // clothesDiv.appendChild(clothesLabel);\n\n  clothesDiv.appendChild(tShirtLabel);\n  clothesDiv.appendChild(tShirt);\n\n  clothesDiv.appendChild(trousersLabel);\n  clothesDiv.appendChild(trousers);\n\n  clothesDiv.appendChild(coatLabel);\n  clothesDiv.appendChild(coat);\n\n  clothesDiv.appendChild(jumperLabel);\n  clothesDiv.appendChild(jumper);\n\n  clothesDiv.appendChild(underwearLabel);\n  clothesDiv.appendChild(underwear);\n\n  lifestyleForm.appendChild(clothesDiv);\n\n  cosmeticsQuestion = document.createElement(\"p\");\n  cosmeticsQuestion.textContent = \"COSMETICS:\"\n  lifestyleForm.appendChild(cosmeticsQuestion);\n\n  // const cosmeticsLabel = this.createLabel('Cosmetics');\n  // const cosmetics = this.createInput('checkbox', '2', 'cosmetics');\n\n  const deodorantLabel = this.createLabel('Deodorant');\n  const deodorant = this.createInput('checkbox', '2', '`deodorant`');\n\n  const beautyLabel = this.createLabel('Beauty');\n  const beauty = this.createInput('checkbox', '3', '`beauty`');\n\n  const skincareLabel = this.createLabel('Skincare');\n  const skincare = this.createInput('checkbox', '5', '`skincare`');\n\n  const toiletriesLabel = this.createLabel('Toiletries');\n  const toiletries = this.createInput('checkbox', '1', '`toiletries`');\n\n  const cosmeticsDiv = document.createElement('div');\n  cosmeticsDiv.classList.add(\"cosmetics-section\");\n  // cosmeticsDiv.appendChild(cosmetics);\n  // cosmeticsDiv.appendChild(cosmeticsLabel);\n\n  cosmeticsDiv.appendChild(deodorant);\n  cosmeticsDiv.appendChild(deodorantLabel);\n\n  cosmeticsDiv.appendChild(beauty);\n  cosmeticsDiv.appendChild(beautyLabel);\n\n  cosmeticsDiv.appendChild(skincare);\n  cosmeticsDiv.appendChild(skincareLabel);\n\n  cosmeticsDiv.appendChild(toiletries);\n  cosmeticsDiv.appendChild(toiletriesLabel);\n\n  lifestyleForm.appendChild(cosmeticsDiv);\n\n  electronicsQuestion = document.createElement(\"p\");\n  electronicsQuestion.textContent = \"ELECTRONICS:\"\n  lifestyleForm.appendChild(electronicsQuestion);\n\n  // const electronicsLabel = this.createLabel('Electronics');\n  // const electronics = this.createInput('checkbox', '3', 'electronics');\n\n  const largeApplianceLabel = this.createLabel('Large Appliances');\n  const largeAppliance = this.createInput('checkbox', '5', 'largeAppliance');\n\n  const smallApplianceLabel = this.createLabel('Small Appliances');\n  const smallAppliance = this.createInput('checkbox', '2', 'smallAppliance');\n\n  const mediaLabel = this.createLabel('Media');\n  const media = this.createInput('checkbox', '4', 'media');\n\n  const personalLabel = this.createLabel('Personal Appliances');\n  const personal = this.createInput('checkbox', '3', 'personal');\n\n\n  const electronicsDiv  = document.createElement('div');\n  electronicsDiv.classList.add(\"electronics-section\");\n  // electronicsDiv.appendChild(electronics);\n  // electronicsDiv.appendChild(electronicsLabel);\n\n  electronicsDiv.appendChild(largeAppliance);\n  electronicsDiv.appendChild(largeApplianceLabel);\n\n  electronicsDiv.appendChild(smallAppliance);\n  electronicsDiv.appendChild(smallApplianceLabel);\n\n  electronicsDiv.appendChild(media);\n  electronicsDiv.appendChild(mediaLabel);\n\n  electronicsDiv.appendChild(personal);\n  electronicsDiv.appendChild(personalLabel);\n\n  lifestyleForm.appendChild(electronicsDiv);\n\n\n\n\n  const button = this.createButton();\n  lifestyleForm.appendChild(button);\n\n  lifestyleForm.addEventListener('submit', (event) => {\n    event.preventDefault();\n    const arrayOfValues =\n      [ tShirt.value,\n        trousers.value,\n        coat.value,\n        jumper.value,\n        underwear.value,\n        deodorant.value,\n        toiletries.value,\n        beauty.value,\n        skincare.value,\n        largeAppliance.value,\n        smallAppliance.value,\n        media.value,\n        personal.value];\n    console.log(arrayOfValues)\n    PubSub.publish('LifestyleView:values', arrayOfValues);\n  });\n\n  this.container.appendChild(lifestyleForm);\n};\n\nLifestyleView.prototype.createLabel = function (text) {\n  const label = document.createElement('label');\n  label.textContent = text;\n  return label;\n};\n\nLifestyleView.prototype.createInput = function (type, points, id) {\n  const inputElement = document.createElement('input');\n  inputElement.type = type;\n  inputElement.id = id;\n  inputElement.value = 0;\n\n  inputElement.addEventListener('click', () => {\n    if (!inputElement.checked) {\n      inputElement.value = 0;\n    } else {\n      inputElement.value = points;\n    };\n  })\n\n  return inputElement;\n};\n\nLifestyleView.prototype.createButton = function () {\n  const button = document.createElement('input');\n  button.type = 'submit';\n  button.value = 'SUBMIT';\n  button.id = 'submit-button';\n  return button;\n};\n\nmodule.exports = LifestyleView;\n\n\n//# sourceURL=webpack:///./client/src/views/form_views/lifestyle_form_view.js?");

/***/ })

/******/ });