"use strict";
const credits = 23580;
const pricePerDroid = 3000;
const numberDroid = prompt("Введіть кілкість дроїдів для покупки");

if (numberDroid === null) {
  console.log("Скасовано користувачем!");
} else {
  const totalPrice = numberDroid * pricePerDroid;
  if (totalPrice <= credits) {
    console.log(
      `Ви купили ${numberDroid} дроїдів, на рахунку залишилося ${
        credits - totalPrice
      } кредитів.`
    );
  } else {
    console.log("Недостатньо коштів на рахунку!");
  }
}
