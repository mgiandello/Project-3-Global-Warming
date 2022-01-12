// // Initializes the page with a default plot
// function init() {
//     data = [{
//         x: [],
//         y: [] }];

//         Plotly.newPlot("plot", data);
// }

// // Call updatePlotly() when a change takes place to the DOM
// d3.selectall("#Select Dataset").on("change", updatePlotly);

// // This function is called when a dropdown menu item is selected
// function updatePlotly() {
//     // Use d3 to select the dropdown menu
//     var dropdownMenu = d3.select("#Select Dataset");
//     // Assign the value of the dropdown menu option to a variable
//     var ForestAreaChange = dropdownMenu.property("value");

//     //Initialize the x and y arrays
//     var x = [];
//     var y = [];

//     if (dataset === 'TradeDeforestation') {
//         x = [];
//         y = []; 
//     }

//     Plotly.restyle("plot", "x", [x]);
//     Plotly.restyle("plot", "y", [y]);
// }

// init();

// Getting the json file endpoint
const deforestation = "TradeDeforestation.js"

// Setting chart dimmensions
const margins = {top: 20, bottom: 10};
const chart_width = 1200;
const chart_height = 600 - margins.top - margins.bottom;


// Setting X and Y axis values
const x = d3.scaleBand().rangeRound()[0, chart_width].padding(0.1);
const y = d3.scaleLinear().range([chart_height, 0]);

const chartContainer = d3
    .select('svg')
    .attr('width', chart_width)
    .attr('height', chart_height + margins.top + margins.bottom);

// Defining the domains, specifying how many items should be positioned along the axes    
    x.domain(deforestationData.map((d) => d.year));
    y,domain([0, d3.max(deforestationData, (d) => d.ImportedDeforestation) + 100]);

const chart = chartContainer.append('g');    

chart.append('g')
    .call(d3.axisBottom(x))
    .attr('transform', `translate(0, ${chart_height}))
    .attr('color', #);

chart
    .selectAll('.bar')
    .data(deforestationData)
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('width', x.bandwith())
    .attr('height', deforestationData => chart_height - y(deforestationData.ImportedDeforestation))
    .attr('x', deforestationData => x(deforestationData.year))
    .attr('y', deforestationData => y(deforestationData.ImportedDeforestation));

// Creating labels for the chart
chart.selectAll('label')
    .data(deforestationData)
    .enter()
    .append('text')
    .text((deforestationData) => deforestationData.ImportedDeforestation)
    .attr('x', data => x(deforestationData.year))
    .attr('y', data => y(deforestationData.ImportedDeforestation))
    .attr('text-anchor', 'middle')
    .classed('label', true);

const listItems = d3.select('#data').select('ul').selectAll('li).data((deforestationData))

// Fetching the json data and console logging it
d3.json(TradeDeforestation).then(function(data) {
    console.log(data);


});

