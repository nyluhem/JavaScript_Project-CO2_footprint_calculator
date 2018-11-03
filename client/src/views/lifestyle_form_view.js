const PubSub = require('../helpers/pub_sub.js');

const LifestyleView = function(container) {
  // the container is the tabbed menu and needs to be defined first
  this.container = document.querySelector('div');
}

LifestyleView.prototype.bindEvents = function () {
  const menuItem = document.querySelector('#lifestyle-menu-item');
  menuItem.addEventListener('click', (event) => {
    console.log('Menu item clicked');
    this.createForm();
  });

  // add event listener to submit ID
  // publish answers to 'LifestyleView:Answers-submitted' channel

};

LifestyleView.prototype.createForm = function (mainForm) {

  // const formContainer = document.createElement('div');
  // formContainer.id = 'lifestyle-container';
  // this.container.appendChild(formContainer);

  const lifestyleForm = document.createElement('form');
  lifestyleForm.id = 'lifestyle-form';
  // formContainer.appendChild(lifestyleForm);

  const clothes = this.createInput('checkbox', 'Clothes');
  lifestyleForm.appendChild(clothes);

  const cosmetics = this.createInput('checkbox', 'Cosmetics');
  lifestyleForm.appendChild(cosmetics);

  const electronics = this.createInput('checkbox', 'Electronics');
  lifestyleForm.appendChild(electronics);

  this.container.appendChild(lifestyleForm);

  // add the submit button
  // attach an ID to it
};

LifestyleView.prototype.createInput = function (type, text) {
  const paragraph = document.createElement('p');
  const inputElement = document.createElement('input');
  inputElement.type = type;
  paragraph.textContent = text;
  paragraph.appendChild(inputElement);
  return paragraph;
};

module.exports = LifestyleView;
