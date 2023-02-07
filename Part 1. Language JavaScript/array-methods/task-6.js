// Створіть функцію-конструктор Calculator, яка створює «розширюваний» обʼєкт калькулятора.
// Завдання складається з двох частин.

// По-перше, реалізуйте метод calculate(str), який приймає рядок типу "1 + 2" в форматі «ЧИСЛО оператор ЧИСЛО» 
// (розділені пробілами) і повертає результат. Метод повинен розуміти плюс + і мінус -.
// Приклад використання:
//     let calc = new Calculator;
//     alert( calc.calculate("3 + 7") ); // 10
// Потім додайте метод addMethod(name, func), який додає в калькулятор нові операції. 
// Він приймає оператор name і функцію з двома аргументами func(a, b), яка описує його.
// Наприклад, давайте додамо множення *, ділення / і зведення в ступінь **:
//     let powerCalc = new Calculator;
//     powerCalc.addMethod("*", (a, b) => a * b);
//     powerCalc.addMethod("/", (a, b) => a / b);
//     powerCalc.addMethod("**", (a, b) => a ** b);

//     let result = powerCalc.calculate("2 ** 3");
//     alert( result ); // 8
// Для цього завдання не потрібні дужки або складні вирази.
// Числа і оператор розділені рівно одним пропуском.
// Не зайвим буде додати обробку помилок.


function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    };

    this.calculate = function(str) {
        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];
        // перевірка
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.methods[op](a, b);
    };

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
powerCalc.addMethod("^", (a, b) => Math.pow(a, b));

let result = powerCalc.calculate("3 ^ 2");
alert( result ); 