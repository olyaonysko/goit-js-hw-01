"use strict";
let input;
let total = 0;

do {
  input = prompt("Введіть число:");
  if (input !== null) {
    if (Number.isNaN(Number(input))) {
      alert("Було написано не число, спробуйте ще раз");
      continue;
    }
    total += Number(input);
  }
} while (input !== null);
alert(`Загальна сума чисел дорівнює ${total}`);
