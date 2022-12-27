/*  Напишіть функцію isEmpty(obj), яка повертає true, якщо об’єкт не має властивості, інакше false.
    Має так працювати:
        let schedule = {};
        alert( isEmpty(schedule) ); // true
        schedule["8:30"] = "Вставай";
        alert( isEmpty(schedule) ); // false
 */
let schedule = {};

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
    }

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "Вставай";
alert( isEmpty(schedule) ); // false

