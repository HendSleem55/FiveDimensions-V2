$('.showsearch').click(function(){

   $('.advancedSearch').toggle(500);

})


var x = document.getElementById("mylocation");
function getLocation() {
    debugger;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
        alert("Geolocation is not supported by this browser.")
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=14&size=400x300&key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU";
    document.getElementById("mylocation").innerHTML = "<img src='"+img_url+"'>";
}

// getLocation();

// ---------------------------------------Rates function-------------------------------------------------------------


$('#fixed').raty({
  readOnly:  true,
  start:     4.3,
  half:  true,

});


$('.fixed2').raty({
    readOnly:  true,
    start:     3,
    half:  true,
  
  });

$('#half').raty({
    start: 3.3,
    showHalf: true
});
    





// --------------------------------------see More function---------------------------------------------------------------

$('.overflowedtoggled').hide();
var status = "less";

function toggleText()
{

    if (status == "less") {
        $('.overflowedtoggled').show();
        $(".toggleButton").html("(أقل)")
        status = "more";

    } else if (status == "more") {

        $('.overflowedtoggled').hide();
        $(".toggleButton").html(" ..المزيد")
        status = "less"
    }
}

$('.toggleButton').click(toggleText);


// --------------------------------------MAp  ---------------------------------------------------------------




function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}