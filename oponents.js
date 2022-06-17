//let oponents = []; //obiekty losowo wygenerowane jako przeciwnicy i przeszkody w neuroshimie
import { neuroshima_oponents } from './neuroshima_objects.js'


function createOponents(map,oponents,oponentsNum=5,originPoint) {
	
	
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
	for (let i = 0; i < oponentsNum; i++) {
		
		  var oponentMarker; 
		  var oponent_;

		  var one_or_minus_one = Math.round(Math.random()) * 2 - 1;

		  //var oponent_position = { lat: 50.4823  +  one_or_minus_one*(Math.random()/200), lng: 17.3296+ one_or_minus_one * (Math.random()/200) }; //wokół nysy
		  var oponent_position = { lat: originPoint.lat  +  one_or_minus_one*(Math.random()/200), lng: originPoint.lng+ one_or_minus_one * (Math.random()/200) }; //wokół nysy
        
		  //var nysa = { lat: 50.4823+(Math.random()/100), lng: 17.3296+(Math.random()/100) };
		  
		  oponentMarker = new google.maps.Marker({
			position: oponent_position,
			map: map,
			icon: image,
			title: "Oponent"+i,
			label: "Oponent"+i, 
			visible: false //domyślnie oponenci są niewidoczni, dopiero kiedy się do niego zbliżę i go zobaczę, pokazuje się

		  });




		  var keys = Object.keys(neuroshima_oponents);
        
		  oponent_ =  new Object();
          //oponent_ = neuroshima_oponents.plujka;
		  oponent_ = neuroshima_oponents[keys[keys.length * Math.random() << 0]];
          oponent_.marker = oponentMarker;
          oponent_.marker.title = oponent_.nazwa;
          oponent_.marker.label = oponent_.nazwa;
		   
          /*
		  oponent_ = new neuroshima_oponents.plujka(
			 { marker : oponentMarker}
		  );
		   */
			  
		  //oponents.push(oponentMarker); //dodajemy oponent�w do zbioru  
		  oponents.push(oponent_);
			  
	
	} 








	//losuj markery oponent�w (ich pozycj�)
	/*
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
*/









	//losuj markery oponent�w (ich pozycj�)
	/*
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
*/











	//losuj markery oponent�w (ich pozycj�)
	/*
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

*/












	
	
}


export {createOponents};