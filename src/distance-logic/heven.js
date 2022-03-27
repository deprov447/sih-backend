export function rad(x) {return x*Math.PI/180;}
export function heven_distance(_place1,_place2){
    var lat = _place1.lat
    var lng = _place1.lng;
    var R = 6371; // radius of earth in km
	var mlat = _place2.lat();
	var mlng = _place2.lng();
	var dLat  = rad(mlat - lat);
	var dLong = rad(mlng - lng);
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat)) * Math.cos(rad(lat)) * Math.sin(dLong/2) * Math.sin(dLong/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	var d = R * c;
	return d;
}