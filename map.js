// variabel
var map;
var RuteTampil;
var RuteService;
var PasanganTitik = [];
var no=1;

function haversine_distance(mk1, mk2) {
    var R = 3958.8; // Radius of the Earth in miles
    var rlat1 = mk1.position.lat() * (Math.PI/180); // Convert degrees to radians
    var rlat2 = mk2.position.lat() * (Math.PI/180); // Convert degrees to radians
    var difflat = rlat2-rlat1; // Radian difference (latitudes)
    var difflon = (mk2.position.lng()-mk1.position.lng()) * (Math.PI/180); // Radian difference (longitudes)

    var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
    return d;
  }


// menampilkan peta
function initMap(){
    // menentukan kordinat peta
    var mapOptios={
        // center atau kordinat pada peta yang akan ditampilkan
        center: new google.maps.LatLng(-8.373908,116.277707),
        // zoom peta
        zoom: 12,
        // type map
        mapTypeId:google.maps.MapTypeId.HYBRID
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptios);

    // ketika peta di tekan
    map.addListener('click', function(e){
        // membuat marker

        var marker = new google.maps.Marker({
            position: e.latLng,
            map: map,
            label: String(no)
            
        });
        // document.getElementById('jarak1').innerHTML = "Lat&Lng = "+ e.latLng;
        PasanganTitik.push(e.latLng);
        console.log(PasanganTitik[0]);
        no +=1;
    });
   
}

function cek(){
     // Locations of landmarks
  const dakota = PasanganTitik[0];
  const frick = PasanganTitik[1];
   // The markers for The Dakota and The Frick Collection
   var mk1 = new google.maps.Marker({position: dakota, map: map});
   var mk2 = new google.maps.Marker({position: frick, map: map});
   // Draw a line showing the straight distance between the markers
    var line = new google.maps.Polyline({path: [dakota, frick], map: map});
    // Calculate and display the distance between markers
    var distance = haversine_distance(mk1, mk2);
    document.getElementById('msg').innerHTML = "Jaraknya : " + distance.toFixed(2) + " km";
}
