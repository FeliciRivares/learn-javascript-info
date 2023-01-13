// Нехай arr – масив рядків.
// Напишіть функцію unique(arr), яка повертає масив, що містить тільки унікальні елементи arr.
// Наприклад:
// function unique(arr) {
//   /* ваш код */
// }
// let strings = ["Привіт", "Світ", "Привіт", "Світ",
//   "Привіт", "Привіт", "Світ", "Світ", ":-O"
// ];
// alert( unique(strings) ); // Привіт, Світ, :-O

function unique(arr){
    let result = [];

    for(let str of arr) {
        if(!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}

let strings = ["Привіт", "Світ", "Привіт", "Світ",
    "Привіт", "Привіт", "Світ", "Світ", ":-O"
];

console.log( unique(strings) );