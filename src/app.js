/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  generateCard();
  document.querySelector("#card-button").addEventListener("click", () => {
    generateCard();
  });
};

function generateCard() {
  let cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J"];
  let cardSymbol = ["♦", "♥", "♠", "♣"];

  document.querySelector(".cardnumber").innerHTML =
    cardValue[Math.floor(Math.random() * cardValue.length)];

  let symbolRandom = Math.floor(Math.random() * cardSymbol.length);
  let topSuit = document.querySelector(".top-suit");
  let bottomSuit = document.querySelector(".bottom-suit");

  topSuit.innerHTML = cardSymbol[symbolRandom];
  bottomSuit.innerHTML = cardSymbol[symbolRandom];

  if (symbolRandom == 0 || symbolRandom == 1) {
    console.log(symbolRandom);
    topSuit.classList.add("red");
    bottomSuit.classList.add("red");
  } else {
    console.log(symbolRandom);
    topSuit.classList.remove("red");
    bottomSuit.classList.remove("red");
  }
}

// document.querySelector(".top-suit, .bottom-suit").innerHTML =
//   cardsymbol[Math.floor(Math.random() * cardsymbol.length)];

// document.querySelector(".top-suit").innerHTML = cardsymbol[symbolRandom];
// document.querySelector(".bottom-suit").innerHTML = cardsymbol[symbolRandom];
