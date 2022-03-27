const heven_distance=require('./heven')
const axios=require('axios')
const res = require('express/lib/response')
//var origin1 = new google.maps.LatLng(55.930385, -3.118425);
//var destinationB = new google.maps.LatLng(50.087692, 14.421150);
const sortByDistance= (origin)=>{
      console.log("In Sorter")
      return (a,b)=>{
        if(heven_distance(origin,a.location)<heven_distance(origin,b.location))
          {
            return -1;
          }
        else if(heven_distance(origin,a.location)>heven_distance(origin,b.location))
          {
            return 1;
          }
        else 
          return 0;
      }
}

// const origin=null // Operators address



const findBestDistance=async (origin,data)=>{
  // const {Client} = require("@googlemaps/google-maps-services-js");
  // const service = new google.maps.DistanceMatrixService();
  // const allPendingTransactions=[]
  data.sort(sortByDistance(origin));
  const destinations=data.slice(0,10);
  console.log("Destinations are");
  console.log(destinations);
  let temp_destinations=[];
  temp_destinations.push({
    "latLng":{
      "lat":Number(origin.latitude),
      "lng":Number(origin.longitude)
    }
  });
  destinations.map((obj)=>{
    temp_destinations.push({
      "latLng":{
        "lat":obj.location.latitude,
        "lng":obj.location.longitude
      }
    })
  });
  console.log(temp_destinations);
  const resp=await axios.post('http://www.mapquestapi.com/directions/v2/routematrix?key=IUrItFl7ZTI3Gcug0czzqAiBW4e3O6W9 ', {
    "locations":temp_destinations,
    "options" :{
      "manyToOne":true
    }
  })
  let times=resp.data.time;
  times=times.slice(1,times.length-1);
  const index=times.indexOf(Math.min.apply(null, times));
  console.log(destinations[index]._id);
  return destinations[index]._id;

}
module.exports=findBestDistance;