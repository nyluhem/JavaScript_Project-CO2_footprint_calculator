const PubSub = require('../helpers/pub_sub.js');

const LifestyleView = function(container) {
  this.container = container;
};

LifestyleView.prototype.bindEvents = function () {
  const menuItem = document.querySelector('#lifestyle-menu-item');
  menuItem.addEventListener('click', (event) => {
    this.createForm();
  });
};


LifestyleView.prototype.createForm = function () {

  this.container.innerHTML = '';

  const lifestyleForm = document.createElement('form');
  lifestyleForm.id = 'lifestyle-form';

  const clothesLabel = this.createLabel('Clothes');
  const clothes = this.createInput('checkbox', '1');
  lifestyleForm.appendChild(clothes);
  lifestyleForm.appendChild(clothesLabel);

  const cosmeticsLabel = this.createLabel('Cosmetics');
  const cosmetics = this.createInput('checkbox', '2');
  lifestyleForm.appendChild(cosmetics);
  lifestyleForm.appendChild(cosmeticsLabel);

  const electronicsLabel = this.createLabel('Electronics');
  const electronics = this.createInput('checkbox', '3');
  lifestyleForm.appendChild(electronics);
  lifestyleForm.appendChild(electronicsLabel);

  const button = this.createButton();
  button.addEventListener('click', (event) => {
    // event.preventDefault();
    this.handleSubmit(event);
    console.log('Calculate clicked');
  });
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

LifestyleView.prototype.createButton = function () {
  const button = this.createInput('button', 'Calculate');
  button.id = 'submit-button';
  return button;
};

module.exports = LifestyleView;
