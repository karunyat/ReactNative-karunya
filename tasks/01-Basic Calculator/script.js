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

// subtraction
document.querySelector(".minus").addEventListener("click", function () {
  let result =
    Number(document.querySelector(".in0").value) -
    Number(document.querySelector(".in1").value);
  signimg.classList.remove("hidden");
  signimg.src = "minus.jpg";

  document.querySelector(".equal").addEventListener("click", function () {
    document.querySelector(".result").textContent = result;
  });
});

//addition
document.querySelector(".plus").addEventListener("click", function () {
  let result =
    Number(document.querySelector(".in0").value) +
    Number(document.querySelector(".in1").value);
  signimg.classList.remove("hidden");
  signimg.src = "plus.jpg";

  document.querySelector(".equal").addEventListener("click", function () {
    document.querySelector(".result").textContent = result;
  });
});

//multiplication
document.querySelector(".multiply").addEventListener("click", function () {
  let result =
    Number(document.querySelector(".in0").value) *
    Number(document.querySelector(".in1").value);
  signimg.classList.remove("hidden");
  signimg.src = "multiply.jpg";

  document.querySelector(".equal").addEventListener("click", function () {
    document.querySelector(".result").textContent = result;
  });
});

//division
document.querySelector(".divide").addEventListener("click", function () {
  let result =
    Number(document.querySelector(".in0").value) /
    Number(document.querySelector(".in1").value);
  signimg.classList.remove("hidden");
  signimg.src = "divide.jpg";

  document.querySelector(".equal").addEventListener("click", function () {
    document.querySelector(".result").textContent = result;
  });
});

//calling the initial conditions
init();
//clear
document.querySelector(".clear").addEventListener("click", init);
