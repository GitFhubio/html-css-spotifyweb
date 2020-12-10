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
