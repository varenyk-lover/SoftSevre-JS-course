/*1. Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і
висота прямокутника height і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у
 випадку, якщо функції передано не числові параметри.
    Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.*/
/*
function calcRectangleArea(width, height) {
    if(typeof width === 'string' || typeof height === 'string') {
        throw new Error('Parametr is string. Please enter the number.');
    }
    if(isNaN(width) || isNaN(height)) {
        throw new Error('Parametr is not defined. Please enter the number.');
    }
   return width * height;

}

try {
    let result = calcRectangleArea('',4);
    console.log(result);
} catch(exception) {
    console.log(exception.name);
    console.log(exception.message);
    console.log(exception.stack);
}
*/


/*2. Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій вік і генерувати в модальному вікні помилки у
випадку, коли:
- юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your age”),
- нечислове значення
- вік юзера менше 14 років.
    В іншому разі юзер отримує доступ до перегляду фільму.
    В блокові catch передбачити виведення назви і опису помилки.*/

/*function checkAge() {
    let age = prompt('Please enter your age')
    if (age === '') {
        throw new Error('The field is empty! Please enter your age.');
    }
    if (isNaN(age)) {
        throw new Error('Please enter only numbers.');
    }
    if (age < 14) {
        throw new Error('You are too young.');
    }
alert('Confirmed successfully. Enjoy the film!')
}
 try {
    let confirmAge = checkAge();
 } catch (err) {
         alert(err.name + " Invalid data: " + err.message);
 }*/

/*3. Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням
'MonthException'.
    Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. Функція
    повертає назву місяця відповідно до введеного номера місяця. У випадку некоректного вводу кидається ексепшн
    у вигляді об’єкта класу MonthException з повідомленням 'Incorrect month number'.
    Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
    Приклад роботи програми:
    > console.log(showMonthName(5));// May
> console.log(showMonthName(14));// MonthException Incorrect month number*/

/*class MonthException extends Error {
    constructor(message) {
        super(message);
        this.name = 'MonthException';
    }
}

function showMonthName(month) {


    if (month === '') {
        throw new MonthException('The field is empty! Please enter some number.');
    }
    if (isNaN(month)) {
        throw new MonthException('Please enter only numbers.');
    }
    if (month < 1 || month > 13) {
        throw new MonthException('Incorrect month number.');
    }
    const months = [ "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December" ];

    let selectedMonthName = months[month - 1];
    return selectedMonthName;
}

try {
    let monthName = showMonthName("kl");
    console.log(monthName);
} catch (exception) {
    alert(" Invalid data: " + exception.message);
}*/

/*4????????????????????
1)Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення
 переданої id. Також функція викидає помилку у разі якщо введено від’ємне id.
2) Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, перевіряє з використанням
    функції showUser() кожен елемент масиву ids на коректність, в разі виключної ситуації виводить повідомлення про
     помилку. Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.
    Приклад роботи програми:
    showUsers([7, -12, 44, 22]);
Error: ID must not be negative: -12
    [ {id: 7}, {id: 44}, {id: 22} ]*/


//Не розумію, як після помилки продовжити виконання коду та видати лише відсіяні правильні дані.
/*
function showUser(id) {
    if(id < 0) {
        throw new Error(`ID must not be negative: ${id}`);
    }

    let user = new Object();
    user.id = id;

    return user;
}

try {
  showUser();
} catch (exception) {
    console.log(exception.name + exception.message);
}

function showUsers(ids) {

    let result = ids.map(showUser);

    console.log(result);
}


try {
    showUsers([7, -12, 44, 22]);
} catch (exception) {
    console.log(exception.name + ": " + exception.message);
}
*/

