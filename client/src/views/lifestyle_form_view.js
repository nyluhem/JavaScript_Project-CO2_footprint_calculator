const PubSub = require('../helpers/pub_sub.js');

const LifestyleView = function(container) {
  this.form = container;
}

LifestyleView.prototype.bindEvents = function () {
  const menuItem = document.querySelector('#lifestyle-menu-item')
  menuItem.addEventListener('click', (event) => {
    console.log('menu item clicked');
    // renderForm
  });

  /////// Second event listener ///////
  // after selecting checkboxes, user clicks submit

  // add event listener to submit ID
  // publish answers to 'LifestyleView:Answers-submitted' channel

};

/////// renderForm function ///////
// populate with checkboxes
// create submit button

module.exports = LifestyleView;
