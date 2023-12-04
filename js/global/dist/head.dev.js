"use strict";

var whole = document.body;
var accountNav = document.getElementById("account-nav");
var accountDetails = document.getElementById("acc-details-h");
var headInner = document.getElementById("head-i-c");

accountNav.onclick = function () {
  accountDetails.classList.toggle("visible");
};

accountNav.onmouseenter = function () {
  accountNav.classList.add("visi");
};

accountNav.onmouseleave = function () {
  accountNav.classList.remove("visi");
};