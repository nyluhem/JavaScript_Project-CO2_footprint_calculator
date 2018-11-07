const Recommendation = function (recommendations) {
  this.recommendations = [
      {
        category: "travel",
        quotes: ["Why not walk or cycle today?", "You could car share with someone", "Run more errands in your next trip", "Get some fresh air, take a walk today"]
      },
      {
        category: "food",
        quotes: ["Cook a homemade meal for tomorrow to reduce your CO2 footprint", "Check the label next time you buy food, look for local produce", "Try a delicious vegetarian meal this week", "Make your next meal vegetarian"]
      },
      {
        category: "lifestyle",
        quotes: ["Find an alternative product that could reduce your C02 footprint", "Donate your unused things to another to help keep CO2 emissions down", "If you're not using it, turn it off", "Do you know where your purchase was made?"]
      }
    ];
};

Recommendation.prototype.generate = function (category){

  const randomNumber = Math.floor(Math.random() * 4);

  const paragraph = document.createElement('p');
  const quoteDiv = document.querySelector("#random-quote")
  quoteDiv.innerHTML = ""

  switch (category) {
    case "travel":
    paragraph.innerHTML = this.recommendations[0].quotes[randomNumber];
    quoteDiv.appendChild(paragraph)
    break;
    case "food":
    paragraph.innerHTML = this.recommendations[1].quotes[randomNumber];
    quoteDiv.appendChild(paragraph)
    break;
    case "lifestyle":
    paragraph.innerHTML = this.recommendations[2].quotes[randomNumber];
    quoteDiv.appendChild(paragraph)
    break;
  }

};

module.exports = Recommendation;
