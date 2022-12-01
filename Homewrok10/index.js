/*1.Вихідний код:
    Допишіть код використовуючи деструктурування, щоб в консолі браузера з'явилися рядки, які написані в коментарях.*/

/*let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]*/


/*2.Вихідний код:
    Допишіть код використовуючи деструктурування, щоб в консолі браузера з'явилися рядки, які написані в коментарях.*/

/*let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};
let {names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4]} = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26*/


/*3. Напишіть функцію mul(), яка приймає будь-яку кількість параметрів різного типу і повертає добуток параметрів типу Number.
    Якщо параметри типу Number відсутні, повертає число 0.
    Не можна використовувати властивість arguments, але в функцію mul() можна додати один параметр.*/

/*function mul(...args) {

    let result = args.reduce((acc, currentValue) => {
        if ( typeof currentValue === "number" && !isNaN(currentValue) ) {
            return acc * currentValue;
        }
        return acc;
    }, );
    return result ? result : 0;
}*/

// Варіант викладача: !!!перевір
/*function mul(...args) {

    let result = 1;
    let isNumber;
    for (let i of args) {
        if (typeof i == 'number') {
            result *= i;
            isNumber = true;
        }
    }
    return isNumber ? result : 0;
}*/

// console.log(mul(1, "str", 2, 3, true)); // 6
// console.log(mul(10, "str", '10', 10, true)); //100
// console.log(mul(null, "str", false, true)); // 0


/*4.  Вихідний код:
    Змініть код використовуючи стрілкові функції, щоб в коді не використовувалися методи bind().*/
/*let server = {
    data: 0,
    convertToString: function (callback) {
        callback((function () {
            return this.data + "";
        }).bind(this));
    }
};
let client = {
    server: server,
    result: "",
    calc: function (data) {
        this.server.data = data;
        this.server.convertToString(this.notification());
    },
    notification: function () {
        return (function (callback) {
            this.result = callback();
        }).bind(this);
    }
};*/

/*let server = {
    data: 0,
    convertToString: function (callback) {
        callback(() => `${this.data}`)
    }
};

let client = {
    server: server,
    result: "",
    calc: function (data) {
        this.server.data = data;
        this.server.convertToString(this.notification());
    },
    notification: function () {

        return ((callback) => this.result = callback())
    },

};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"*/

/*5.  Напишіть функцію mapBuilder (keysArray, valuesArrays), яка приймає два масиви однакової довжини. Використовуючи ці масиви, функція повинна створювати об'єкт типу Map, ключами якого є значення з першого масиву, а значеннями Map - значення з другого масиву. Після цього функція повертає даний об'єкт Map.
    Приклади використання функції:*/

/*

 mapBuilder = (keysArray, valuesArrays) => {

    if (keysArray.length === valuesArrays.length) {
       let myMap = new Map();
       for (let i = 0; i < keysArray.length; i++) {
           myMap.set(keysArray[i], valuesArrays[i])
       };
       return myMap;
    } else {
        console.log('Values are incorrect');
    }
}


let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
// Тут помилки не буде. Оскільки це і не перезаписування, і нема конфлікту, бо тут інша область видимості. У ф-ї у нас одна змінна, а тут вже інша змінна взагалі. Тож ми навіть можемо їх однаково назвати
let map = mapBuilder(keys, values);
console.log(map);
console.log(map.size); // 4
console.log(map.get(2)); // "span"


let testkeys = [1, 2, 3];
let testvalues = ["div", "span", "b", "i"];
let testmap = mapBuilder(testkeys, testvalues);
console.log(testmap);*/
