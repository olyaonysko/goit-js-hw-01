"use strict";
let input;
let total = 0;

do {
  input = prompt("Введіть число:");
  Number.isNaN(Number(input))
    ? alert("Було написано не число, спробуйте ще раз")
    : (total += Number(input));
} while (input !== null);

alert(`Загальна сума чисел дорівнює ${total}`);
