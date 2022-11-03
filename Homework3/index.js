/*1. Заданий масив з елементами [2, 3, 4, 5]. За допомогою циклу for знайдіть добуток елементів цього масиву.*/

/*
let arr = [2, 3, 4, 5];
let result = 1;
for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
}
console.log(result); //120*/

//Також реалізуйте завдання через while .
/*
let arr = [2, 3, 4, 5];
let i = 0;
let result = 1;
while (i < arr.length) {
    result *= arr[i];
    i++;
}
console.log(result);*/

/*2. Напишіть JavaScript for цикл, який буде ітеруватися від 0 до 15. Для кожної ітерації він перевірятиме, чи є
поточне число парним чи непарним, і відображатиме повідомлення на екрані.
    Sample Output:
    "0 is even"
"1 is odd непарне"
"2 is even парне"*/
/*
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
//or
//         result = (i % 2 === 0) ? `${i} is even` : `${i} is odd`;
    }
*/


/*3. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються
із діапазону 1-500.
Sample Output:
    randArray(5);  // [399,310,232,379,40]*/

/*function randArray(k) {
    let arr = [];

    for (i = 0; i < k; i++) {
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min; //Макс й мін включаються
        }

        let randomNum = getRandomIntInclusive(1, 500);
        arr.push(randomNum);
    }
    return arr;
}

console.log(randArray(5));*/


/*4. Напишіть функцію raiseToDegree(a,b), яка повертає результат піднесення числа a до степеня b. Функція працює тільки
 з цілими числами. Реалізувати інтерфейс введення чисел a, b з клавіатури.

    Sample Output:
    raiseToDegree(3, 4);  // 81*/

/*
function raiseToDegree(a, b) {
    if (a && b) {
        a = Math.round(a);
        b = Math.round(b);
        result1 = Math.pow(a, b);
        console.log(result1);
    } else {
        let x = +prompt('Введіть перше число');
        let n = +prompt('Введіть друге число');
        result2 = Math.pow(Math.round(x), Math.round(n));
        console.log(result2);
    }

}


// raiseToDegree(3,4);
raiseToDegree();*/


/*5. Реалізуйте функцію – findMin(), яка повинна приймати довільну кількість числових аргументів і повертати той,
 який має найменше значення. Порада: для розв’язку можете скористатися спеціальним масивом arguments.
    Sample Output:
    findMin(12, 14, 4, -4, 0.2); // => -4*/

/*
let findMin = function() {
 //   варіант 1
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }
let result = Math.min(...arr);
    return result;

    //варіант 2. який краще?
/!*    for (let i = 0; i < arguments.length; i++) {
        arguments;
        console.log(arguments);
    }

    let result = Math.min(...arguments);
    return result;*!/
}

console.log(findMin(12, 14, 4, -4, 0.2)); // => -4*/


/* 6. Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі
 елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
    Sample Output:
    findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true*/

/*function findUnique(arr) {
     new Set(arr).size === arr.length ? console.log(true) : console.log(false);
}

findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true*/


/*7.
 Напишіть функцію, яка повертає останній елемент масиву. Функція може приймати 2 параметра: 1-ий масив, 2-ий
числовий параметр, що відповідає кількості 'х' останніх елементів масиву, які треба вивести.
    Sample Output:
    console.log(lastElem([3, 4, 10, -5]));      // -5
console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]*/
/*
function lastElem(arr, x) {
    if (Array.isArray(arr) && !isNaN(x)) {
        let result2 = arr.slice(-x);
        console.log(result2);
    } else if (Array.isArray(arr) && x === undefined) {
        let result1 = arr.pop();
        console.log(result1);
    } else if (arr === null || arr === undefined) {
        console.log('No array');
    } else {
        console.log('Data is not correct');
    }
}

lastElem([3, 4, 10, -5], 2);
lastElem([3, 4, 10, -5]);
lastElem([3, 4, 10, -5],8)
lastElem();
lastElem(7);
lastElem('', 9);
lastElem([3, 4, 10, -5], 'i');*/



/*8. Напишіть функцію, яка приймає рядок як параметр і перетворює першу букву кожного слова рядка в верхній регістр.
    Input string: 'i love java script'
Output string: 'I Love Java Script'*/

/*
function upperCase(str) {
    if (str && isNaN(str)) {
        let result = str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
        console.log(result);
    } else {
        console.log(`It's not a string`);
    }

}

upperCase('i love java script');
upperCase(null);
upperCase(7);
upperCase(undefined);
upperCase('');
*/
