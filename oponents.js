let oponents = []; //obiekty losowo wygenerowane jako przeciwnicy i przeszkody w neuroshimie


function createOponents(map) {
	
	
  const image = {
    url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(10, 22),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 22),
	
	labelOrigin: new google.maps.Point(0, -10)
  };
	
	
	
	
	//losuj markery oponentów (ich pozycjê)
	for (let i = 0; i < 10; i++) {
		
		  var oponent_position = { lat: 50.4823+(Math.random()/100), lng: 17.3296+(Math.random()/100) };
          var oponent;	
		  //var nysa = { lat: 50.4823+(Math.random()/100), lng: 17.3296+(Math.random()/100) };
		  
		  oponent = new google.maps.Marker({
				position: oponent_position,
				map: map,
				icon: image,
				title: "Oponent"+i,
				label: "Oponent"+i, 
				visible: true

			  });
			  
			  oponents.push(oponent); //dodajemy oponentów do zbioru  
			  
	
	} 
	
	
}


export {createOponents};