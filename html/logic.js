// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
// This gets inserted into the div with an id of "map".
var myMap = L.map("map", {
    center: [0, 0],
    zoom: 11
  });
  
  // Adding a tile layer (the background map image) to our map:
  // We use the addTo() method to add objects to our map.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  //adding markers 2015 Tropical Cyclones
  var marker = L.marker ([15.4, -61.3], {
      draggable: true,
      title: "Hurricane Erika"
  }).addTo(myMap);

  //Binding a popup to marker
  marker.bindPopup("August 2015 Hurricane Erika")