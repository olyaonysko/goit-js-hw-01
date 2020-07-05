"use strict";
let message;
const adminPassword = "jqueryismyjam";
const userPassword = prompt("Будь ласка, введіть пароль:");

if (userPassword === adminPassword) {
  message = "Ласкаво просимо!";
} else if (userPassword === null) {
  message = "Скасовано користувачем!";
} else {
  message = "Доступ заборонений, невірний пароль!";
}

alert(message);
