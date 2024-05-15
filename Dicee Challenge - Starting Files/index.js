// alert("Working");
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6 + 1;
randomNumber1 = Math.floor(randomNumber1);
var randomDiceImage1 = "./images/dice" + randomNumber1 + ".png";
//./images/dice6.png
var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6 + 1;
randomNumber2 = Math.floor(randomNumber2);
var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h5").innerHTML = "The winner is Player1.";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h5").innerHTML = "Draw, no one wins!";
} else {
  document.querySelector("h5").innerHTML = "The winner is Player2";
}
