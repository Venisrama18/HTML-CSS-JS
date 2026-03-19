var button1 = document.getElementById('btn1')
var teksti = document.getElementById('txt1')

var button2 = document.getElementById('btn2')
var teksti2 = document.getElementById('txt2')




button1.onclick = function(){
    teksti.style.color = 'red'
    teksti.style.background = 'lightgrey'
    teksti.style.fontSize = '100px'
    teksti.style.padding = '20px'
    teksti.style.textAlign = 'center'
}


button2.onclick = function(){
    teksti2.style.cssText = 'color:red; background-color:green; text-Align:center; font-size:25px; font-family:fantasy;'
}

var ifundit = document.getElementById('ifundi')
var pg = document.getElementById('pg')


ifundit.onclick=function(){
    pg.setAttribute('class',"paragrafi")
}

