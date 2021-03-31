var map;
var Rute;
var RuteService;
var markers= [
    ['Kr.Bedil',-8.339494, 116.190590 ],
    ['Kr.Amor',-8.337109, 116.188712 ],
    ['Kr.Anyar',-8.337449, 116.191716],
    ['Kr.Pendagi',-8.335889,116.191383],
    ['Lekok',-8.345836,116.178519],
    ['Gotim',-8.335900,116.193722]
];
// var DataKordinat= [];
// var no=1;

function initMap(){
    // menentukan kordinat peta 
    var MapOptions = {
        // Titik kordinat peta 
        center: new google.maps.LatLng(-8.373908,116.277707),
        zoom: 12,
        mapTypeId:google.maps.MapTypeId.HYBRID
    }
    map = new google.maps.Map(document.getElementById('map'), MapOptions);

    var infowindow = new google.maps.InfoWindow(), marker, i,j, frick; 
 
    for (i = 0; i < markers.length; i++) {  
    pos = new google.maps.LatLng(markers[i][1], markers[i][2]); 
    
    dahkota = pos;
    marker = new google.maps.Marker({
        position: pos,
        map: map
    });
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
            infowindow.setContent(markers[i][0]);
            infowindow.open(map, marker);
        }
    })(marker, i));
    for(j=5 ;j>=0; j--){
        frick = new google.maps.LatLng(markers[j][1], markers[j][2]);
        var mk1 = new google.maps.Marker({position: pos, map: map});
        var mk2 = new google.maps.Marker({position: frick, map: map});
        var line = new google.maps.Polyline({path: [pos, frick], map: map});
        var distance = haversine_distance(mk1, mk2);
        // document.getElementById('msg').innerHTML = "Jaraknya : " + distance.toFixed(2) + " km";
        console.log('Jarak Dari : '+markers[j][0]+'Ke : '+markers[i][0]+' Adalah : '+distance.toFixed(2) +' Km');
    }
    }
    
    
    
    
   

    // ketika peta di tekan
    // map.addListener('click', function(e){
    //     // membuat marker

    //     var marker = new google.maps.Marker({
    //         position: e.latLng(-8.339494, 116.190590),
    //         map: map,
    //         label: String(no)
            
    //     });
    //     // document.getElementById('jarak1').innerHTML = "Lat&Lng = "+ e.latLng;
        // DataKordinat.push(e.latLng);
        // console.log(DataKordinat[0]);
        // no +=1;
    // });
}


function haversine_distance(mk1, mk2) {
    var R = 3958.8; // Radius of the Earth in miles
    var rlat1 = mk1.position.lat() * (Math.PI/180); // Convert degrees to radians
    var rlat2 = mk2.position.lat() * (Math.PI/180); // Convert degrees to radians
    var difflat = rlat2-rlat1; // Radian difference (latitudes)
    var difflon = (mk2.position.lng()-mk1.position.lng()) * (Math.PI/180); // Radian difference (longitudes)

    var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
    return d;
  }

function cek(){
 
    
  }