var rndInt = Math.floor(Math.random() * 6) + 1;

var randomdiceimage = "dice" + rndInt + ".png";

var randomimagesource= "images/" + randomdiceimage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimagesource);

var rndInt2 = Math.floor(Math.random() * 6) + 1;


var randomimagesource2= "images/dice" + rndInt2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);

if(rndInt>rndInt2){

    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(rndInt<rndInt2){

    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{

    document.querySelector("h1").innerHTML="Draw!";
}
