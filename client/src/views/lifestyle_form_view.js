const PubSub = require('../helpers/pub_sub.js');

const LifestyleView = function(container) {
  this.container = container;
};

LifestyleView.prototype.bindEvents = function () {
  const menuItem = document.querySelector('#lifestyle-menu-item');
  menuItem.addEventListener('click', (event) => {
    console.log('Lifestyle tab clicked');
    this.createForm();
  });

  // event listener not working
  // button is null
  // const button = document.querySelector('#submit-button');
  // button.addEventListener('submit', (event) => {
  //   console.log('Button clicked');
    // get value of all inputs and send it to the model
    //PubSub.publish('LifestyleFormView:answers-submitted', (event) => {
  //   console.log('published on lifestyle channel');
  // });

};


LifestyleView.prototype.createForm = function () {

  this.container.innerHTML = '';

  const lifestyleForm = document.createElement('form');
  lifestyleForm.id = 'lifestyle-form';

  const clothesLabel = this.createLabel('Clothes');
  const clothes = this.createInput('checkbox', '1');
  lifestyleForm.appendChild(clothesLabel).appendChild(clothes);

  const cosmeticsLabel = this.createLabel('Cosmetics');
  const cosmetics = this.createInput('checkbox', '2');
  lifestyleForm.appendChild(cosmeticsLabel).appendChild(cosmetics);

  const electronicsLabel = this.createLabel('Electronics');
  const electronics = this.createInput('checkbox', '3');
  lifestyleForm.appendChild(electronicsLabel).appendChild(electronics);

  const button = this.createInput('submit', 'Calculate');
  button.id = 'submit-button';
  lifestyleForm.appendChild(button);

  this.container.appendChild(lifestyleForm);
};

LifestyleView.prototype.createLabel = function (text) {
  const label = document.createElement('label');
  label.textContent = text;
  return label;
};

LifestyleView.prototype.createInput = function (type, value) {
  const inputElement = document.createElement('input');
  inputElement.type = type;
  inputElement.value = value;
  return inputElement;
};

module.exports = LifestyleView;
