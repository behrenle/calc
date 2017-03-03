var input  = document.getElementById("input");
var output = document.getElementById("output");

function keyListener(evt) {
  if (evt.keyCode == 13) {
    evt.preventDefault();
    evaluate(input.value);
  }
}
input.addEventListener("keypress", keyListener);
