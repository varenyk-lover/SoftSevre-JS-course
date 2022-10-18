// 1.   Напишіть скріпт всередині HTML-документу, який виводить на екран ваше імя за допомогою функції alert().

/*2.  Напишіть скріпт в зовнішньому файлі, який виводить в консоль ваше прізвище.
    Підключіть створений файл до HTML-документу.*/
/*let lastName = prompt('Яке ваше прізвище?');
console.log('Привіт, ' + lastName)*/
// or
/*let lastName = 'Горбова';
console.log('Привіт, ' + lastName);*/

/*3. a) оголосіть дві змінні;
b) запишіть у змінні будь-які значення;
c) виведіть на екран значення змінних;
d) скопіюйте значення однієї змінної в іншу;
e) виведіть на екран значення змінних.*/
/*let a = 1;
let b = 2;
console.log(a, b);
a = b;
console.log(a, b);*/

/*4. Створіть об’єкт з 5-ма наступними властивостями: “String”, “Number”, “Boolean”, “Undefined”, “Null”. Значення кожної властивості повинно відповідати відповідному примітивному типу даних.*/
/*let driver = {
    name: "Olena",
    age: 36,
    privateCar: true,
    class: undefined,
    id: null,
};*/

/*5. Використовуючи функцію confirm() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult і виведіть в консоль.
*/
/*let isAdult = confirm('Ви повнолітні?');
alert(isAdult);*/

/*6. В зовнішньому файлі напишіть скріпт, в якому оголосіть змінні, для збереження таких даних:
    - ваше ім’я
- ваше прізвище
- навчальна група
- ваш рік народження.
    Присвойте змінним відповідні значення.
    Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану.
    Визначте тип кожної змінної.
    Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
    Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль.*/
/*let lastName;
let studyGroup;
let birthdayYear;
lastName = 'Velychko';
studyGroup = 1;
birthdayYear = 2000;
let married = true;
console.log(studyGroup, birthdayYear, married, lastName);
let kids = null;
let driverLicense = undefined;
console.log(typeof kids, typeof driverLicense);*/

/*7. За допомогою функції prompt() напишіть скріпт, який послідовно запитує в користувача логін, емейл та пароль, і виводить на екран повідомлення із введеними даними. Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.*/
/*let login = prompt('Enter your login', 'User');
let email = prompt('Enter your email','usermale@gmail.com');
let password = prompt('Enter your password','qwerty');
alert(`Dear ${login}, your email is ${email}, your password is ${password}`);*/

/*8. Напишіть скріпт, який вираховує кількість секунд в годині, в добі, в місяці,*/
/*const SEC_IN_MIN = 60;
const MIN_IN_HOUR = 60;
let secInHour = SEC_IN_MIN * MIN_IN_HOUR;
const HOUR_IN_DAY = 24;
let secInDay = secInHour * HOUR_IN_DAY;
//Уявімо, що місяць однаковий
const DAYS_IN_MONTH = 30;
let secInMonth = DAYS_IN_MONTH * secInDay;
console.log(`Кількість секунд в годині складає ${secInHour}, в добі ${secInDay}, а в місяці ${secInMonth}.`);*/


