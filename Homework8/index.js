/*1.  Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні.
    Приклад роботи:
    upperCase('regexp'); //    String's not starts with uppercase character
upperCase('RegExp'); // String's starts with uppercase character*/
/*
function upperCase(string) {
     regexp = /^[A-Z]/;
    if (regexp.test(string)) {
        console.log(`String's starts with uppercase character`);
    } else {
    console.log(`String's NOT starts with uppercase character`);
    }
}
upperCase('regexp');
upperCase('RegExp');*/

/*2.  Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. Валідними вважаються всі символи на різних позиціях.
    Приклад роботи:
    checkEmail("Qmail2@gmail.com");
true*/
/*function checkEmail(string) {
     regexp = /^\S+@\w+\.[a-z]{2,3}$/;
    if (regexp.test(string)) {
        console.log(`Successful email validation `);
    } else {
        console.log(`Try another characters for email`);
    }
}
checkEmail("Qmail2@gmail.com");
checkEmail("Qmail2@gmailcom");
checkEmail("Qmail2gmail.klcom");
checkEmail("Qmail2@gmail.k");*/

/* 3. Напишіть регулярний вираз, який знаходитиме в тексті одну літеру d, за якою йде одна чи більше b, за якими одна d. Запам’ятати знайдені b і наступну за ними d.  Враховувати верхній і нижній регістр.
    Приклад роботи:
    Для стрінги "cdbBdbsbz" результат ["dbBd", "bB", "d"]*/

/*regexp = /d(b+)(d)/i;
let str = "cdbBdbsbz";
let checkResult = regexp.exec(str);
console.log(checkResult);*/

/*4.  Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
    Приклад роботи:
    Вхідний рядок    "Java Script"
Вихід    “Script, Java”*/

/*regexp = /(\w+)\s(\w+)/;
let str = "Java Script";
let newStr = str.replace(regexp, '$2, $1');
console.log(newStr);*/

/*5.  Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).*/

/*function checkNumber(str) {
    const regExp = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    const result = regExp.test(str);

    if (result === true) {
        console.log('Validation successful');
    } else {
        console.log('Incorrect. Please, try again');
    }
}

checkNumber('4783-0974-9804-0284');
checkNumber('2345-2345-2345-');*/

/*6. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
    Вимоги:
  Цифри (0-9).
  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
   Символ “-” не може повторюватися.
/*
checkEmail('my_mail@gmail.com');
Email is correct!
    checkEmail('#my_mail@gmail.com');
Email is not correct!
    checkEmail('my_ma--il@gmail.com');
Email is not correct!*/

/*function checkEmail(string) {
    regexp = /^\w+([-]?[_]*\w+)*@\w+([-]?[_]*\w+)\.[a-z]{2,3}$/;
    if (regexp.test(string)) {
        console.log(`Email is correct!`);
    } else {
        console.log(`Email is NOT correct!`);
    }
}

checkEmail('my_mail@gmail.com');
checkEmail('my__mail@gmail.com');
//У тебе в прикладі такого нема, але в умові написано, що заборона на повтор є лише в дефісу. Тож 2 нижні підкреслення - то ок.
checkEmail('my-mail@gmail.com');
checkEmail('my-mail_k@gmail.com');
checkEmail('#my_mail@gmail.com');
checkEmail('my_ma--il@gmail.com');*/

/*    7.????????????? Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів, що містить лише букви та числа, номер не може бути першим. Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою комою (наприклад, 3.4).
    Приклад роботи:
    checkLogin('ee1.1ret3');
true
1.1, 3
checkLogin('ee1*1ret3');
false
1, 1, 3*/

/* function checkLogin(str) {
     let regexp = /^[a-zA-Z]{1}[a-zA-Z0-9\.]{1,9}$/;
     let checkLogin = regexp.test(str);
//     Мій варіант
let reNum = /(\d)+(\.(\d)+)?/g;
     //Варіант викладача нижче - тут з твоїм не згодна, бо він знайде не лише дробові числа, а й число+кома+літера. Тож отут 'sse1.r' воно видасть число 1. , а такого числа не існує.
     // let reNum = /[0-9\.]+/g;
     let findNum = str.match(reNum);
     console.log( checkLogin + " " + findNum);
 }

checkLogin('ee1.1ret3');
checkLogin('e1.88ret3');
checkLogin('ee1*1ret3');
checkLogin('sse1r55555et3');
checkLogin('sse1.r');*/
