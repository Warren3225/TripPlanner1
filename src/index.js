//console.log("Hello from JavaScript");
const markerMaker = require('./marker.js');
const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1Ijoid2FycmVuMzIyNSIsImEiOiJjamQxdG0zZjMxaTRkMndtdzVzb3lpbzd2In0.FFAIQaCWZiFXYxHM0JZD2g";

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

//create a new, detached DOM Element and pass it as parameter to the mapboxgl.Marker() constructor function. 
//Then you can set the marker's coordinates (by calling setLngLat) and, finally, attach it to the map using addTo.
// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";


//buildMarker in the index.js file to add a marker to the map
let marker = markerMaker('activity', [-87.6354, 41.8885]);
    marker.addTo(map);

