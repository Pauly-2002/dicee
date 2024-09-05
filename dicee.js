// For Player 1

const randomNumber1 = Math.trunc(1 + Math.random() * 6);
if (randomNumber1 === 1) {
  document.querySelector(".img1").src = "./images/dice1.png";
} else if (randomNumber1 === 2) {
  document.querySelector(".img1").src = "./images/dice2.png";
} else if (randomNumber1 === 3) {
  document.querySelector(".img1").src = "./images/dice3.png";
} else if (randomNumber1 === 4) {
  document.querySelector(".img1").src = "./images/dice4.png";
} else if (randomNumber1) {
  document.querySelector(".img1").src = "./images/dice5.png";
} else if (randomNumber1) {
  document.querySelector(".img1").src = "./images/dice6.png";
}

// For Player 2

const randomNumber2 = Math.trunc(1 + Math.random() * 6);
if (randomNumber2 === 1) {
  document.querySelector(".img2").src = "./images/dice1.png";
} else if (randomNumber2 === 2) {
  document.querySelector(".img2").src = "./images/dice2.png";
} else if (randomNumber2 === 3) {
  document.querySelector(".img2").src = "./images/dice3.png";
} else if (randomNumber2 === 4) {
  document.querySelector(".img2").src = "./images/dice4.png";
} else if (randomNumber2) {
  document.querySelector(".img2").src = "./images/dice5.png";
} else if (randomNumber2) {
  document.querySelector(".img2").src = "./images/dice6.png";
}

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
