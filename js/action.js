// alert('ciao');
// prompt('ciao scrivi qualcosa');
var linko = document.getElementById('linko');
linko.outerText= "ciao";
console.log(linko);

var item= document.getElementsByClassName('item')[0];
item.innerHTML='<div>ciao</div>';

var titoli=document.getElementsByTagName('h1')[1];
console.log(titoli);

// outerText su chrome va su firefox no


// for (var i=0;i<50;i++){
// if(i==30) {continue;}
//
// document.write("sto al giro"+i+"<br>");
// }

 // break spezza
 var div=document.getElementById('lollo');
 var testo="";
for (var i = 0; i < 5; i++) {
testo+="<h1>ciao come va</h1>";}
div.innerHTML=testo;

}
