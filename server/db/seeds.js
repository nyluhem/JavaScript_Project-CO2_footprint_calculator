// database name
use carbonCalculator;
db.dropDatabase();


// LIFESTYLE VALUES
db.lifestyle.insertMany([
  {
    label: "clothes",
    value: "1"
  },
  {
    label: "cosmetics",
    value: "2"
  },
  {
    label: "electronics",
    value: "3"
  }
]);

// FOOD VALUES
db.food.insertMany([
  {
    label: "diet",
    value: {
      vegetarian: "0",
      meat: "1"
    }
  },
  {
    label: "source",
    value: {
      local: "0",
      imported: "1"
    }
  },
  {
    label: "preparation",
    value: {
      cooked: "0",
      takeaway: "1"
  }
]);

// TRAVEL VALUES
db.travel.insertMany([
  {
    label: "car",
    value: {
      short: "1",
      medium: "2",
      long: "3"
    }
  },
  {
    label: "bus",
    value: {
      short: "1",
      medium: "2",
      long: "3"
  },
  {
    label: "bike",
    value: "0"
  }
]);
