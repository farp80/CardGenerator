/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let selectedSuit = suit();
  let topLeft = document.querySelector("#topLeft");
  topLeft.innerHTML = selectedSuit;

  let bottomRight = document.querySelector("#bottomRight");
  bottomRight.innerHTML = selectedSuit;

  if (selectedSuit === "&hearts;" || selectedSuit === "&diams;") {
    topLeft.style.color = "red";
    bottomRight.style.color = "red";
  }

  let middle = document.querySelector("#middle");
  middle.innerHTML = card();
};

let card = () => {
  let randomCard = Math.floor(Math.random() * 13);
  let possibleCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

  return possibleCards[randomCard];
};

let suit = () => {
  let randomSuit = Math.floor(Math.random() * 4);
  let possibleSuits = ["&hearts;", "&clubs;", "&diams;", "&spades;"];

  return possibleSuits[randomSuit];
};
