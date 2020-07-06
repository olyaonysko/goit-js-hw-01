"use strict";
const total = 100;
const ordered = prompt("Скільки товару вам потрібно?");

if (total >= ordered) {
  console.log("Замовлення оформлено, з вами зв'яжеться менеджер");
} else {
  console.log("На складі недостатньо товарів!");
}
