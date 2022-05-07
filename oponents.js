//let oponents = []; //obiekty losowo wygenerowane jako przeciwnicy i przeszkody w neuroshimie


function createOponents(map,oponents) {
	
	
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
	
	
	
	
	//losuj markery oponent�w (ich pozycj�)
	for (let i = 0; i < 10; i++) {
		
		  var oponent_position = { lat: 50.4823+(Math.random()/100), lng: 17.3296+(Math.random()/100) }; //wokół nysy
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
			  
			  oponents.push(oponent); //dodajemy oponent�w do zbioru  
			  
	
	} 








	//losuj markery oponent�w (ich pozycj�)
	for (let j = 0; j < 10; j++) {
		
		var oponent_position = { lat: 50.4823-(Math.random()/100), lng: 17.3296-(Math.random()/100) };
		var oponent;	
		//var nysa = { lat: 50.4823+(Math.random()/100), lng: 17.3296+(Math.random()/100) };
		
		oponent = new google.maps.Marker({
			  position: oponent_position,
			  map: map,
			  icon: image,
			  title: "Oponent"+j,
			  label: "Oponent"+j, 
			  visible: true

			});
			
			oponents.push(oponent); //dodajemy oponent�w do zbioru  
			
  
  } 










	//losuj markery oponent�w (ich pozycj�)
	for (let k = 0; k < 10; k++) {
		
		var oponent_position = { lat: 50.4823+(Math.random()/200), lng: 17.3296-(Math.random()/200) };
		var oponent;	
		//var nysa = { lat: 50.4823+(Math.random()/100), lng: 17.3296+(Math.random()/100) };
		
		oponent = new google.maps.Marker({
			  position: oponent_position,
			  map: map,
			  icon: image,
			  title: "Oponent"+k,
			  label: "Oponent"+k, 
			  visible: true

			});
			
			oponents.push(oponent); //dodajemy oponent�w do zbioru  
			
  
  } 












	//losuj markery oponent�w (ich pozycj�)
	for (let l = 0; l < 10; l++) {
		
		var oponent_position = { lat: 50.4823-(Math.random()/200), lng: 17.3296+(Math.random()/200) };
		var oponent;	
		//var nysa = { lat: 50.4823+(Math.random()/100), lng: 17.3296+(Math.random()/100) };
		
		oponent = new google.maps.Marker({
			  position: oponent_position,
			  map: map,
			  icon: image,
			  title: "Oponent"+l,
			  label: "Oponent"+l, 
			  visible: true

			});
			
			oponents.push(oponent); //dodajemy oponent�w do zbioru  
			
  
  } 














	
	
}


export {createOponents};