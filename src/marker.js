const mapboxgl = require("mapbox-gl");


//You have an external marker.js module that exports a buildMarker function. 
const markerMaker = function(type, coordinateArray){
    const markerDomEl = document.createElement("div");
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = `url(${setMarker(type)})`;
    
 
    return new mapboxgl.Marker(markerDomEl)
    .setLngLat(coordinateArray)


//The buildMarker function returns a marker. 
    function setMarker(typeName){
        typeName = typeName.toLowerCase();
        if (typeName === "activity") {
            return 'http://i.imgur.com/WbMOfMl.png';
        } else if (typeName === 'hotel') {
            return 'http://i.imgur.com/D9574Cu.png';
        } else if (typeName === 'restaurant') {
            return 'http://i.imgur.com/cqR6pUI.png';
        }
    }
}

module.exports = markerMaker;