const display = document.getElementById('display');

function insert(num){
  //display number on input
  display.value = display.value + num;
}

function clean() {
  // cleans input area
  display.value = "";
}

function back() {
  var text = display.value;
  // remove last character from string
  display.value = text.substring(0,text.length-1);
}

function calculate(){
  // eval calculation
  var text = display.value;
  display.value = eval(text);
}