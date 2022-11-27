var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomNumber2 = Math.floor(Math.random() * 6)+1;


document.querySelector(".img1").setAttribute("src", "dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "dice" + randomNumber2 + ".png");


function winner()  {
if (randomNumber1 > randomNumber2) {document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";}
else if (randomNumber1 === randomNumber2) {document.querySelector("h1").innerHTML = "🏁 It's a draw! 🏁";}
else {document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";}
}
winner();
 
