var queryString = window.location.search.replace(/^\?/, '');
const myArray = queryString.split("&");
var name = myArray[0].slice(5);
var age = myArray[1].slice(4);
var medicinename = myArray[2].slice(13);


var matchname=document.getElementById("matchname");
var matchmedicine=document.getElementById("matchmedicine");
var matchage=document.getElementById("matchage");
var keys=Object.keys(localStorage);


for(var key of keys){
  if(key == name){continue;}
  var substringarray = localStorage.getItem(key).split(",");
  if(substringarray[1] == medicinename ){
    matchname.innerHTML = "Name: "+key;
    matchmedicine.innerHTML="Meicine: "+medicinename;
    matchage.innerHTML="Age: "+substringarray[0];
  };
}

localStorage.setItem(name,[age,medicinename]);
