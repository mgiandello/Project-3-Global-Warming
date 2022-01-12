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
const TradeDeforestation = "https://github.com/mgiandello/Project-3-Global-Warming/tree/main/Data/Deforestation/Clean_data/TradeDeforestatio.json"

// Setting chart dimmensions
const chart_width = 1200;
const chart_height = 600;

// Setting X and Y axis values
const x = d3.scaleBand().rangeRound()[0, chart_width].padding(0.1);
const y = d3.scaleLinear().range([chart_height, 0]);

const chartContainer = d3
    .select('svg')
    .attr('width', chart_width)
    .attr('height', chart_height);

// Defining the domains, specifying how many items should be positioned along the axes    
    x.domain(deforestationData.map((d) => d.year));
    y,domain([0, d3.max(deforestationData, d => d.Imported Deforestation)) + 100]);

const chart = chartContainer.append('g');    

chart
    .selectAll('.bar')
    .data(deforestationData)
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('width', x.bandwith())
    .attr('height', deforestationData => chart_height - y(deforestationData.Imported Deforestation))
    .attr('x', deforestationData => x(deforestationData.year))
    .attr('y', deforestationData => y(deforestationData.Imported Deforestation));

// Fetching the json data and console logging it
d3.json(TradeDeforestation).then(function(data) {
    console.log(data);


});