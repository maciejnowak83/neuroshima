var markers = [];

var marker;

var m = 0;

let map;

let player1;

let nstaskbar;

let oponents = [];


import {createOponents} from './oponents.js';


document.getElementById ("runNeuro").addEventListener ("click", runNeuroshima, false);


//uruchamiamy pwa
window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}




function runNeuroshima() {
	//window.initMap = initMap;
	
	initMap(); //uruchom silnik mapy
	createOponents(map,oponents);
	makeMapFullScreen(); //ustaw mapę na pełny ekran
		
	
}



// Initialize and add the map
function initMap() {
  // The location of nysa
  const nysa = { lat: 50.4823, lng: 17.3296 };
  // The location of stara jamka
  const stara_jamka = {lat:50.4783, lng: 17.6546 };
  // The location of stara jamka
  const znajdz_mnie = {lat:50.4824, lng: 17.3298};
  
  // The map, centered at nysa
  //https://developers.google.com/maps/documentation/javascript/examples/style-array ostylowanie mapy (np nigt mode)
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 20,
    center: nysa,
    styles: [  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    }, 
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#263c3f" }],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#6b9a76" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#38414e" }],
    }

  ],
	disableDefaultUI: true //wyłączamy domyślny interfejs
  });
  
  
  

  // initFullscreenControl(map);


  /*
  numberMarkerImg = {
        url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        labelOrigin: new google.maps.Point(9, 9)
};
 */ 
 
   const image = {
    url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32),
	
	labelOrigin: new google.maps.Point(0, -10)
  };

 
 
  //https://developers.google.com/maps/documentation/javascript/reference/marker
  // The marker, positioned at nysa
  marker = new google.maps.Marker({
    position: nysa,
    map: map,
	icon: image,
	title: "Nysa, niesamowite miasto",
    label: "Macio",
	visible: false

  });
  
  const marker_stara_jamka = new google.maps.Marker({
    position: stara_jamka,
    map: map,
	title: "Stara jamka"
  });
  
  
  const marker_znajdz_mnie = new google.maps.Marker({
    position: znajdz_mnie,
    map: map,
	title: "Neuroshima test",
    label: "Neuroshima test"
  });
  
  
  
    var requestZnajdzMnie = {
    location: map.getCenter(),
    radius: '5000',
    query: 'Neuroshima test'
  };



   player1 = new google.maps.Marker({
    position: nysa,
    map: map,
    title: "Player1",
    label: "Player1"
  });

  
  
  //add every marker to array
  markers.push(marker);


  
  const locationButton = document.createElement("button");
  const btnZnajdzMnie = document.createElement("button");
  const locationButtonDiv = document.createElement("div");
  const fullscreenButtonDiv = document.createElement("div");
        nstaskbar = document.querySelector("#nstaskbar");
  
  //dodajemy przycisk locationButton
  CenterControl(locationButtonDiv, map);
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButtonDiv);

  
  //dodajemy przycisk fullscreen
  initFullscreenControl(fullscreenButtonDiv,map);
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(fullscreenButtonDiv);
   
  //dodajemy nstaskbar
  map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(nstaskbar);
  nstaskbar.style.display="block";

  

  locationButton.textContent = "Moja lokalizacja";
  //locationButton.classList.add("custom-map-control-button");
  locationButton.classList.add("find-me");
  //map.controls[google.maps.ControlPosition.TOP_LEFT].push(locationButton);


  btnZnajdzMnie.textContent = "ZnajdzMnie";
  btnZnajdzMnie.classList.add("custom-map-control-button");
  //map.controls[google.maps.ControlPosition.TOP_LEFT].push(btnZnajdzMnie);
  

  
    locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
	

	
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

		//  alert(pos.lat + ' ' + pos.lng);
	
        //infoWindow.setPosition(pos);
       //  infoWindow.setContent("Location found.");
        //  infoWindow.open(map);
		
		
        // map.setCenter(pos);  //ustaw mapę na mojej pozycji
		 
		 
		 //i dodaj marker
     /*
		  player1 = new google.maps.Marker({
				position: pos,
				map: map,
				title: "Hej tutaj jestem",
				label: "Hej tutaj jestem"
	    });
  
		  */
		  
		  
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
	  
    }
  });
  
  
  
  
  
      btnZnajdzMnie.addEventListener("click", () => {
   
     
         var service = new google.maps.places.PlacesService(map);
	     service.textSearch(requestZnajdzMnie, callback);


   
   
	});
  
        
    google.maps.event.addListener(map, 'click', find_closest_marker2);
    
   
}




// Checks that the PlacesServiceStatus is OK, and adds a marker
// using the place ID and location from the PlacesService.
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
	  
	  
	  window.alert('znalazlem');
	  
    var marker = new google.maps.Marker({
      map: map,
      place: {
        placeId: results[0].place_id,
        location: results[0].geometry.location
      }
    });
	
	
	
  }
}







function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}



function rad(x) {return x*Math.PI/180;}




function find_closest_marker( event ) {
    var lat = event.latLng.lat();
    var lng = event.latLng.lng();
    var R = 6371; // radius of earth in km
    var distances = [];
    var closest = -1;
    for( i=0;i<map.markers.length; i++ ) {
        var mlat = map.markers[i].position.lat();
        var mlng = map.markers[i].position.lng();
        var dLat  = rad(mlat - lat);
        var dLong = rad(mlng - lng);
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(rad(lat)) * Math.cos(rad(lat)) * Math.sin(dLong/2) * Math.sin(dLong/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c;
        distances[i] = d;
        if ( closest == -1 || d < distances[closest] ) {
            closest = i;
        }
    }

    alert(map.markers[closest].title);
}





function find_closest_marker2(event) {
      var distances = [];
      var closest = -1;
	  var i=0;
      for (i = 0; i < markers.length; i++) {
        var d = google.maps.geometry.spherical.computeDistanceBetween(markers[i].position, event.latLng);
        distances[i] = d;
        if (closest == -1 || d < distances[closest]) {
          closest = i;
        }
      }
      alert('Closest marker is: ' + markers[closest].getTitle() + ' distance: ' + distances[closest]);
    }


//funkcja co sekunde przemieszcza marker
 setInterval(function() {

  
      m = m + 0.000005;
  //    const nysa = { lat: 50.4823, lng: 17.3296 };
  marker.setPosition( new google.maps.LatLng(  50.4823+m,  17.3296+m) );
  
  //tak ustawiamy nowy label na markerze
  //maker.setLabel('test');
  if (marker.getVisible()===false)
  {
  marker.setVisible(true);
  }else 
  {
	marker.setVisible(false);
  }
  
  
}, 1000);


//funkcja co 2 sekundy dodane 
setInterval(function() {

  
 //const node = document.createElement("p");
 //const textnode = document.createTextNode("Water");
 //node.appendChild(textnode);
  

   const nstaskbar = document.querySelector("#nstaskbar");

   let rnd = Math.random()*100;
     //    nstaskbar.innerHTML="<p style='color:yellow;'>"+rnd+"</p>";

  //nstaskbar.appendChild(node);
    

},2000)





//odświerz moją pozycję (dodaj marker nowy za każdym razem)
setInterval(function(){

  refreshMyMarkerPosition();

},10000)




  function makeMapFullScreen()
  {
	  //funkcja która ustawia mapę na full screen
	const elementToSendFullscreen = document.getElementById("map");
	   
	  
	   if (isFullscreen(elementToSendFullscreen)) {
      exitFullscreen();
    } else {
      requestFullscreen(elementToSendFullscreen);
    }
	
	
  }









function initFullscreenControl(controlDiv,map) {
	
 // const elementToSendFullscreen = map.getDiv().firstChild;
 
 const elementToSendFullscreen = document.getElementById("map");
  
 // const fullscreenControl = document.querySelector(".fullscreen-control");
  
 const fullscreenControl = document.createElement("div");

  fullscreenControl.style.backgroundColor = "#fff";
  fullscreenControl.style.border = "2px solid #fff";
  fullscreenControl.style.borderRadius = "3px";
  fullscreenControl.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  fullscreenControl.style.cursor = "pointer";
  fullscreenControl.style.marginTop = "8px";
  fullscreenControl.style.marginBottom = "22px";
  fullscreenControl.style.textAlign = "center";
  fullscreenControl.title = "Click to recenter the map";
  controlDiv.appendChild(fullscreenControl);

  // Set CSS for the control interior.
  const controlText = document.createElement("div");

  controlText.style.color = "rgb(25,25,25)";
  controlText.style.fontFamily = "Roboto,Arial,sans-serif";
  controlText.style.fontSize = "16px";
  controlText.style.lineHeight = "38px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
  controlText.innerHTML = "Pełny ekran";
  fullscreenControl.appendChild(controlText);
  
    
 

  map.controls[google.maps.ControlPosition.RIGHT_TOP].push(fullscreenControl);
  
  fullscreenControl.onclick = function () {
	  
    if (isFullscreen(elementToSendFullscreen)) {
      exitFullscreen();
    } else {
      requestFullscreen(elementToSendFullscreen);
    }
	
  };

  document.onwebkitfullscreenchange =
    document.onmsfullscreenchange =
    document.onmozfullscreenchange =
    document.onfullscreenchange =
      function () {
        if (isFullscreen(elementToSendFullscreen)) {
          fullscreenControl.classList.add("is-fullscreen");
        } else {
          fullscreenControl.classList.remove("is-fullscreen");
        }
      };
}




function isFullscreen(element) {
  return (
    (document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement) == element
  );
}






function requestFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullScreen) {
    element.msRequestFullScreen();
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}





function find_closest_oponent(myLatLng) {
  var distances = [];
  var closest = -1;
var i=0;
  for (i = 0; i < oponents.length; i++) {

    var d = google.maps.geometry.spherical.computeDistanceBetween(oponents[i].position,myLatLng); //oblicza odleglosc w metrach pomiędzy player1 a oponentem

    distances[i] = d;
    if (closest == -1 || d < distances[closest]) {
      closest = i;
    }
    

    if (distances[closest] <= 50) { //czy obiekt jest w odleglosci 50 metrów lub mniejszej ?

     nstaskbar.innerHTML="napotkałem: " + oponents[closest].getTitle() + " w odległości" + distances[closest];
     // alert('Closest marker is: ' + oponents[closest].getTitle() + ' distance: ' + distances[closest]);
   }else
   {
      nstaskbar.innerHTML="czysto";
   }


  }




 // alert('Closest marker is: ' + markers[closest].getTitle() + ' distance: ' + distances[closest]);

}







function refreshMyMarkerPosition()
{
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

     //aktualizuje pozycje gracza1
     player1.setPosition( new google.maps.LatLng(position.coords.latitude,position.coords.longitude) );

    //ustawia mapę na pozycji gracza
    map.setCenter(pos);  //ustaw mapę na mojej pozycji

     //sprawdza czy w zadanej odleglosci widzimy jakiegos oponenta
     find_closest_oponent(pos)
    
      },
      () => {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  
  }
}






function CenterControl(controlDiv, map) {
  // Set CSS for the control border.
  const controlUI = document.createElement("div");

  controlUI.style.backgroundColor = "#fff";
  controlUI.style.border = "2px solid #fff";
  controlUI.style.borderRadius = "3px";
  controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlUI.style.cursor = "pointer";
  controlUI.style.marginTop = "8px";
  controlUI.style.marginBottom = "22px";
  controlUI.style.textAlign = "center";
  controlUI.title = "Click to recenter the map";
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  const controlText = document.createElement("div");

  controlText.style.color = "rgb(25,25,25)";
  controlText.style.fontFamily = "Roboto,Arial,sans-serif";
  controlText.style.fontSize = "16px";
  controlText.style.lineHeight = "38px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
  controlText.innerHTML = "Pokaż gdzie jestem";
  controlUI.appendChild(controlText);
  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener("click", () => {
    // Try HTML5 geolocation.
	

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

		//  alert(pos.lat + ' ' + pos.lng);
	
        //infoWindow.setPosition(pos);
       //  infoWindow.setContent("Location found.");
        //  infoWindow.open(map);
		
         map.setCenter(pos);
		 
		 
		 //i dodaj marker
		  const tutaj_jestem = new google.maps.Marker({
				position: pos,
				map: map,
				title: "Hej tutaj jestem",
				label: "Hej tutaj jestem"
	    });
  
		  
		  
		  
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
	  
    }
  });
  

  
}



