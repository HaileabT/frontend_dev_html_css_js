"use strict";

var ball = document.getElementById("ball");
var randomStyles = ["ease-in", "ease-out", "ease-in-out", "linear", "cubic-bezier(0.87, 0.06, 0.12, 0.99)"];

var randomColors = function randomColors() {
  var randX = Math.floor(Math.random() * 255) + 1;
  var randX1 = Math.floor(Math.random() * 255) + 1;
  var randX2 = Math.floor(Math.random() * 255) + 1;
  var randY = Math.floor(Math.random() * 255) + 1;
  var randY1 = Math.floor(Math.random() * 255) + 1;
  var randY2 = Math.floor(Math.random() * 255) + 1;
  ball.style.background = "linear-gradient(to right, rgb(".concat(randX, ", ").concat(randX1, ", ").concat(randX2, "), rgb(").concat(randY, ", ").concat(randY1, ", ").concat(randY2, "))");
};

var randomPlaces = function randomPlaces() {
  var randX = 1;
  var randY = 2;
  randX = Math.floor(Math.random() * 100) + 1;
  randY = Math.floor(Math.random() * 100) + 1;
  var scale = Math.floor(Math.random() * 100) + 50;
  var randS = Math.floor(Math.random() * 4);
  ball.style.top = "".concat(randX, "%");
  ball.style.left = "".concat(randY, "%");
  ball.style.width = "".concat(scale, "px");
  ball.style.height = "".concat(scale, "px");
  ball.style.filter = "blur(".concat(20 - scale / 10, "px)");
  ball.style.transition = "1s ".concat(randomStyles[randS]);
};

setInterval(randomColors, 1000);
setInterval(randomPlaces, 1000);