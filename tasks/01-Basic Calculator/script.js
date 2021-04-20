"use strict";

//hiding the operation image
const signimg = document.querySelector(".signimg");
signimg.classList.add("hidden");

//initial conditions
const init = function () {
  document.querySelector(".result").textContent = 0;
  document.querySelector(".in0").value = 0;
  document.querySelector(".in1").value = 0;
};
init();

//equals button action funtion
const acteq = function () {
  document.querySelector(".equal").addEventListener("click", function () {
    document.querySelector(".result").textContent = result;
  });
};

// subtraction
document.querySelector(".minus").addEventListener("click", function () {
  let result =
    Number(document.querySelector(".in0").value) -
    Number(document.querySelector(".in1").value);
  signimg.classList.remove("hidden");
  signimg.src = "minus.jpg";
  acteq();
});

//addition
document.querySelector(".plus").addEventListener("click", function () {
  let result =
    Number(document.querySelector(".in0").value) +
    Number(document.querySelector(".in1").value);
  signimg.classList.remove("hidden");
  signimg.src = "plus.jpg";
  acteq();
});

//multiplication
document.querySelector(".multiply").addEventListener("click", function () {
  let result =
    Number(document.querySelector(".in0").value) *
    Number(document.querySelector(".in1").value);
  signimg.classList.remove("hidden");
  signimg.src = "multiply.jpg";
  acteq();
});

//division
document.querySelector(".divide").addEventListener("click", function () {
  let result =
    Number(document.querySelector(".in0").value) /
    Number(document.querySelector(".in1").value);
  signimg.classList.remove("hidden");
  signimg.src = "divide.jpg";
  acteq();
});

//calling the initial conditions
init();
//clear
document.querySelector(".clear").addEventListener("click", init);
