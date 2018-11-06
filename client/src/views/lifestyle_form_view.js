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
  event.preventDefault();
  console.log(this.container)
  this.container.innerHTML = '';

  const lifestyleForm = document.createElement('form');
  lifestyleForm.id = 'lifestyle-form';

  const clothesLabel = this.createLabel('Clothes');
  const clothes = this.createInput('checkbox', '1', 'clothes');
  lifestyleForm.appendChild(clothes);
  lifestyleForm.appendChild(clothesLabel);

  const cosmeticsLabel = this.createLabel('Cosmetics');
  const cosmetics = this.createInput('checkbox', '2', 'cosmetics');
  lifestyleForm.appendChild(cosmetics);
  lifestyleForm.appendChild(cosmeticsLabel);

  const electronicsLabel = this.createLabel('Electronics');
  const electronics = this.createInput('checkbox', '3', 'electronics');
  lifestyleForm.appendChild(electronics);
  lifestyleForm.appendChild(electronicsLabel);

  const button = this.createButton();
  lifestyleForm.appendChild(button);

  lifestyleForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const arrayOfValues = [clothes.value, cosmetics.value, electronics.value];
    PubSub.publish('LifestyleView:values', arrayOfValues);
  });

  this.container.appendChild(lifestyleForm);
};

LifestyleView.prototype.createLabel = function (text) {
  const label = document.createElement('label');
  label.textContent = text;
  return label;
};

LifestyleView.prototype.createInput = function (type, points, id) {
  const inputElement = document.createElement('input');
  inputElement.type = type;
  inputElement.id = id;
  inputElement.value = 0;

  inputElement.addEventListener('click', () => {
    if (!inputElement.checked) {
      inputElement.value = 0;
    } else {
      inputElement.value = points;
    };
  })

  return inputElement;
};

LifestyleView.prototype.createButton = function () {
  const button = document.createElement('input');
  button.type = 'submit';
  button.value = 'Calculate';
  button.id = 'submit-button';
  return button;
};

module.exports = LifestyleView;
