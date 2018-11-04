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

eval("const TravelForm = __webpack_require__(/*! ./views/form_views/travel/create_form.js */ \"./client/src/views/form_views/travel/create_form.js\")\nconst TravelFormView = __webpack_require__(/*! ./views/form_views/travel/travel_form_view.js */ \"./client/src/views/form_views/travel/travel_form_view.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  console.log(\"JavaScript Loaded\")\n\n  const formContainer = document.querySelector(\"div#travel-form-placement\")\n  const newForm = new TravelForm(formContainer);\n  newForm.createForm;\n  console.log(newForm.createForm)\n\n//   const sightingsContainer = document.querySelector('div#sightings');\n// const sightingsGridView = new SightingGridView(sightingsContainer);\n// sightingsGridView.bindEvents();\n//\n//   // const travelForm = document.querySelector(\"div#travel-form-placement\");\n//   // const travelFormView = new TravelForm(travelForm)\n//   // console.log(travelFormView)\n//   // travelFormView.createForm;\n//   // console.log(travelFormView)\n//\n//   const form = document.querySelector(\"form#nyalls\")\n//   const formView = new TravelForm(form);\n//   console.log(formView)\n//   const travelFormView = new TravelFormView(formView)\n//   console.log(travelFormView)\n//   travelFormView.setupEventListeners();\n\n});\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

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

eval("const PubSub = __webpack_require__(/*! ../../../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst CreateTravelForm = function(container) {\n  this.container = container\n};\n\n// CreateTravelForm.prototype.bindEvents = function () {\n//   this.container.innerHTML = \"\"\n//   const form =\n// };\n//\n// SightingsGridView.prototype.bindEvents = function () {\n//   PubSub.subscribe('Sightings:data-loaded', (evt) => {\n//     this.render(evt.detail);\n//   });\n// };\n\nCreateTravelForm.prototype.createForm = function (element) {\n  this.element = element\n  const form = document.createElement(\"form\");\n  form.classList.add('travel-form');\n\n  header = document.createElement(\"h2\");\n  header.textContent = \"Please enter travel details:\"\n  form.appendChild(header);\n\n  const carQuestion = this.createCarQuestion();\n  form.appendChild(carQuestion);\n\n  const publicTransportQuestion = this.createPublicTransportQuestion();\n  form.appendChild(publicTransportQuestion);\n\n  const nonFootprintQuestion = this.createNonFootprintQuestion();\n  form.appendChild(nonFootprintQuestion);s\n\n  const submitButton = this.createSubmitButton();\n  form.appendChild(submitButton);\n\n  // this.element = form;\n  return form;\n  this.element.appendChild(form)\n};\n\nCreateTravelForm.prototype.createCarQuestion = function () {\n  const carDiv = document.createElement(\"div\");\n  carDiv.classList.add(\"car-section\");\n\n  const carHeader = document.createElement(\"legend\");\n  carHeader.textContent = \"Car/Motorbike\";\n  carDiv.appendChild(carHeader)\n\n  const carQuestion = document.createElement(\"p\");\n  carQuestion.textContent = \"How many miles a week do you drive:\"\n  carDiv.appendChild(carQuestion)\n\n  const carOptionOne = document.createElement(\"input\");\n  carOptionOne.type = \"radio\"\n  carOptionOne.name = \"car-miles\"\n  carOptionOne.value = \"0\"\n  carOptionOne.id = \"option-one\"\n  carOptionOne.checked = true;\n\n  const labelCarOptionOne = document.createElement(\"label\");\n  labelCarOptionOne.textContent = \"0\"\n  labelCarOptionOne.id = \"option-one\"\n\n  carDiv.appendChild(carOptionOne)\n  carDiv.appendChild(labelCarOptionOne)\n\n  const carOptionTwo = document.createElement(\"input\");\n  carOptionTwo.type = \"radio\";\n  carOptionTwo.name = \"car-miles\";\n  carOptionTwo.value = \"1-10\";\n  carOptionTwo.id = \"option-two\"\n\n  const labelCarOptionTwo = document.createElement(\"label\");\n  labelCarOptionTwo.textContent = \"1-10\"\n  labelCarOptionTwo.for = \"option-two\"\n\n  carDiv.appendChild(carOptionTwo)\n  carDiv.appendChild(labelCarOptionTwo)\n\n  const carOptionThree = document.createElement(\"input\");\n  carOptionThree.type = \"radio\";\n  carOptionThree.name = \"car-miles\";\n  carOptionThree.value = \"11-20\";\n  carOptionThree.id = \"option-three\"\n\n  const labelCarOptionThree = document.createElement(\"label\");\n  labelCarOptionThree.textContent = \"11-20\"\n  labelCarOptionThree.for = \"option-three\"\n\n  carDiv.appendChild(carOptionThree)\n  carDiv.appendChild(labelCarOptionThree)\n\n  const carOptionFour = document.createElement(\"input\");\n  carOptionFour.type = \"radio\";\n  carOptionFour.name = \"car-miles\";\n  carOptionFour.value = \"20+\";\n  carOptionFour.id = \"option-four\"\n\n  const labelCarOptionFour = document.createElement(\"label\");\n  labelCarOptionFour.textContent = \"20+\"\n  labelCarOptionFour.for = \"option-four\"\n\n  carDiv.appendChild(carOptionFour)\n  carDiv.appendChild(labelCarOptionFour)\n\n  return carDiv\n  console.log(carDiv)\n};\n\nCreateTravelForm.prototype.createPublicTransportQuestion = function () {\n  const busDiv = document.createElement(\"div\");\n  busDiv.classList.add(\"bus-section\");\n\n  const busHeader = document.createElement(\"legend\");\n  busHeader.textContent = \"Public Transport\";\n  busDiv.appendChild(busHeader)\n\n  const busQuestion = document.createElement(\"p\");\n  busQuestion.textContent = \"How many miles a week do you travel on Public Transport:\"\n  busDiv.appendChild(busQuestion)\n\n  const busOptionOne = document.createElement(\"input\");\n  busOptionOne.type = \"radio\"\n  busOptionOne.name = \"bus-miles\"\n  busOptionOne.value = \"0\"\n  busOptionOne.id = \"option-one\"\n  busOptionOne.checked = true;\n\n  const labelBusOptionOne = document.createElement(\"label\");\n  labelBusOptionOne.textContent = \"0\"\n  labelBusOptionOne.id = \"option-one\"\n\n  busDiv.appendChild(busOptionOne)\n  busDiv.appendChild(labelBusOptionOne)\n\n  const busOptionTwo = document.createElement(\"input\");\n  busOptionTwo.type = \"radio\";\n  busOptionTwo.name = \"bus-miles\";\n  busOptionTwo.value = \"1-10\";\n  busOptionTwo.id = \"option-two\"\n\n  const labelBusOptionTwo = document.createElement(\"label\");\n  labelBusOptionTwo.textContent = \"1-10\"\n  labelBusOptionTwo.for = \"option-two\"\n\n  busDiv.appendChild(busOptionTwo)\n  busDiv.appendChild(labelBusOptionTwo)\n\n  const busOptionThree = document.createElement(\"input\");\n  busOptionThree.type = \"radio\";\n  busOptionThree.name = \"bus-miles\";\n  busOptionThree.value = \"11-20\";\n  busOptionThree.id = \"option-three\"\n\n  const labelBusOptionThree = document.createElement(\"label\");\n  labelBusOptionThree.textContent = \"11-20\"\n  labelBusOptionThree.for = \"option-three\"\n\n  busDiv.appendChild(busOptionThree)\n  busDiv.appendChild(labelBusOptionThree)\n\n  const busOptionFour = document.createElement(\"input\");\n  busOptionFour.type = \"radio\";\n  busOptionFour.name = \"bus-miles\";\n  busOptionFour.value = \"20+\";\n  busOptionFour.id = \"option-four\"\n\n  const labelBusOptionFour = document.createElement(\"label\");\n  labelBusOptionFour.textContent = \"20+\"\n  labelBusOptionFour.for = \"option-four\"\n\n  busDiv.appendChild(busOptionFour)\n  busDiv.appendChild(labelBusOptionFour)\n\n  return busDiv\n};\n\nCreateTravelForm.prototype.createNonFootprintQuestion = function () {\n  const bikeDiv = document.createElement(\"div\");\n  bikeDiv.classList.add(\"bike-section\");\n\n  const bikeHeader = document.createElement(\"legend\");\n  bikeHeader.textContent = \"Cycling/Walking\";\n  bikeDiv.appendChild(bikeHeader)\n\n  const bikeQuestion = document.createElement(\"p\");\n  bikeQuestion.textContent = \"Do you cycle or walk to work (if you cycle/walk some of the way as part of your journey then please also calculate mileage of public/private transport):\"\n  bikeDiv.appendChild(bikeQuestion)\n\n  const bikeOptionOne = document.createElement(\"input\");\n  bikeOptionOne.type = \"radio\"\n  bikeOptionOne.name = \"bike-miles\"\n  bikeOptionOne.value = \"yes\"\n  bikeOptionOne.id = \"option-one\"\n  bikeOptionOne.checked = false;\n\n  const labelBikeOptionOne = document.createElement(\"label\");\n  labelBusOptionOne.textContent = \"Yes\"\n  labelBusOptionOne.id = \"option-one\"\n\n  bikeDiv.appendChild(bikeOptionOne)\n  bikeDiv.appendChild(labelBikeOptionOne)\n\n  const bikeOptionTwo = document.createElement(\"input\");\n  bikeOptionTwo.type = \"radio\";\n  bikeOptionTwo.name = \"bike-miles\";\n  bikeOptionTwo.value = \"No\";\n  bikeOptionTwo.id = \"option-two\"\n  bikeOptionTwo.checked = true\n\n\nconst labelBikeOptionTwo = document.createElement(\"label\");\nlabelBikeOptionTwo.textContent = \"No\"\nlabelBikeOptionTwos.id = \"option-two\"\n\nbikeDiv.appendChild(bikeOptionTwo)\nbikeDiv.appendChild(labelBikeOptionTwo)\n\n};\n\nCreateTravelForm.prototype.createSubmitButton = function () {\n  const submitButton = document.createElement(\"input\");\n  submitButton.classList.add(\"submit\");\n  submitButton.type = \"submit\"\n  submitButton.value = \"Submit Travel Details\"\n\n  return submitButton;\n};\n\n\n\n\n// function createRadialButton (name, value, id, checked = false) {\n//   const button = document.createElement(\"input\");\n//   button.type = \"radio\"\n//   button.name = name\n//   button.value = value\n//   button.checked = checked\n// }\n\n//ADD EVENT LISTENER FOR SUBMIT\n\n\n\n\nmodule.exports = CreateTravelForm;\n\n\n//# sourceURL=webpack:///./client/src/views/form_views/travel/create_form.js?");

/***/ }),

/***/ "./client/src/views/form_views/travel/travel_form_view.js":
/*!****************************************************************!*\
  !*** ./client/src/views/form_views/travel/travel_form_view.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../../../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\nconst CreateForm = __webpack_require__(/*! ./create_form.js */ \"./client/src/views/form_views/travel/create_form.js\")\n\nconst TravelFormView = function (formElement) {\n  this.element = formElement\n};\n\nTravelFormView.prototype.setupEventListeners = function() {\n  this.element.addEventListener('submit', function(evt) {\n    evt.preventDefault();\n    const form = evt.target;\n\n    //RUN CALCULATIONS BASED ON INPUTS\n\n\n    form.reset();\n  });\n};\n\n\nmodule.exports = TravelFormView\n\n\n//# sourceURL=webpack:///./client/src/views/form_views/travel/travel_form_view.js?");

/***/ })

/******/ });