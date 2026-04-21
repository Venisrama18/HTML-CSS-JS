let i =0;
var text ="";

do{
    i = i +i;
    text += "i=" + i + "<br>"
}while(i<5)

document.getElementById("doWhileLoop").innerHTML = text;