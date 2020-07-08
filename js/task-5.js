"use strict";
const userCountry = prompt("Введіть назву країни:");
const china = "китай";
const chile = "чилі";
const australia = "австралія";
const india = "індія";
const jamaica = "ямайка";

const priceChina = 100;
const priceChile = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;

if (userCountry === null) {
  console.log("Скасовано користувачем!");
} else {
  switch (userCountry.toLowerCase()) {
    case china:
      console.log(
        `Доставка в ${userCountry} буде коштувати ${priceChina} кредитів.`
      );
      break;
    case chile:
      console.log(
        `Доставка в ${userCountry} буде коштувати ${priceChile} кредитів.`
      );
      break;
    case australia:
      console.log(
        `Доставка в ${userCountry} буде коштувати ${priceAustralia} кредитів.`
      );
      break;
    case india:
      console.log(
        `Доставка в ${userCountry} буде коштувати ${priceIndia} кредитів.`
      );
      break;
    case jamaica:
      console.log(
        `Доставка в ${userCountry} буде коштувати ${priceJamaica} кредитів.`
      );
      break;
    default:
      alert("У вашій країні доставка недоступна");
  }
}
