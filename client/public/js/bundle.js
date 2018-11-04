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
/***/ (function(module, exports) {

eval("const CreateTravelForm = (\"./views/form_views/travel/create_form.js\")\nconst TravelFormView = (\"./views/form_views/travel/travel_form_view.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  console.log(\"JavaScript Loaded\")\n\n  // const travelForm = document.querySelector(\"form#travel-form\")\n  // const travelFormView = new CreateTravelForm(travelForm);\n  // travelFormView.setupEventListeners();\n\n\n  const form = document.createElement(\"form\");\n  form.classList.add('travel-form');\n\n  header = document.createElement(\"h2\");\n  header.textContent = \"Please enter travel details:\"\n  form.appendChild(header);\n\n  // const carQuestion = this.createCarQuestion();\n  // form.appendChild(carQuestion);\n\n  // const publicTransportQuestion = this.createPublicTransportQuestion();\n  // form.appendChild(publicTransportQuestion);\n  //\n  // const nonFootprintQuestion = this.createNonFootprintQuestion();\n  // form.appendChild(nonFootprintQuestion);s\n  //\n  // const submitButton = this.createSubmitButton();\n  // form.appendChild(submitButton);\n\n  //\n  // function createRadialButton (name, value, id, checked = false) {\n  //   const button = document.createElement(\"input\");\n  //   button.type = \"radio\"\n  //   button.name = name\n  //   button.value = value\n  //   button.checked = checked\n  // }\n  //\n  //\n  //\n  // const carOptionOne\n  // const car = carOptionOne.createRadialButton(\"car-miles\", \"0\", \"option-one\", true);\n\n  const carDiv = document.createElement(\"div\");\n  carDiv.classList.add(\"car-section\");\n  form.appendChild(carDiv)\n\n  const carHeader = document.createElement(\"legend\");\n  carHeader.textContent = \"Car/Motorbike\";\n  carDiv.appendChild(carHeader)\n\n  const carQuestion = document.createElement(\"p\");\n  carQuestion.textContent = \"How many miles a week do you drive:\"\n  carDiv.appendChild(carQuestion)\n\n  const carOptionOne = document.createElement(\"input\");\n  carOptionOne.type = \"radio\"\n  carOptionOne.name = \"car-miles\"\n  carOptionOne.value = \"0\"\n  carOptionOne.id = \"option-one\"\n  carOptionOne.checked = true;\n\n  const labelCarOptionOne = document.createElement(\"label\");\n  labelCarOptionOne.textContent = \"0\"\n  labelCarOptionOne.id = \"option-one\"\n\n  carDiv.appendChild(carOptionOne)\n  carDiv.appendChild(labelCarOptionOne)\n\n  const carOptionTwo = document.createElement(\"input\");\n  carOptionTwo.type = \"radio\";\n  carOptionTwo.name = \"car-miles\";\n  carOptionTwo.value = \"1-10\";\n  carOptionTwo.id = \"option-two\"\n\n  const labelCarOptionTwo = document.createElement(\"label\");\n  labelCarOptionTwo.textContent = \"1-10\"\n  labelCarOptionTwo.for = \"option-two\"\n\n  carDiv.appendChild(carOptionTwo)\n  carDiv.appendChild(labelCarOptionTwo)\n\n  const carOptionThree = document.createElement(\"input\");\n  carOptionThree.type = \"radio\";\n  carOptionThree.name = \"car-miles\";\n  carOptionThree.value = \"11-20\";\n  carOptionThree.id = \"option-three\"\n\n  const labelCarOptionThree = document.createElement(\"label\");\n  labelCarOptionThree.textContent = \"11-20\"\n  labelCarOptionThree.for = \"option-three\"\n\n  carDiv.appendChild(carOptionThree)\n  carDiv.appendChild(labelCarOptionThree)\n\n  const carOptionFour = document.createElement(\"input\");\n  carOptionFour.type = \"radio\";\n  carOptionFour.name = \"car-miles\";\n  carOptionFour.value = \"20+\";\n  carOptionFour.id = \"option-four\"\n\n  const labelCarOptionFour = document.createElement(\"label\");\n  labelCarOptionFour.textContent = \"20+\"\n  labelCarOptionFour.for = \"option-four\"\n\n  carDiv.appendChild(carOptionFour)\n  carDiv.appendChild(labelCarOptionFour)\n\n  // <div class=\"radio\">\n  //   <input type=\"radio\" name=\"car-miles-per-week\" value=\"0\" id=\"0\" checked/>\n  //   <label for=\"0\">0</label>\n\n  const submitButton = document.createElement(\"input\");\n  submitButton.type = \"submit\"\n  submitButton.value = \"Submit Travel Details\"\n  form.appendChild(submitButton);\n\n\n\n  //ADD EVENT LISTENER FOR SUBMIT\n\n  // this.element = form;\n  const body = document.querySelector(\"body\")\n  body.appendChild(form);\n});\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ })

/******/ });