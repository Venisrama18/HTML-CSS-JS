var button1 = document.getElementById('btn1');

button1.onclick = function() {
    alert("You clicked the button!");
}


var button2 = document.getElementById('btn2');

button2.onmouseleave = function() {
    alert("You left the button!");
}       


var button3 = document.getElementById('btn3');

button3.onmouseover = function() {
    alert("You hovered over the button!");
}   

var button4 = document.getElementById('btn4');

button4.onwheel = function() {
    alert("You wheeled over the button!");
}

var v_button = document.getElementById('btn5');

var v_text = document.getElementById('txt1');
v_button.onclick = function() {
    v_text.style.color = "red";
}
