/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let suit = suits()[selectSuit()];
  let card = cardsNumbers()[selectCard()];

  let center = document.querySelector("#center");
  center.innerHTML = card;
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
