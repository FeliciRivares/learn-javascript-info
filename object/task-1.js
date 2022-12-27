// Напишіть код, виконавши завдання з кожного пункту окремим рядком:

// 1 Створіть порожній об’єкт user.
// 2 Додайте властивість name зі значенням Іван.
// 3 Додайте властивість surname зі значенням Сміт.
// 4 Змініть значення name на Петро.
// 5 Видаліть властивість name з об’єкта.

let user = {};

user.name = "Іван";
console.log(user);

user.surname = "Сміт";
console.log(user);

user.name = "Петро";
console.log(user);

delete user.name;
console.log(user);

// додано console.log() для перевірки виконання завдання 