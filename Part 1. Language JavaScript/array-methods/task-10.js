// Напишіть функцію shuffle(array), яка перемішує (випадковим чином переставляє) елементи масиву.
// Багаторазові прогони через shuffle можуть привести до різних послідовностей елементів. Наприклад:
// let arr = [1, 2, 3];
// shuffle(arr);
// // arr = [3, 2, 1]
// shuffle(arr);
// // arr = [2, 1, 3]
// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// Всі послідовності елементів повинні мати однакову ймовірність. Наприклад,
//  [1,2,3] може бути перемішана як [1,2,3] або [1,3,2], або [3,1,2] тощо,
//   з однаковою ймовірністю кожного випадку.
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
  
let array = [1, 2, 3];
shuffle(array);
console.log(array);