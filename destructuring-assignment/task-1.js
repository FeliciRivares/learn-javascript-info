// У нас є об’єкт:
// let user = {
//   name: "Іван",
//   years: 30
// };
// Напишіть деструктуроване присвоєння, яке зчитує:
// властивість name у змінну name.
// властивість years у змінну age.
// властивість isAdmin у змінну isAdmin (false, якщо така властивість відсутня)
// Ось приклад значень після вашого присвоєння:
// let user = { name: "Іван", years: 30 };
// // ваш код зліва:
// // ... = user
// alert( name ); // Іван
// alert( age ); // 30
// alert( isAdmin ); // false


let user = {
    name: "Іван",
    years: 30
};
let {name, years:age, isAdmin = false} = user;

alert( name );
alert( age );
alert( isAdmin ); 