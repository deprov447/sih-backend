import heven_distance from './heven.js'
import {Client} from "@googlemaps/google-maps-services-js";

//var origin1 = new google.maps.LatLng(55.930385, -3.118425);
//var destinationB = new google.maps.LatLng(50.087692, 14.421150);
const sortByDistance= (origin)=>{
      return (a,b)=>{
        if(heven_distance(origin,a)<heven_distance(origin,b))
          return -1;
        else if(heven_distance(origin,a)>heven_distance(origin,b))
          return 1;
        else 
          return 0;
      }
}

const origin=null // Operators address

function getMinElement(response, status) {
  if (status == 'OK') {
    let origins = response.originAddresses;
    let destinations = response.destinationAddresses;
    let min=Infinity;
    let minUid=null;
    for (let i = 0; i < origins.length; i++) {
      let results = response.rows[i].elements;
      for (let j = 0; j < results.length; j++) {
        let element = results[j];
        let distance = element.distance.value;
        let duration = element.duration.value;
        let from = origins[i];
        let to = destinations[j];
        if( duration < min)
        {
          min=duration;
          minUid=c_uid;
        }
      }
    }
  }
}


export findBestDistance=(origin)=>{
  const {Client} = require("@googlemaps/google-maps-services-js");
  const service = new google.maps.DistanceMatrixService();
  const allPendingTransactions=[]
  allPendingTransactions.sort(sortByDistance(origin))
  const destinations=allPendingTransactions.slice(0,10);
  const bestUser=service.getDistanceMatrix(
  {
    origins: [origin],
    destinations: destinations,
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC,
    avoidHighways: false,
    avoidTolls: false,
  },getMinElement);
  return bestUser;  
}