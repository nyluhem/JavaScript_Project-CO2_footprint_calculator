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

eval("const TravelForm = __webpack_require__(/*! ./views/form_views/travel/create_form.js */ \"./client/src/views/form_views/travel/create_form.js\")\nconst TravelCalculator = __webpack_require__(/*! ./models/travel.js */ \"./client/src/models/travel.js\")\nconst LifestyleView = __webpack_require__(/*! ./views/lifestyle_form_view.js */ \"./client/src/views/lifestyle_form_view.js\");\nconst LifestyleModel = __webpack_require__(/*! ./models/lifestyle.js */ \"./client/src/models/lifestyle.js\");\nconst FoodView = __webpack_require__(/*! ./views/food_form_view.js */ \"./client/src/views/food_form_view.js\");\nconst FoodModel = __webpack_require__(/*! ./models/food.js */ \"./client/src/models/food.js\");\nconst FoodFinalView = __webpack_require__(/*! ./views/food_final_view.js */ \"./client/src/views/food_final_view.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n\n  const formContainer = document.querySelector(\"#forms-window\")\n  const newFormTravel = new TravelForm(formContainer);\n  newFormTravel.bindEvents();\n  newFormTravel.getResults();\n\n  const travelCalculator = new TravelCalculator();\n  travelCalculator.bindEvents();\n// const GridView = require('./views/grid_view.js');\n// const GridView = require('./views/grid_view.js');\n\n  const container = document.querySelector('#forms-window');\n  const lifestyleForm = new LifestyleView(container);\n  lifestyleForm.bindEvents();\n\n  const lifestyleValues = new LifestyleModel();\n  lifestyleValues.getValues();\n\n  const form = document.querySelector('#forms-window')\n  const newForm = new FoodView(form);\n  const food = newForm.bindEvents();\n  console.log(food);\n\n\n  const foodValues = new FoodModel()\n  console.log(foodValues);\n  foodValues.getFormValues();\n\n  const infoFood = document.querySelector(\"div#food-forms-window\")\n  const infoFoodInfo = new FoodFinalView(infoFood);\n  infoFoodInfo.foodCarbon();\n\n  // const formTravel = document.querySelector(\"form#travel-form\");\n  // const formViewTravel = new TravelFormView(formTravel);\n  // formViewTravel.setupEventListeners();\n\n});\n\n  // const gridContainer = document.querySelector('div#results');\n  // const gridView = new GridView(gridcontainer);\n  // gridView.bindEvents();\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ }),

/***/ "./client/src/helpers/pub_sub.js":
/*!***************************************!*\
  !*** ./client/src/helpers/pub_sub.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n    console.log(`channel: ${channel}, payload: ${payload}`);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n    console.log(`channel: ${channel}`);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./client/src/helpers/pub_sub.js?");

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

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\nconst FoodView = __webpack_require__(/*! ../views/food_form_view.js */ \"./client/src/views/food_form_view.js\")\n\nconst FoodModel = function() {\n  this.formvalues = []\n}\n\n\n\nFoodModel.prototype.getFormValues = function () {\n  PubSub.subscribe(\"FoodForm:values\", (event) => {\n   const foodValues = event.detail;\n   console.log(foodValues);\n   const new2 = this.getValue(foodValues)\n   const result = new2*155\n   console.log(result);\n   PubSub.publish(\"FoodInfo\", result);\n  });\n};\n\nFoodModel.prototype.getValue = function (values) {\n  const integers = values.map((str) => parseInt(str))\n  console.log(integers);\n  const sum = integers.reduce((total,amount) => total + amount)\n  return sum;\n};\n\n\n\n\nmodule.exports = FoodModel;\n\n\n//# sourceURL=webpack:///./client/src/models/food.js?");

/***/ }),

/***/ "./client/src/models/lifestyle.js":
/*!****************************************!*\
  !*** ./client/src/models/lifestyle.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst LifestyleModel = function() {\n  this.values = [];\n};\n\nLifestyleModel.prototype.getValues = function () {\n  PubSub.subscribe('LifestyleView:values', (event) => {\n    const checkedValues = event.detail;\n    this.add(checkedValues);\n  });\n};\n\nLifestyleModel.prototype.add = function (values) {\n  const arrayOfIntegers = values.map(value => parseInt(value));\n  const reducer = (accumulator, currentValue) => accumulator + currentValue;\n  const result = arrayOfIntegers.reduce(reducer);\n  console.log(result);\n  return result;\n};\n\nmodule.exports = LifestyleModel;\n\n\n//# sourceURL=webpack:///./client/src/models/lifestyle.js?");

/***/ }),

/***/ "./client/src/models/travel.js":
/*!*************************************!*\
  !*** ./client/src/models/travel.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./client/src/helpers/request_helper.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst TravelCalculator = function (){\n\n};\n\n  TravelCalculator.prototype.bindEvents = function () {\n    PubSub.subscribe('TravelModel:send-values-array', (evt) => {\n      const array = evt.detail\n      const travelPoints = this.calculateTotal(array)\n      PubSub.publish(\"TravelForm:display-results\", travelPoints);\n    });\n  };\n\n  TravelCalculator.prototype.calculateTotal = function (array) {\n    const mappedArray = this.mapArray(array);\n    const sumOfArray = this.sum(mappedArray);\n    return sumOfArray;\n  };\n\n  TravelCalculator.prototype.mapArray = function (array) {\n    const mappedArray = array.map(x => parseInt(x))\n    return mappedArray\n  };\n\n  TravelCalculator.prototype.sum = function (array) {\n    const reducer = (accumulator, currentValue) => accumulator + currentValue;\n    const sumOfArray = array.reduce(reducer);\n    return sumOfArray\n  };\n\nmodule.exports = TravelCalculator\n\n\n//# sourceURL=webpack:///./client/src/models/travel.js?");

/***/ }),

/***/ "./client/src/views/food_final_view.js":
/*!*********************************************!*\
  !*** ./client/src/views/food_final_view.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\nconst FoodModel = __webpack_require__(/*! ../models/food.js */ \"./client/src/models/food.js\")\n\nconst FoodFinalView = function (element) {\n  this.element = element;\n}\n\nFoodFinalView.prototype.foodCarbon = function (foodpoints) {\n  PubSub.subscribe(\"FoodInfo\", (event) => {\n   const carbonPoints = event.detail;\n   console.log(carbonPoints);\n   this.render(carbonPoints);\n  })\n};\n\nFoodFinalView.prototype.render = function (carbonPoints) {\n\n  const div = document.createElement(\"div\")\n  div.id = \"carbon-information\"\n\n  const carbonPointsInfo = document.createElement('h3');\n  carbonPointsInfo.textContent = \"You are allowed to meet 23,287 g CO2 / day\"\n\n  const carbonPointYouhave = document.createElement('p');\n  carbonPointYouhave.textContent = `You spend ${carbonPoints} on food`\n  const porcentage = Math.ceil((carbonPoints*100)/23287);\n  const carbonPocentage = document.createElement('p');\n  carbonPocentage.textContent =  `Which is ${porcentage} % of what should be consuming`\n  this.element.innerHTML = \"\";\n\n  // const resetButton = this.resetButton()\n\n\n  div.appendChild(carbonPointsInfo);\n  div.appendChild(carbonPointYouhave);\n  div.appendChild(carbonPocentage);\n  // div.appendChild(resetButton)\n\n\n  // div.addEventListener('submit', (event) => {\n  //   const carbonStuff = document.querySelector(\"div#forms-window\")\n  //   carbonStuff.innerHTML = \"\"\n  // })\n\n  const result = this.element.appendChild(div);\n  console.log(result);\n  return result\n};\n\n// FoodFinalView.prototype.resetButton = function () {\n//   const button = document.createElement(\"input\")\n//   button.type = \"reset\"\n//   button.value = \"Reset Form\"\n//   const carbonStuff = document.querySelector(\"#carbon-information\")\n//   carbonStuff.addEventListener('submit', (event) =>{\n//     console.log(event);\n//     event.innerHTML = \"\"\n//   })\n//   return button\n// };\n\nmodule.exports = FoodFinalView;\n\n\n//# sourceURL=webpack:///./client/src/views/food_final_view.js?");

/***/ }),

/***/ "./client/src/views/food_form_view.js":
/*!********************************************!*\
  !*** ./client/src/views/food_form_view.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\n\nconst FoodView = function (container) {\n  this.container = container;\n}\n\n// FoodView.prototype.bindEvents = function () {\n//   const menuItem = document.getElementById(\"food-menu-item\");\n//   const self = this;\n//   menuItem.addEventListener('dbclick', function _listener(event) {\n//     console.log(\"event.target\",  event.target);\n//     self.createForm();\n//     menuItem.removeEventListener('dbclick', _listener);\n//   });\n// };\n\nFoodView.prototype.bindEvents = function () {\n  const menuItem = document.querySelector(\"#food-menu-item\");\n  menuItem.addEventListener(\"click\", (event) => {\n    this.createForm()\n  });\n};\n\nFoodView.prototype.createForm = function () {\n  const foodForm = document.createElement(\"form\");\n  foodForm.id = \"food-form\"\n\n  // Diet\n const diet = this.createLabel(\"Diet\");\n foodForm.appendChild(diet);\n const dietQuestion = this.createQuestion(\"diet\")\n foodForm.appendChild(dietQuestion);\n\n //vegetarian button\n const vegetarian = this.createCheckbutton(\"vegetarian\", \"diet\", \"50\")\n const vegetarianLabel = this.createLableforButton(\"Vegetarian\")\n foodForm.appendChild(vegetarian);\n foodForm.appendChild(vegetarianLabel);\n //meat button\nconst meat = this.createCheckbutton(\"meat\", \"diet\", \"0\");\nconst meatLabel = this.createLableforButton(\"Non Vegetarian\")\nfoodForm.appendChild(meat);\nfoodForm.appendChild(meatLabel);\n\n//PREPARATION\nconst preparation = this.createLabel(\"Preparation\")\nfoodForm.appendChild(preparation);\nconst preparationQuestion = this.preparationQuestion()\nfoodForm.appendChild(preparationQuestion);\n\n//homemade\nconst homemade = this.createCheckbutton(\"homemade\", \"preparation\", \"50\");\nconst homemadeLabel = this.createLableforButton(\"Home Made\")\nfoodForm.appendChild(homemade);\nfoodForm.appendChild(homemadeLabel);\n// take away\nconst takeaway = this.createCheckbutton(\"takeaway\", \"preparation\", \"0\");\nconst takeawayLabel = this.createLableforButton(\"Take Away\")\nfoodForm.appendChild(takeaway);\nfoodForm.appendChild(takeawayLabel);\n\n//SOURCE\nconst source = this.createLabel(\"Source\")\nfoodForm.appendChild(source);\nconst sourceQuestion = this.sourceQuestion()\nfoodForm.appendChild(sourceQuestion);\n\n//local\nconst local = this.createCheckbutton(\"local\", \"source\", \"50\");\nconst localLabel = this.createLableforButton(\"Local\")\nfoodForm.appendChild(local);\nfoodForm.appendChild(localLabel);\n//imported\nconst imported = this.createCheckbutton(\"imported\", \"source\", \"0\");\nconst importedLabel = this.createLableforButton(\"Imported\")\nfoodForm.appendChild(imported);\nfoodForm.appendChild(importedLabel);\n\n//SUBMIT BUTTON!\nconst submitButton = this.createSubmitButton();\n// submitButton.addEventListener(\"submit\", (event) =>{\n//   event.preventDefault();\n//   console.log(event);\n//   const submittInformation = event.target;\n//   PubSub.publish(\"FoodForm:Inputted/Information\", submittInformation)\n//   console.log(submittInformation)\n// })\nfoodForm.appendChild(submitButton);\n\nfoodForm.addEventListener('submit', (event) => {\n  event.preventDefault();\n  const arrays = [meat.value, vegetarian.value, local.value, imported.value,takeaway.value,homemade.value]\n  console.log(arrays);\n  PubSub.publish(\"FoodForm:values\", arrays);\n  foodForm.innerHTML = '';\n})\n\n\n\n\n  //create\n  this.container.innerHTML = \"\";\n  const newForm = this.container.appendChild(foodForm);\n};\n\nFoodView.prototype.createLabel = function (text, id) {\n  const detail = document.createElement(\"label\");\n  detail.id = id\n  return detail;\n};\n\nFoodView.prototype.createQuestion = function (text) {\n  const question = document.createElement(\"p\");\n  question.textContent = `What describes your daily ${text}:`\n  return question\n};\n\nFoodView.prototype.preparationQuestion = function (){\n  const question2 = document.createElement(\"p\")\n  question2.textContent = \"How do you mostly prepare your food:\"\n  return question2\n};\n\nFoodView.prototype.sourceQuestion = function (){\n  const question = document.createElement(\"p\")\n  question.textContent = \"Where do you mostly source your food:\"\n  return question\n};\n\n\nFoodView.prototype.createLableforButton = function (id) {\n  const lable = document.createElement(\"lable\");\n  lable.id = id;\n  lable.textContent = `${id}`\n  return lable;\n\n};\n\nFoodView.prototype.createCheckbutton = function (id, name, truevalue) {\n  var button = document.createElement(\"input\")\n  button.type = \"radio\";\n  button.id = id;\n  button.name = name;\n  button.value = 0;\n\n\n  button.addEventListener('click', () =>{\n    if (!button.checked) {\n      button.value = 0;\n    }else{\n      button.value = truevalue;\n    }\n  })\n  return button\n};\n\nFoodView.prototype.createSubmitButton = function () {\n  const button = document.createElement(\"input\")\n  button.type = \"submit\"\n  button.value = \"save\"\n  return button\n};\n\n// FoodView.prototype.createEventListener = function () {\n//   const\n//\n// };\n\n\nmodule.exports = FoodView;\n\n\n//# sourceURL=webpack:///./client/src/views/food_form_view.js?");

/***/ }),

/***/ "./client/src/views/form_views/travel/create_form.js":
/*!***********************************************************!*\
  !*** ./client/src/views/form_views/travel/create_form.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/nyallshemingway/codeclan/work_files/week_09/project_week/co2-footprint-calculator/client/src/views/form_views/travel/create_form.js'\");\n\n//# sourceURL=webpack:///./client/src/views/form_views/travel/create_form.js?");

/***/ }),

/***/ "./client/src/views/lifestyle_form_view.js":
/*!*************************************************!*\
  !*** ./client/src/views/lifestyle_form_view.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst LifestyleView = function(container) {\n  this.container = container;\n};\n\nLifestyleView.prototype.bindEvents = function () {\n  const menuItem = document.querySelector('#lifestyle-menu-item');\n  menuItem.addEventListener('click', (event) => {\n    this.createForm();\n  });\n};\n\nLifestyleView.prototype.createForm = function () {\n  event.preventDefault();\n  this.container.innerHTML = '';\n\n  const lifestyleForm = document.createElement('form');\n  lifestyleForm.id = 'lifestyle-form';\n\n  const clothesLabel = this.createLabel('Clothes');\n  const clothes = this.createInput('checkbox', '1', 'clothes');\n  lifestyleForm.appendChild(clothes);\n  lifestyleForm.appendChild(clothesLabel);\n\n  const cosmeticsLabel = this.createLabel('Cosmetics');\n  const cosmetics = this.createInput('checkbox', '2', 'cosmetics');\n  lifestyleForm.appendChild(cosmetics);\n  lifestyleForm.appendChild(cosmeticsLabel);\n\n  const electronicsLabel = this.createLabel('Electronics');\n  const electronics = this.createInput('checkbox', '3', 'electronics');\n  lifestyleForm.appendChild(electronics);\n  lifestyleForm.appendChild(electronicsLabel);\n\n  const button = this.createButton();\n  lifestyleForm.appendChild(button);\n\n  lifestyleForm.addEventListener('submit', (event) => {\n    event.preventDefault();\n    const arrayOfValues = [clothes.value, cosmetics.value, electronics.value];\n    PubSub.publish('LifestyleView:values', arrayOfValues);\n  });\n\n  this.container.appendChild(lifestyleForm);\n};\n\nLifestyleView.prototype.createLabel = function (text) {\n  const label = document.createElement('label');\n  label.textContent = text;\n  return label;\n};\n\nLifestyleView.prototype.createInput = function (type, points, id) {\n  const inputElement = document.createElement('input');\n  inputElement.type = type;\n  inputElement.id = id;\n  inputElement.value = 0;\n\n  inputElement.addEventListener('click', () => {\n    if (!inputElement.checked) {\n      inputElement.value = 0;\n    } else {\n      inputElement.value = points;\n    };\n  })\n\n  return inputElement;\n};\n\nLifestyleView.prototype.createButton = function () {\n  const button = document.createElement('input');\n  button.type = 'submit';\n  button.value = 'Calculate';\n  button.id = 'submit-button';\n  return button;\n};\n\nmodule.exports = LifestyleView;\n\n\n//# sourceURL=webpack:///./client/src/views/lifestyle_form_view.js?");

/***/ })

/******/ });