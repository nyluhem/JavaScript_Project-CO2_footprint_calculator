const PubSub = require('../helpers/pub_sub.js');

const LifestyleView = function(form) {
  this.form = form;
}

LifestyleView.prototype.bindEvents = function () {

  // event listener 1
  // user clicks Lifestyle tab in submenu
  // on click, dinamically create a form
  // create multiple checkboxes for lifestyle category
  // create submit button
  // render form

  // event listener 2
  // on submit, recalculate total points based on answers
  // publish result to new channel

};
