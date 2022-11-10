/*1. Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
    Наприклад для об’єкта*/
/*
let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};
*/


/*function propsCount(currentObject) {
    let arr = Object.keys(currentObject);
    let result = arr.length;
    console.log(result);

}
propsCount(mentor);*/


//or
/*
function propsCount(currentObject) {
    let osize = 0, key;
    for (key in currentObject) {
        osize++;
    }
    return osize;
};

console.log("Count of properties " + propsCount(mentor));
*/

/*2. Створіть довільний об’єкт, який має 5 полів. Необхідно написати функцію showProps(obj), яка приймає даний об’єкт
і виводить список його властивостей записаних в масив. Виведіть також масив значень властивостей об’єкта.*/

/*
let shop = new Object();
shop.apples = null;
shop.avocado = 40;
shop.milk = 3;
shop.cheese = 6;
shop.vine = 10;

function showProps(obj) {
    let showProperties = Object.keys(obj);
    console.log(showProperties);

    let showValues = Object.values(obj);
    console.log(showValues);
}

showProps(shop);
*/


/*3. Створіть клас Person, в якого конструктор приймає параметри name і surname, а також міститься метод showFullName(),
 який виводить ім’я і прізвище особи.
    Від класу Person наслідується клас Student, конструктор якого крім name і surname, приймає параметр year
   (рік вступу до університету).
В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише ім’я, прізвище, але
 і по-батькові (midleName) студента.
    Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента (від 1 до 6).
     Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВУЗу year.
    Приклад результату:
    const stud1 = new Student("Petro","Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course:"+stud1.showCourse()); //Current course: 6
*/

/*
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    showFullName() {
        alert(this.firstName + ' ' + this.lastName);
    }
}

class Student extends Person {
    constructor(firstName, lastName, year) {
        super(firstName, lastName);
        this.year = year;
    }

    showFullName(midleName) {
        this.midleName = midleName;
        return (this.firstName + ' ' + this.lastName + ' ' + this.midleName);
    }

    showCourse() {
        let currentYear = 2022;
        let course = currentYear - this.year;

        if (course > 0 && course < 7) {
            return course;
        } else if (course > 6) {
            return ("The person has already graduated.");
        } else {
            throw new Error("Year is not correct");
        }
    }
}

const stud1 = new Student("Petro", "Petrenko", 2017);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: *!/*/


/*4. Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName (ім’я і прізвище),
dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів).
1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. Зарплата - це добуток ставки dayRate
на кількість відпрацьованих днів workingDays.
2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник при
 визначенні зарплати – створити метод showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.
3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
4) Вивести значення зарплати з новим experience.
5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче. Посортувати
зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі:   worker_fullName: salary_value
6) Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу Worker.*/


/*class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;

    }

    showSalary() {
        console.log(this.fullName + " Salary: " + (this.dayRate * this.workingDays));
    }

    #experience = 1.2;

    showSalaryWithExperience() {
        let result = this.dayRate * this.workingDays * this.#experience;
        console.log(this.fullName + " Salary with experience: " + result);
    }

    showSalaryWorker() {
        return (this.dayRate * this.workingDays * this.#experience);
    }

    get showExp() {
        return this.#experience;
    }

    set setExp(experience) {
        this.#experience = experience;
    }


}

// Example usage:
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
console.log('________________');

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
console.log('________________');

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
console.log('________________');

let worker4 = new Worker("Hally Hansen", 45
    , 50);
console.log(worker4.fullName);
worker4.showSalary();
console.log("New experience: " + worker4.showExp);
worker4.showSalaryWithExperience();
worker4.setExp = 1.5;
console.log("New experience: " + worker4.showExp);
worker4.showSalaryWithExperience();
console.log('________________');


let workersArr = [worker1, worker2, worker3, worker4];

function sortWorkersBySalary(arr){
    let sortedBySalary = arr.sort(function (a,b) {
    return a.showSalaryWorker() - b.showSalaryWorker();
})

    for (let i = 0; i < sortedBySalary.length; i++){
        console.log(sortedBySalary[i].fullName + ": " + sortedBySalary[i].showSalaryWorker());
    }
}
sortWorkersBySalary(workersArr);*/


/*Output example:
    John Johnson
John Johnson salary: 460
New experience: 1.2
John Johnson salary: 552
New experience: 1.5
John Johnson salary: 690

Tom Tomson
Tom Tomson salary: 1056
    . . . . . .
    New experience: 1.5
Tom Tomson  salary: 1584

Andy Ander
Andy Ander salary: 667
    . . . . . .
    New experience: 1.5
Andy Ander  salary: 1000.5

Sorted salary:
    John Johnson: 690
Andy Ander: 1000.5
Tom Tomson: 1584
*!/
*/


/*5. 1)Створіть батьківський клас GeometricFigure, який має порожній метод для визначення площі getArea() та метод
 toString() для виведення назви класу.
   2) Створіть 3 класи нащадки Triangle, Square і Circle, які наслідуються від класу GeometricFigure.
   3)Кожен з дочірніх класів має свою реалізацію методу getArea(), для визначення площі фігури.
   4)В конструкторах дочірніх класів передбачити властивості необхідні для визначення площі фігури,
   наприклад для кола - радіус r.
    5)Створіть зовнішню функцію handleFigures(figures), яка прийматиме масив об’єктів дочірніх класів figures,
     перевірятиме чи об’єкт належить батьківському класу з урахуванням наслідування, виводитиме назву створеного
      об’єкту відповідної фігури, розраховану площу фігури та сумарну площу всіх фігур. Для реалізації функції
       можете використати метод reduce().
    class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}
Your code . . .*/

/*class GeometricFigure {
    getArea() {
        return 0;
    }

    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(b, h) {
        super();
        this.base = b;
        this.height = h;
    }

    getArea() {
        const triangleArea = (this.base * this.height) / 2;
        return triangleArea;
    }
}

class Square extends GeometricFigure {
    constructor(a) {
        super();
        this.side = a;
    }

    getArea() {
        const squareArea = Math.pow(this.side, 2);
        return squareArea;
    }
}

class Circle extends GeometricFigure {
    constructor(r) {
        super();
        this.radius = r;
    }

    getArea() {
        const circleArea = Math.PI * Math.pow(this.radius, 2);
        return circleArea;
    }
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];

function handleFigures(figures) {
    return figures.reduce(function (sum, figure) {
        if (figure instanceof GeometricFigure) {
            console.log(`Geometric figure ${figure.toString()} - area ${figure.getArea()}`);

            return sum + figure.getArea();

        }
        throw new Error('Something went wrong.')
    }, 0)
}


console.log(handleFigures(figures));*/

/*Приклад результату:
    Geometric figure: Triangle - area: 10
Geometric figure: Square - area: 49
Geometric figure: Circle - area: 78.53981633974483
137.53981633974485 // total area
*/
