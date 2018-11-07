const PubSub = require('../helpers/pub_sub.js');
const Highcharts = require('highcharts');

const TotalCalculator = function () {
// const Total = function() {
  this.values = {food: 0, travel: 0, lifestyle: 0};
};

TotalCalculator.prototype.bindEvents = function () {

  PubSub.subscribe('FoodInfo', (event) => {
    console.log('Results from food form', event.detail);
    const foodData = event.detail;
    this.values.food = parseInt(foodData)
  });

  PubSub.subscribe('TravelForm:display-results', (event) => {
    console.log('Results from travel form', event.detail);
    const travelData = event.detail;
    this.values.travel = parseInt(travelData)
  });

  PubSub.subscribe('LifestyleView:result', (event) => {
    console.log('Results from lifestyle form', event.detail);
    const lifestyleData = event.detail;
    this.values.lifestyle = parseInt(lifestyleData)
  });

  const button = document.querySelector('#clicky-button');

    button.addEventListener('click', () => {
    const result = this.calculateTotal();
    this.chart()
    console.log(result);
    PubSub.publish("PublishView:final-result", result);
    // need to subscribe to this in results view
  });

};

TotalCalculator.prototype.calculateTotal = function () {
  const array = Object.values(this.values)
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const result = array.reduce(reducer);

  return result;
};

TotalCalculator.prototype.chart = function () {

Highcharts.theme = {
  colors: ['#CD5C5C', '#20B2AA', '#3CB371', '#4682B4'],
  title: {
          style: {
              color: '#000',
              font: '16px "Helvetica"',
              textTransform: 'uppercase'
          }
},
legend: {
        itemStyle: {
            color: '#000',
            font: '"Helvetica"',
            textTransform: 'uppercase'
        }
}
};

Highcharts.setOptions(Highcharts.theme);



  const myChart = document.createElement("div")
  myChart.id = "chart-section"
  const theChart = Highcharts.chart(myChart, {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Your CO2 Footprint'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
       pie: {
           allowPointSelect: true,
           cursor: 'pointer',
           dataLabels: {
               enabled: false
           },
           showInLegend: true
       }
    },
    series: [{
        name: 'Porcentage',
        colorByPoint: true,
        data: [{
            name: 'Allowance',
            y: 100,
            // sliced: true,
            selected: true
        },
         {
            name: 'Food',
            y: this.values.food,
            sliced: true,
        },
        {
            name: 'Travel',
            y: this.values.travel
        }, {
            name: 'Lifestyle',
            y: this.values.lifestyle
        }]
    }]
});
const result = document.querySelector("#result-menu-item")
result.appendChild(myChart)
}
// chart();


module.exports = TotalCalculator;
