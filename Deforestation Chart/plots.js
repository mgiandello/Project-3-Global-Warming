// import {deforestation} from 'data.js';
// let 
// const = deforestation


console.log(deforestation);

// Initialized arrays
let Entity = []
let Year = []
let importedDeforestation = []
let netTradedDeforestation = []
let perCapitaImportedDeforestation = []
let perCapitaNetTradedDeforestation = []

// for loop to populate arrays
for (let i = 0; i < deforestation.length; i++) {
    row = deforestation[i];
    Entity.push(row.pair);
    Year.push(row.pair);
    importedDeforestation.push(row.importedDeforestation);
    netTradedDeforestation.push(row.netTradedDeforestation);
    perCapitaImportedDeforestation.push(row.perCapitaImportedDeforestation);
    perCapitaNetTradedDeforestation.push(row.perCapitaNetTradedDeforestation);
}

// Trace1 for the imported deforesation 
let trace1 = {
    x: Entity,
    y: importedDeforestation,
    text: importedDeforestation,
    name: "Imported Deforesation",
    type: "bar"
};

// Trace2 for the net traded deforesation
let trace2 = {
    x: Entity,
    y: netTradedDeforestation,
    text: netTradedDeforestation,
    name: "Net Traded Deforesation",
    type: "bar"
};

// Trace3 for the per capita imported deforesation
let trace3 = {
    x: Entity,
    y: perCapitaImportedDeforestation,
    text: perCapitaImportedDeforestation,
    name: "per Capita Imported Deforesation",
    type: "bar"
};

// Trace4 for the per capita net traded deforesation
let trace4 = {
    x: Entity,
    y: perCapitaImportedDeforestation,
    text: perCapitaImportedDeforestation,
    name: "per Capita Imported Deforesation",
    type: "bar"
};

// Create data array
let data = [trace1, trace2];

let data2 = [trace3, trace4];

// Apply a title to the layout
let layout = {
    title: "Imported Deforestation vs. Net Traded Deforesation by Country"
}

let layout2 = {
    title: "per Capita Imported Deforestation vs. per Capita Net Traded Deforestation by Country"
}

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);

Plotly.newPlot("plot2", data2, layout2);