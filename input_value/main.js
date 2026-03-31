var input = document.getElementById("input_id");
var button = document.getElementById("btn_id");
var text = document.getElementById("text_id");

button.onclick = function() {
    text.innerHTML = input.value;
}


var input2 = document.getElementById("input_id2");
var input3 = document.getElementById("input_id3");
var text2 = document.getElementById("text_id2");
var button2 = document.getElementById("btn_id2");
var text3 = document.getElementById("text_id3");

button2.onclick = function() {
    var text_id2 = parseInt(input2.value) + parseInt(input3.value);
}


button2.onclick = function() {
    var text_id3 = parseInt(input3.value) + parseInt(input3.value);
     if(text_id3 > 10){
        text3.innerHTML = "Shuma eshte me e madhe se 10";
    }else if(text_id3 < 10){
        text3.innerHTML = "Shuma eshte me e vogel se 10";
    }else{
        text3.innerHTML = "Shuma eshte 10";
    }
}