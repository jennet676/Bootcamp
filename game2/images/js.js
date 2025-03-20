var number1=Math.floor(Math.random()*6)+1;
var randomDiceImg="dice"+ number1 +".png";

var randomImageSource="images/"+randomDiceImg;
var image1=document.querySelectorAll("img")[0]
image1.setAttribute("src",randomImageSource);

var number2=Math.floor(Math.random()*6)+1;

var randomImageSource2="images/dice"+number2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(number1===number2){
    document.querySelectorAll("h1").innerHTML="Denlik!";}
else if(number1>number2){
    document.querySelectorAll("h1").innerHTML="🚩Player 1 wins!";}
else if(number1<number2){
    document.querySelectorAll("h1").innerHTML="🏳️Player 2 wins!";}