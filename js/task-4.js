"use strict";
const credits = 23580;
const pricePerDroid = 3000;
const numberDroid = prompt("Введіть кілкість дроїдів для покупки");
const totalPrice = numberDroid * pricePerDroid;

if (numberDroid === null) {
  console.log("Скасовано користувачем!");
} else if (totalPrice > credits) {
  console.log("Недостатньо коштів на рахунку!");
} else if (totalPrice <= credits) {
  console.log(
    `Ви купили ${numberDroid} дроїдів, на рахунку залишилося ${
      credits - totalPrice
    } кредитів.`
  );
} else if (Number.isNaN(+numberDroid)) {
  console.log("Введіть число, а не букви!");
}
