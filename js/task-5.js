"use strict";
let userCountry = prompt("Введіть назву країни:");
let message;
let price;

if (userCountry === null) {
  console.log("Скасовано користувачем.");
} else {
  userCountry =
    userCountry[0].toUpperCase() + userCountry.substring(1).toLowerCase();
  const china = "Китай";
  const chile = "Чилі";
  const australia = "Австралія";
  const india = "Індія";
  const jamaica = "Ямайка";

  switch (userCountry) {
    case china:
      price = 100;
      message = `Доставка в ${userCountry} буде коштувати ${price} кредитів.`;
      console.log(message);
      break;
    case chile:
      price = 250;
      message = `Доставка в ${userCountry} буде коштувати ${price} кредитів.`;
      console.log(message);
      break;
    case australia:
      price = 170;
      message = `Доставка в ${userCountry} буде коштувати ${price} кредитів.`;
      console.log(message);
      break;
    case india:
      price = 80;
      message = `Доставка в ${userCountry} буде коштувати ${price} кредитів.`;
      console.log(message);
      break;
    case jamaica:
      price = 120;
      message = `Доставка в ${userCountry} буде коштувати ${price} кредитів.`;
      console.log(message);
      break;
    default:
      alert("У вашій країні доставка недоступна");
  }
}
