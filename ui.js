import { go } from './index.js'
import { setGo } from './index.js'

function addEventDiv()
{

    const eventNode = document.createElement("label");
          eventNode.classList.add("switch");  //dodajemy klasę switch do elementu
          eventNode.innerHTML="<input id=\"nobject_22\" type=\"checkbox\"><span class=\"slider\"></span>";

          document.getElementById("nstaskbar").appendChild(eventNode);

          document.getElementById("nobject_22").addEventListener("click",resolveOrNot,false);

    setGo(false); //zatrzymujemy ciąg zdarzeń i czekamy na decyzję w zadaniu
    console.log('Uruchomiono zadanie, zatrzymuję i czekam na decyzję...');

}

function resolveOrNot()
{ //po uruchomieniu zadania podejmujemy decyzję

   var taskStatus =  document.getElementById("nobject_22").checked; //pobieramy status zadania (jeżeli kliniemy checked idziemy dalej);

   //ale, możemy tez nie wykonać zadania, obmyśleć co wtedy

   //alert(taskStatus);
   console.log(taskStatus + " go status:" + go);
   

   if (taskStatus===true){
       setGo(true); }



   console.log("go status changed: " + go);

}

//document.getElementById ("runNeuro").addEventListener ("click", runNeuroshima, false);


export {addEventDiv};