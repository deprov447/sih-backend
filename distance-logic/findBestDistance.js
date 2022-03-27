import heven_distance from './heven.js'
import {Client} from "@googlemaps/google-maps-services-js";

var origin1 = new google.maps.LatLng(55.930385, -3.118425);
var destinationB = new google.maps.LatLng(50.087692, 14.421150);

const allPendingTransactions= null;
const origon=null // Operators address

const sortByDistance= (origin)=>{
      return (a,b)=>{
        if()
      }
}

allPendingTransactions.sort(sortByDistance(origin))

const {Client} = require("@googlemaps/google-maps-services-js");


var service = new google.maps.DistanceMatrixService();
service.getDistanceMatrix(
  {
    origins: [origin1, origin2],
    destinations: [destinationA, destinationB],
    travelMode: 'DRIVING',
    transitOptions: TransitOptions,
    drivingOptions: DrivingOptions,
    unitSystem: UnitSystem,
    avoidHighways: Boolean,
    avoidTolls: Boolean,
  }, callback);
function callback(response, status) {
  if (status == 'OK') {
    var origins = response.originAddresses;
    var destinations = response.destinationAddresses;

    for (var i = 0; i < origins.length; i++) {
      var results = response.rows[i].elements;
      for (var j = 0; j < results.length; j++) {
        var element = results[j];
        var distance = element.distance.text;
        var duration = element.duration.text;
        var from = origins[i];
        var to = destinations[j];
      }
    }
  }
}
