/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let suitIdx = selectSuit();
  let selectedSuit = suits();
  let suit = selectedSuit[suitIdx];
  let topLeft = document.querySelector("#topLeft");
  topLeft.innerHTML = suit;

  let bottomRight = document.querySelector("#bottomRight");
  bottomRight.innerHTML = suit;

  if (suit === "&hearts;" || suit === "&diams;") {
    topLeft.style.color = "red";
    bottomRight.style.color = "red";
  }

  let card = cardsNumbers()[selectCard()];
  let middle = document.querySelector("#middle");
  middle.innerHTML = card;
};

let selectSuit = () => {
  return Math.floor(Math.random() * 4);
};

let selectCard = () => {
  return Math.floor(Math.random() * 13);
};

let suits = () => {
  return ["&hearts;", "&clubs;", "&diams;", "&spades;"];
};

let cardsNumbers = () => {
  return [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
};
