//let oponents = []; //obiekty losowo wygenerowane jako przeciwnicy i przeszkody w neuroshimie


function createSprzet(map,sprzety) {
	
	
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
	
	
	
	
	//losuj markery oponent�w (ich pozycj�)
	for (let i = 0; i < 10; i++) {
		
		  var sprzet_position = { lat: 50.4823+(Math.random()/100), lng: 17.3296+(Math.random()/100) }; //wokół nysy
          var sprzet;	
		  //var nysa = { lat: 50.4823+(Math.random()/100), lng: 17.3296+(Math.random()/100) };
		  
		  sprzet = new google.maps.Marker({
				position: sprzet_position,
				map: map,
				icon: image,
				title: "Sprzet: "+i,
				label: "Sprzet: "+i, 
				visible: true

			  });
			  
			  sprzety.push(sprzet); //dodajemy oponent�w do zbioru  
			  
	
	} 



	
}


export {createSprzet};