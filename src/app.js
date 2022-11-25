/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  //llamando html
  let card = document.querySelector(".card");
  let up = document.querySelector(".up-suit");
  let nu = document.querySelector(".number");
  let down = document.querySelector(".down-suit");

  let pintitas = RandomPinta();

  //condicion color

  if (pintitas == "♥" || pintitas == "♦") {
    up.style.color = "red";
  }

  if (pintitas == "♥" || pintitas == "♦") {
    down.style.color = "red";
  }

  //insertar en html

  nu.innerHTML = RandomNumber();
  up.innerHTML = pintitas;
  down.innerHTML = pintitas;

  //document.querySelector(".card").innerHTML();
};

let RandomNumber = function() {
  let Numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let num = Math.floor(Math.random() * Numbers.length);

  return Numbers[num];
};

let RandomPinta = function() {
  let pintacartas = ["♦", "♥", "♠", "♣"];
  let eleccionpintas = Math.floor(Math.random() * pintacartas.length);

  return pintacartas[eleccionpintas];
};
