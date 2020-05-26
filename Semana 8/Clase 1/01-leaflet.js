var mymap = L.map('mapid').setView([-12.132065, -76.994511], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZ29uemFsb2Nhcmh1YWNoaW4iLCJhIjoiY2thbjVkY3RoMW0wMDJ3bXM4NWlhNTd2ayJ9.JDJKTYuWMapWJ7EvRDRZqQ'
}).addTo(mymap);

var marker = L.marker([-12.132065, -76.994511]).addTo(mymap);

var circle = L.circle([-12.136565, -76.994511], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 20
}).addTo(mymap);


mymap.on("click", (e) =>
{
    console.log(e);
    console.log("Latitud: " + e.latlng.lat);
    console.log("Longitud: " + e.latlng.lng);
})