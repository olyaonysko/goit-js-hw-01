"use strict";
const total = 100;
const ordered = prompt("Скільки товару вам потрібно?");

console.log(
  total >= ordered
    ? "Замовлення оформлено, з вами зв'яжеться менеджер"
    : "На складі недостатньо товарів!"
);
