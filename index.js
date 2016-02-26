var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();

var listener = new window.keypress.Listener();

var updatePara = function(e) {
  document.getElementById("para").innerHTML = "Keypress :" + e.keyCode;
};

listener.simple_combo("s", updatePara);
listener.simple_combo("w", updatePara);
listener.simple_combo("a", updatePara);
listener.simple_combo("d", updatePara);
listener.simple_combo("space", updatePara);
