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

eval("const TravelForm = __webpack_require__(/*! ./views/form_views/travel/create_form.js */ \"./client/src/views/form_views/travel/create_form.js\")\nconst TravelFormView = __webpack_require__(/*! ./views/form_views/travel/travel_form_view.js */ \"./client/src/views/form_views/travel/travel_form_view.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  console.log(\"JavaScript Loaded\")\n\n  const formContainer = document.querySelector(\"div#travel-form-placement\")\n  const newForm = new TravelForm(formContainer);\n  newForm.createForm();\n\n//   const sightingsContainer = document.querySelector('div#sightings');\n// const sightingsGridView = new SightingGridView(sightingsContainer);\n// sightingsGridView.bindEvents();\n//\n//   // const travelForm = document.querySelector(\"div#travel-form-placement\");\n//   // const travelFormView = new TravelForm(travelForm)\n//   // console.log(travelFormView)\n//   // travelFormView.createForm;\n//   // console.log(travelFormView)\n//\n//   const form = document.querySelector(\"form#nyalls\")\n//   const formView = new TravelForm(form);\n//   console.log(formView)\n//   const travelFormView = new TravelFormView(formView)\n//   console.log(travelFormView)\n//   travelFormView.setupEventListeners();\n\n});\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ }),

/***/ "./client/src/helpers/pub_sub.js":
/*!***************************************!*\
  !*** ./client/src/helpers/pub_sub.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./client/src/helpers/pub_sub.js?");

/***/ }),

/***/ "./client/src/views/form_views/travel/create_form.js":
/*!***********************************************************!*\
  !*** ./client/src/views/form_views/travel/create_form.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../../../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst CreateTravelForm = function(container) {\n  this.container = container\n};\n\n// CreateTravelForm.prototype.bindEvents = function () {\n//   this.container.innerHTML = \"\"\n//   const form =\n// };\n//\n// SightingsGridView.prototype.bindEvents = function () {\n//   PubSub.subscribe('Sightings:data-loaded', (evt) => {\n//     this.render(evt.detail);\n//   });\n// };\n\nCreateTravelForm.prototype.createForm = function () {\n  const form = document.createElement(\"form\");\n  form.classList.add('travel-form');\n\n  header = document.createElement(\"h2\");\n  header.textContent = \"Please enter travel details:\"\n  form.appendChild(header);\n\n  const carQuestion = this.createCarQuestion();\n  form.appendChild(carQuestion);\n\n  const publicTransportQuestion = this.createPublicTransportQuestion();\n  form.appendChild(publicTransportQuestion);\n\n  const nonFootprintQuestion = this.createNonFootprintQuestion();\n  form.appendChild(nonFootprintQuestion);\n\n  const submitButton = this.createSubmitButton();\n  form.appendChild(submitButton);\n\n  // this.element = form;\n  const newForm = this.container.appendChild(form)\n  return newForm;\n  // return form;\n};\n\nCreateTravelForm.prototype.createCarQuestion = function () {\n  const carDiv = document.createElement(\"div\");\n  carDiv.classList.add(\"car-section\");\n\n  const carHeader = document.createElement(\"legend\");\n  carHeader.textContent = \"Car/Motorbike\";\n  carDiv.appendChild(carHeader)\n\n  const carQuestion = document.createElement(\"p\");\n  carQuestion.textContent = \"How many miles a week do you drive:\"\n  carDiv.appendChild(carQuestion)\n\n  const carOptionOne = document.createElement(\"input\");\n  carOptionOne.type = \"radio\"\n  carOptionOne.name = \"car-miles\"\n  carOptionOne.value = \"0\"\n  carOptionOne.id = \"option-one\"\n  carOptionOne.checked = true;\n\n  const labelCarOptionOne = document.createElement(\"label\");\n  labelCarOptionOne.textContent = \"0\"\n  labelCarOptionOne.id = \"option-one\"\n\n  carDiv.appendChild(carOptionOne)\n  carDiv.appendChild(labelCarOptionOne)\n\n  const carOptionTwo = document.createElement(\"input\");\n  carOptionTwo.type = \"radio\";\n  carOptionTwo.name = \"car-miles\";\n  carOptionTwo.value = \"1-10\";\n  carOptionTwo.id = \"option-two\"\n\n  const labelCarOptionTwo = document.createElement(\"label\");\n  labelCarOptionTwo.textContent = \"1-10\"\n  labelCarOptionTwo.for = \"option-two\"\n\n  carDiv.appendChild(carOptionTwo)\n  carDiv.appendChild(labelCarOptionTwo)\n\n  const carOptionThree = this.createRadioButton(\"car-miles\", \"11-20\", \"car-option-three\");\n  const labelCarOptionThree = this.createLabel(\"11-20\", \"car-option-three\");\n\n  carDiv.appendChild(carOptionThree)\n  carDiv.appendChild(labelCarOptionThree)\n\n  const carOptionFour = this.createRadioButton(\"car-miles\", \"20+\", \"car-option-four\");\n  const labelCarOptionFour = this.createLabel(\"20+\", \"car-option-four\");\n\n  carDiv.appendChild(carOptionFour)\n  carDiv.appendChild(labelCarOptionFour)\n\n  return carDiv\n  console.log(carDiv)\n};\n\nCreateTravelForm.prototype.createPublicTransportQuestion = function () {\n  const busDiv = document.createElement(\"div\");\n  busDiv.classList.add(\"bus-section\");\n\n  const busHeader = document.createElement(\"legend\");\n  busHeader.textContent = \"Public Transport\";\n  busDiv.appendChild(busHeader)\n\n  const busQuestion = document.createElement(\"p\");\n  busQuestion.textContent = \"How many miles a week do you travel on Public Transport:\"\n  busDiv.appendChild(busQuestion)\n\n  const busOptionOne = this.createRadioButton(\"bus-miles\", \"0\", \"bus-option-one\", true);\n  const labelBusOptionOne = this.createLabel(\"0\", \"bus-option-one\");\n\n  busDiv.appendChild(busOptionOne)\n  busDiv.appendChild(labelBusOptionOne)\n\n  const busOptionTwo = this.createRadioButton(\"bus-miles\", \"1-10\", \"bus-option-two\");\n  const labelBusOptionTwo = this.createLabel(\"1-10\", \"bus-option-two\");\n\n  busDiv.appendChild(busOptionTwo)\n  busDiv.appendChild(labelBusOptionTwo)\n\n  const busOptionThree = this.createRadioButton(\"bus-miles\", \"11-20\", \"bus-option-three\");\n  const labelBusOptionThree = this.createLabel(\"11-20\", \"bus-option-three\");\n\n  busDiv.appendChild(busOptionThree)\n  busDiv.appendChild(labelBusOptionThree)\n\n  const busOptionFour = this.createRadioButton(\"bus-miles\", \"20+\", \"bus-option-four\");\n  const labelBusOptionFour = this.createLabel(\"20+\", \"bus-option-four\");\n\n  busDiv.appendChild(busOptionFour)\n  busDiv.appendChild(labelBusOptionFour)\n\n  return busDiv\n};\n\nCreateTravelForm.prototype.createNonFootprintQuestion = function () {\n  const bikeDiv = document.createElement(\"div\");\n  bikeDiv.classList.add(\"bike-section\");\n\n  const bikeHeader = document.createElement(\"legend\");\n  bikeHeader.textContent = \"Cycling/Walking\";\n  bikeDiv.appendChild(bikeHeader)\n\n  const bikeQuestion = document.createElement(\"p\");\n  bikeQuestion.textContent = \"Do you cycle or walk to work (if you cycle/walk some of the way as part of your journey then please also calculate mileage of public/private transport):\"\n  bikeDiv.appendChild(bikeQuestion)\n\n  const bikeOptionOne = this.createRadioButton(\"bike-miles\", \"yes\", \"bike-option-one\");\n  const labelBikeOptionOne = this.createLabel(\"Yes\", \"bike-option-one\");\n\n  bikeDiv.appendChild(bikeOptionOne)\n  bikeDiv.appendChild(labelBikeOptionOne)\n\n  const bikeOptionTwo = this.createRadioButton(\"bike-miles\", \"no\", \"bike-option-two\", true);\n  const labelBikeOptionTwo = this.createLabel(\"No\", \"bike-option-two\");\n\n  bikeDiv.appendChild(bikeOptionTwo)\n  bikeDiv.appendChild(labelBikeOptionTwo)\n\n  return bikeDiv\n\n};\n\nCreateTravelForm.prototype.createSubmitButton = function () {\n  const submitButton = document.createElement(\"input\");\n  submitButton.classList.add(\"submit\");\n  submitButton.type = \"submit\"\n  submitButton.value = \"Submit Travel Details\"\n\n  return submitButton;\n};\n\n  CreateTravelForm.prototype.createRadioButton = function (name, value, id, checked = false) {\n    const detail = document.createElement(\"input\");\n    detail.type = \"radio\"\n    detail.name = `${name}`\n    detail.value = `${value}`\n    detail.id = `${id}`\n    detail.checked = checked\n\n    return detail\n  }\n\n  CreateTravelForm.prototype.createLabel = function (textContent, id) {\n    const detail = document.createElement(\"label\");\n    detail.textContent = `${textContent}`\n    detail.id = `${id}`\n\n    return detail\n  }\n\nmodule.exports = CreateTravelForm;\n\n\n//# sourceURL=webpack:///./client/src/views/form_views/travel/create_form.js?");

/***/ }),

/***/ "./client/src/views/form_views/travel/travel_form_view.js":
/*!****************************************************************!*\
  !*** ./client/src/views/form_views/travel/travel_form_view.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../../../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\nconst CreateForm = __webpack_require__(/*! ./create_form.js */ \"./client/src/views/form_views/travel/create_form.js\")\n\nconst TravelFormView = function (formElement) {\n  this.element = formElement\n};\n\nTravelFormView.prototype.setupEventListeners = function() {\n  this.element.addEventListener('submit', function(evt) {\n    evt.preventDefault();\n    const form = evt.target;\n\n    //RUN CALCULATIONS BASED ON INPUTS\n\n    form.reset();\n  });\n};\n\n\nmodule.exports = TravelFormView\n\n\n//# sourceURL=webpack:///./client/src/views/form_views/travel/travel_form_view.js?");

/***/ })

/******/ });