const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const TravelCalculator = function (){

};

  //assign points to each option and then have it increase/decrease where appropriate.
  //i.e. 20+ miles by car = 10 points(??). Using Bike/Walking is equal to 0.
  //calculation should basically take the value from response:

  //If option-3 selected then + 10points
  //if option-2 selected than + 5 points
  //if yes selected then - 10 points(?)
  //then add the first option, to the second option, to the third option.

  //Will also need to be able to post this submitted information, and edit it.



module.exports = TravelCalculator
