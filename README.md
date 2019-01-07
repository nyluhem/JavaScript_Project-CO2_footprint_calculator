# Personal Carbon Dioxide Footprint Calculator

For this group project, we designed a web app that would enable a user to to find out what their carbon footprint was by completing a simple questionare. This projected was completed in four days, using JavaScript, Express, MongoDB and the High Charts API.

## Project Brief:

You have been approached by a lifestyle consultancy company dealing with environmental sustainability. Your task is to build a personal CO2 footprint checker app that calculates a user's CO2 footprint based on their lifestyle.

### MVP

* A user should be able to:
  1. submit values for various aspects of their lifestyle (e.g. diet, commute, recycling and heating routine, holiday habits, etc) and view their CO2 footprint. You'll need to create your own (simple) tested model to calculate this.
to update the values to see the effect on their CO2 footprint.
  2. view the CO2 footprint result in a visually interesting ways.

### Example Extensions
* Calculate and visualise projections of CO2 savings based on a user's input.
* Show the CO2 footprint result before and after the user has updated the values.

## To run the app:

In your Terminal:
* Change into the top level of this directory.
* Type "npm install" to install dependencies
* Type "npm start" and let it run in the background
* Open a new tab and type "npm run build", let it run in the background
* In a new tab, type "npm run server:dev" and let it run in the background
* In your web browser, go to http://localhost:3000/.

## What this app does:
  * takes input from users regarding their travel, eating and lifestyle habits
  * calculates their CO2 footprint based on the answers they provided.
  * uses Highcharts API to display results in a pie chart.
  
## What I would do to improve the app:
  * implement a formula that calculates true CO2 usage
  * utilise databases, to store a users previous inputs, populating pie charts that would appear in a "History" tab
  * send results to user via email, if they wish it
