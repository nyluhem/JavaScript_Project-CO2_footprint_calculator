const PubSub = require('../helpers/pub_sub.js');
const LifesstyleView = require ('../views/lifestyle_form_view');

const GridView = function (container) {
  this.container = container;
};

GridView.prototype.bindEvents = function () {
  PubSub subscribe('Results:data-loaded', (event) => {
    this.render(event.detail)
  });
};

// GridView.prototype.render = function (results) {
//   this.container.innerHTML = " ";
//   const resultview = new ResultView(this.container);
//   results.forEach.((result) => resultview.render(result));
// };

module.exports = GridView;

// forms-window
