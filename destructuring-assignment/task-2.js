// Є об’єкт salaries:
// let salaries = {
//   "Іван": 100,
//   "Петро": 300,
//   "Марія": 250
// };
// Створіть функцію topSalary(salaries) яка повертає ім’я найбільш високооплачуваної особи.
// Якщо об’єкт salaries пустий, функція повинна повернути null.
// Якщо є кілька високооплачуваних осіб, поверніть будь-якого з них.
// P.S. Використовуйте Object.entries і деструктурування для перебору пар ключ/значення.

let salaries = {
    "Іван": 100,
    "Петро": 300,
    "Марія": 250
};

function topSalary(salaries) {
    let max = 0;
    let salari = null;

    for (const [key, value] of Object.entries(salaries)) {
        if (max < value) {
            max = value;
            salari = key;
        }
    }
    return salari;
}
console.log(topSalary(salaries));

