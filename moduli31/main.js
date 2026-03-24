var btn_Circle = document.getElementById("btnCircle");
var btn_Rectangle = document.getElementById("btnRectangle");
var btn_Triangle = document.getElementById("btnTriangle");

var circle = document.getElementById("circle");
var rectangle = document.getElementById("rectangle");
var triangle = document.getElementById("triangle");




btn_Circle.onclick = function() {
    circle.setAttribute("class", "shape_circle");
}

btn_Rectangle.onclick = function() {
    rectangle.setAttribute("class", "shape_rectangle");
}

btn_Triangle.onclick = function() {
    triangle.setAttribute("class", "shape_triangle");
}




circle.onclick = function() {
    circle.setAttribute("class", "hide");
}

rectangle.onclick = function() {
    rectangle.setAttribute("class", "hide");
}

triangle.onclick = function() {
    triangle.setAttribute("class", "hide");
}

    