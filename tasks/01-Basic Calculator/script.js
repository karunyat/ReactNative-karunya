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

//calculating the result and displaying it
const calculate = function (oprationsign) {
  let result;
  signimg.classList.remove("hidden");
  signimg.src = `${oprationsign}.jpg`;

  //equals action
  document.querySelector(".equal").addEventListener("click", function () {
    let input0 = Number(document.querySelector(".in0").value);
    let input1 = Number(document.querySelector(".in1").value);
    if (oprationsign === "minus") {
      result = input0 - input1;
    }
    if (oprationsign === "plus") {
      result = input0 + input1;
    }
    if (oprationsign === "divide") {
      result = input0 / input1;
    }
    if (oprationsign === "multiply") {
      result = input0 * input1;
    }
    //displaying result
    document.querySelector(".result").textContent = result;
  });
};

//operation performing events
document.querySelector(".plus").addEventListener("click", function () {
  calculate("plus");
});
document.querySelector(".minus").addEventListener("click", function () {
  calculate("minus");
});
document.querySelector(".multiply").addEventListener("click", function () {
  calculate("multiply");
});
document.querySelector(".divide").addEventListener("click", function () {
  calculate("divide");
});

//calling the initial conditions
init();

//clear
document.querySelector(".clear").addEventListener("click", init);
