// See post: http://asmaloney.com/2014/01/code/creating-an-interactive-map-with-leaflet-and-openstreetmap/

var map = L.map( 'map', {
    center: [21.889971, -102.296065],
    minZoom: 1,
    zoom: 12
    
    
});

L.tileLayer( 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'OpenStreetMap'
}).addTo( map );



function style(features) {
   return{
       fillColor: '#2b8cbe',
       weight: 5,
       opacity: 50000000,
       color: 'white',
       dashArray:'5',
       fillOpacity: 50000000,
       
       
       
   };
}

L.geoJson(geodata, {style: style}).addTo(map);

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}
function resetHighlight(e) {
    geojson.resetStyle(e.target);
}
//var geojson  = {
  //  fillColor: "#007800",
    //color: "#000",
    //weight: 0,
    //opacity: 0,
    //fillOpacity: 0.0
//};
//L.geoJson(geodata, {
    //polygonToLayer: function (feature, latlng) {
        //return L.GeoJSON(latlng, geojson);
    //}
//}).addTo(map);



//L.geoJson(geodata, {
//style: function(feature) {
  //  switch (feature.properties.Marginacio) {
    //    case 'Muy bajo': return {fillColor: "#ff0000",};
      //  case 'Bajo':   return {fillColor:"#0000ff"};
//    }
//}
//}).addTo(map);

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.Marginacio) {
        layer.bindPopup("<b>Clave geográfica:</b> "+feature.properties.CVEGEO);
    }
}

L.geoJson(geodata, {
    onEachFeature: onEachFeature
}).addTo(map);



