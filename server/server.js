const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const createRouter = require('./helpers/create_router.js');
const parser = require('body-parser');
const Highcharts = require('highcharts');

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

app.use(parser.json());

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db("users"); //database name
    const userCollection = db.collection("joeBloggs"); //collection name
    const calculationRouter = createRouter(userName); // change variable and collection name
    app.use('/api/joeBloggs', calculationRouter); //change link, router
  })
  .catch(console.err);

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
