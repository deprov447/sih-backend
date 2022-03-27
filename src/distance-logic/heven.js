function rad(x) {return x*Math.PI/180;}
function heven_distance(_place1,_place2){
	console.log("place 1 is",_place1);
	console.log("place 2 is",_place2);
	var lat = _place1.latitude;
    var lng = _place1.longitude;
    var R = 6371; // radius of earth in km
	var mlat = _place2.latitude;
	var mlng = _place2.longitude;
	var dLat  = rad(mlat - lat);
	var dLong = rad(mlng - lng);
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat)) * Math.cos(rad(lat)) * Math.sin(dLong/2) * Math.sin(dLong/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	var d = R * c;
	return d;
}

module.exports = heven_distance;