//let oponents = []; //obiekty losowo wygenerowane jako przeciwnicy i przeszkody w neuroshimie
import { neuroshima_sprzet } from './neuroshima_objects.js'

function createSprzet(map,sprzety,ileSprzetu=10,originPoint) {
	
	
  const image = {
    //url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
	//url: "./images/marker-storm.png",
	url: "./images/bottle.png",
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(48, 48), //jeżeli rozmiar pikselu to 48px na 48px to wpisujemy tutaj (48,48)
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 22),
	
	labelOrigin: new google.maps.Point(0, -10)
  };
	
	
	
	
	//losuj sprzet i rozlokuj je na mapie
	for (let i = 0; i < ileSprzetu; i++) {
		

		 var one_or_minus_one = Math.round(Math.random()) * 2 - 1;

		  //var sprzet_position = { lat: 50.4823 + one_or_minus_one*(Math.random()/200), lng: 17.3296 + one_or_minus_one*(Math.random()/200) }; //wokół nysy
		  var sprzet_position = { lat: originPoint.lat + one_or_minus_one*(Math.random()/200), lng: originPoint.lng + one_or_minus_one*(Math.random()/200) }; 
          var sprzetMarker;	
		  var sprzet_;

		  //var nysa = { lat: 50.4823+(Math.random()/100), lng: 17.3296+(Math.random()/100) };
		  
		  sprzetMarker = new google.maps.Marker({
				position: sprzet_position,
				map: map,
				icon: image,
				title: "Sprzet: "+i,
				label: "Sprzet: "+i, 
				visible: true

			  });


		  var keys = Object.keys(neuroshima_sprzet);

		  sprzet_ =  new Object();

		  //sprzet_ = neuroshima_sprzet.alkohol_mar_litr;
		  sprzet_ = neuroshima_sprzet[keys[keys.length * Math.random() << 0]];

		  sprzet_.marker = sprzetMarker;
		  sprzet_.marker.title = sprzet_.nazwa;
          sprzet_.marker.label = sprzet_.nazwa;
			  
		  sprzety.push(sprzet_); //dodajemy oponent�w do zbioru  
			  
	
	} 



	
}


export {createSprzet};