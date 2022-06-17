import { go } from './index.js'
import { setGo } from './index.js'
import { neuroshima_sprzet } from './neuroshima_objects.js'



function addEventDiv(_nobject) //jako _nobject wrzucamy oponenta lub sprzet i cos z nim robimy
{


    
    const eventNode = document.createElement("label");
          eventNode.classList.add("switch");  //dodajemy klasę switch do elementu
          eventNode.innerHTML="<br><input id=\"nobject_22\" type=\"checkbox\"><span class=\"slider\"></span>";

          document.getElementById("nstaskbar").appendChild(eventNode);

          //document.getElementById("nobject_22").addEventListener("click",resolveOrNot,false);

          document.getElementById("nobject_22").addEventListener("click",function(){resolveOrNot(_nobject);},false);
    
        

    setGo(false); //zatrzymujemy ciąg zdarzeń i czekamy na decyzję w zadaniu
    console.log('Uruchomiono zadanie, zatrzymuję i czekam na decyzję...');

}

function resolveOrNot(_nobject)
{ //po uruchomieniu zadania podejmujemy decyzję

   var taskStatus =  document.getElementById("nobject_22").checked; //pobieramy status zadania (jeżeli kliniemy checked idziemy dalej);

   //ale, możemy tez nie wykonać zadania, obmyśleć co wtedy

   //alert(taskStatus);
   console.log(taskStatus + " go status:" + go);
   

   if (taskStatus===true){ //jeżeli potwierdzamy wykonanie zadania, kontynuujemy przygodę
       _nobject.pokonano=true;
       setGo(true); }else {setGo(false);}



   console.log("go status changed: " + go);

   jsonTest();

}


function jsonTest()
{
    //https://www.w3schools.com/js/js_json_objects.asp
   

   console.log("nobject: " + neuroshima_sprzet[0].rodzaj);

}



//document.getElementById ("runNeuro").addEventListener ("click", runNeuroshima, false);


export {addEventDiv};