// D3.js-based candlestick charts in javascript with Plotly

/* global Plotly */
// var url =
//   `https://www.quandl.com/api/v3/datasets/WIKI/FB.json?start_date=2016-10-01&end_date=2021-05-01&api_key=CzenFuuZimy84KFz61Kf`;
  var url =
  `https://www.quandl.com/api/v3/datasets/WIKI/FB.json?start_date=2016-10-01&end_date=2021-05-01&api_key=CzenFuuZimy84KFz61Kf`;

/**
 * Helper function to select stock data
 * Returns an array of values
 * @param {array} rows
 * @param {integer} index
 * index 0 - Date
 * index 1 - Open
 * index 2 - High
 * index 3 - Low
 * index 4 - Close
 * index 5 - Volume
 */
function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

function buildPlot() {
  d3.json(url).then(function(data) {

    // Grab values from the data json object to build the plots
    var name = data.dataset.name;
    var stock = data.dataset.dataset_code;
    var startDate = data.dataset.start_date;
    var endDate = data.dataset.end_date;
    var dates = unpack(data.dataset.data, 0);
    var openingPrices = unpack(data.dataset.data, 1);
    var highPrices = unpack(data.dataset.data, 2);
    var lowPrices = unpack(data.dataset.data, 3);
    var closingPrices = unpack(data.dataset.data, 4);

    var selectorOptions = {
      buttons: [{
          step: 'month',
          stepmode: 'backward',
          count: 1,
          label: '1m'
      }, {
          step: 'month',
          stepmode: 'backward',
          count: 6,
          label: '6m'
      }, {
          step: 'year',
          stepmode: 'todate',
          count: 1,
          label: 'YTD'
      }, {
          step: 'year',
          stepmode: 'backward',
          count: 1,
          label: '1y'
      }, {
        step: 'year',
        stepmode: 'backward',
        count: 5,
        label: '5y'
    },{
      step: 'year',
      stepmode: 'backward',
      count: 10,
      label: '10y'
  },{
          step: 'all',
      }],
    };

    var trace1 = {
      x: dates,
      close: closingPrices,
      high: highPrices,
      low: lowPrices,
      open: openingPrices,

      // cutomise colors
      increasing: {line: {color: 'green'}},
      decreasing: {line: {color: 'red'}},

      type: 'candlestick',
      xaxis: 'x',
      yaxis: 'y'
    };

    var data = [trace1];

    var layout = {
      title: `${stock} stock Candle Stick Chart`,
      xaxis: {
        rangeselector: selectorOptions,
        rangeslider: {}
      },
      yaxis: {
        fixedrange: true
      }
    };

    Plotly.newPlot("plot", data, layout);

  });
}

buildPlot();
