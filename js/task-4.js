"use strict";
const credits = 23580;
const pricePerDroid = 3000;
let message;
let numberDroid = prompt("Введіть кілкість дроїдів для покупки");

if (numberDroid === null) {
  message = "Скасовано користувачем!";
} else if (numberDroid > 0) {
  numberDroid = Number(numberDroid);

  const totalPrice = numberDroid * pricePerDroid;
  const result = credits - totalPrice;
  message =
    credits >= totalPrice
      ? `Ви купили ${numberDroid} дроїдів, на рахунку залишилося ${result} кредитів.`
      : "Недостатньо коштів на рахунку!";
}

console.log(message);
