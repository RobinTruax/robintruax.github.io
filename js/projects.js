var svg = document.getElementById("im3");
var s = Snap(svg);

var simpleCup = Snap.select('#P1');
var fancyCup = Snap.select('#P2');

var simpleCupPoints = simpleCup.node.getAttribute('d');
var fancyCupPoints = fancyCup.node.getAttribute('d');

var toFancy = function(){
  simpleCup.animate({ d: fancyCupPoints }, 4000, mina.backout, toSimple);  
}

var toSimple = function(){
  simpleCup.animate({ d: simpleCupPoints }, 4000, mina.backout, toFancy); 
}

toSimple();