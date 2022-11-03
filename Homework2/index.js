// 1. Є такий код:
/*Допишіть код, щоб в консолі браузера з'явилися рядки, які написані в коментарях, оперуючи при цьому змінними х і у.*/
/*let x = 1;
let y = 2;*/


/*T1
let res1 =  x.toString() + y;
//or
//let res1 = "" + x + y;
console.log(res1); // "12"
console.log(typeof res1); // "string"*/


/*T2
let bln = !!x;
let res2 = bln.toString() + y;
    //or
    // let res2 = Boolean(x) + "" + y;
    //or
    // let res2 = String(Boolean(x)) + y;
    console.log(res2); // "true2"
console.log(typeof res2); // "string"*/


/*T3
let res3 = !!x && !!y;
    //or Використовуємо лише 1 змінну, а другу не беремо. Виявилось, не обов'язково юзати 2 змінні водночас
    //let res3 = Boolean(x);
    console.log(res3); // true
console.log(typeof res3); // "boolean"*/


/*T4
let newValue = !!x + y.toString();
let res4 =  parseFloat(newValue);
    //or
    let res3 = parseFloat(Boolean(x));
    console.log(res4); // NaN
console.log(typeof res4); // "number"*/



/*2. Користувач вводить число (використовуйте prompt ()). Необхідно перевірити чи є введене число
a) парним додатним;
b) кратним числу 7.
Результат перевірки вивести в консоль.*/
/*let num = prompt('Ведіть число');
if (num > 0 && num % 2 === 0 && num % 7 === 0) {
    console.log('Число ' + num + ' є парним додатним і кратним числу 7.');
}  else {
    console.log('Число ' + num + ' поза умовою.');
}*/


/* 3. Створіть порожній масив;
1) У перший елемент масиву запишіть будь-яке число;
2) У другий елемент масиву запишіть будь-який рядок;
3) У третій елемент масиву запишіть будь-яке логічне значення;
4) У четвертий елемент масиву запишіть значення null;
5) Виведіть на екран число елементів, яке зберігається в масиві;
6) Запитайте у користувача ввести будь-яке значення і запишіть це значення в п'ятий елемент масиву;
7) Виведіть на екран п'ятий елемент масиву.
8) Видаліть 1-ий елемент масиву і виведіть масив на екран.*/

/*let arr = [1, 'text', false, null];
console.log(arr);
console.log(arr.length);
let value = prompt('Напишіть щось');
arr[4] = value;
console.log(arr[4]);
console.log(arr);
let removed = arr.splice(0,1);
console.log(arr);*/
// or
// let shifted = arr.shift();
// console.log(arr);

/*4. Напишіть програму, яка об’єднує всі наявні елементи масиву в стрічку і розділяє їх символом “*”.
Початковий масив:
    let cities = ["Rome", "Lviv", "Warsaw"];
Результат:
    "Rome*Lviv*Warsaw"*/
/*let cities = ["Rome", "Lviv", "Warsaw"];
let newString = cities.join('*');
console.log(newString);
//or
let result = cities.reduce(function (sum,i) {
 return [sum + "*" + i];
    })
console.log(result);*/

/*5. Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку. Результат
запишіть в змінну isAdult. В залежності від отриманого значення виведіть відповідне повідомлення про статус особи.
Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”. Якщо вік менше 18 років вивести
“Ви ще надто молоді”,*/
/*let isAdult = +prompt('Скільки вам років?');
if (isAdult > 18) {
    alert('Ви досягли повнолітнього віку');
} else if (isAdult > 1 && isAdult < 18) {
    alert('Ви ще надто молоді')
} else {
    alert('Який дивний вік))')
}*/


/*6.Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони). */
//a) визначити і вивести в консоль площу трикутника
/*b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
    Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести 'Incorrect data‘.
Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми
(наприклад:  8.42355465 =>  8.424).*/
//Спробуй числа 15 і 9 і 12 для перевірки на прямокутність
/*let a = +prompt('Введіть одну довжину трикутника');
if (a <= 0 || isNaN(a)) {
    alert('Неправильні дані');
}

let b = +prompt('Введіть другу довжину трикутника');
if (b <= 0 || isNaN(b)) {
    alert('Неправильні дані');
}

let c = +prompt('Введіть третю довжину трикутника');
if (c <= 0 || isNaN(c)) {
    alert('Неправильні дані');
}

let p = (a + b + c) / 2;
let square = Math.sqrt((p * (p - a) * (p - b) * (p - c)));
square === 0 || isNaN(square)
    ? console.log('Площу неможливо порахувати. Дані некоректні.')
    : console.log(`Площа трикутника складає ${square.toFixed(3)} умовних одиниць.`);


let arrayOfNumbers = [a, b, c];
let sortedArray = arrayOfNumbers.sort(function (x, y) {
    return y - x;
});


let squareOfHypotenuse = Math.pow((sortedArray[0]), 2);
let squareOfCathetus1 = Math.pow((sortedArray[1]), 2);
let squareOfCathetus2 = Math.pow((sortedArray[2]), 2);

if (squareOfHypotenuse === 0 || isNaN(squareOfHypotenuse)) {
    console.log('Перевірка неможлива. Дані некоректні.')
} else if (squareOfCathetus1 === 0 || isNaN(squareOfCathetus1)) {
    console.log('Перевірка неможлива. Дані некоректні.')
} else if (squareOfCathetus2 === 0 || isNaN(squareOfCathetus2)) {
    console.log('Перевірка неможлива. Дані некоректні.');
} else if (squareOfHypotenuse === squareOfCathetus1 + squareOfCathetus2) {
    // Перевірка на прямокутність: квадрат гіпотенузи рівен сумі квадратів катетів.
    console.log('Трикутник є прямокутним.');
} else {
    console.log('Трикутник не є прямокутним.');
}*/


/*7.  Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. Потрібно отримати
реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.
    В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.*/

/*let currentDate = new Date();
console.log(currentDate);
let currentTime = currentDate.getHours();
console.log(currentTime);*/

//1 vesrion
/*if (currentTime >= 23 && currentTime < 5) {
    console.log('Доброї ночі');
} else if (currentTime >= 5 && currentTime < 11) {
    console.log('Доброго ранку');
} else if (currentTime >= 11 && currentTime < 17) {
    console.log('Доброго дня');
} else if (currentTime >= 17 && currentTime < 23) {
    console.log('Доброго вечора');
} else {
    console.log('Дані відсутні')
}*/

//2 vesrion
/*switch (true) {
    case (currentTime >= 23 && currentTime < 5):
            console.log('Доброї ночі');
          break;
    case (currentTime >= 5 && currentTime < 11):
        console.log('Доброго ранку');
        break;
    case (currentTime >= 11 && currentTime < 17):
        console.log('Доброго дня');
        break;
    case (currentTime >= 17 && currentTime < 23):
        console.log('Доброго вечора');
        break;
}*/
