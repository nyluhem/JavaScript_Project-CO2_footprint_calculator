const PubSub = require('../helpers/pub_sub.js');

const LifestyleView = function(container) {
  // the container is the tabbed menu and needs to be defined first
  this.container = document.querySelector('#forms-window');
};

LifestyleView.prototype.bindEvents = function () {
  const menuItem = document.querySelector('#lifestyle-menu-item');
  menuItem.addEventListener('click', (event) => {
    console.log('Lifestyle tab clicked');
    this.createForm();
  });

};


LifestyleView.prototype.createForm = function () {

  const lifestyleForm = document.createElement('form');
  lifestyleForm.id = 'lifestyle-form';

  const clothes = this.createInput('checkbox', 'Clothes');
  lifestyleForm.appendChild(clothes);

  const cosmetics = this.createInput('checkbox', 'Cosmetics');
  lifestyleForm.appendChild(cosmetics);

  const electronics = this.createInput('checkbox', 'Electronics');
  lifestyleForm.appendChild(electronics);

  const button = document.createElement('input');
  button.type = 'submit';
  lifestyleForm.appendChild(button);
  // button.addEventListener('submit', (event) => {
  //   console.log('Clicked');
  // });

  this.container.appendChild(lifestyleForm);
};

LifestyleView.prototype.createInput = function (type, text) {
  this.container.innerHTML = '';
  const paragraph = document.createElement('p');
  const inputElement = document.createElement('input');
  inputElement.type = type;
  paragraph.textContent = text;
  paragraph.appendChild(inputElement);
  return paragraph;
};

module.exports = LifestyleView;
