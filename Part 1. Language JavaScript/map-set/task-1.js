// Нехай arr – це масив.
// Потрібно створити функцію unique(arr), яка повинна повертати масив унікальних елементів arr.
// Наприклад:
// function unique(arr) {
//   /* Твій код */
// }
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// alert( unique(values) ); // Hare, Krishna, :-O
// P.S. В прикладі ми використали рядки, але можуть бути значення будь-якого типу.
// P.P.S. Використайте Set для формування множини унікальних значень.

function unique(arr) {
    // let arrSet = new Set(arr)
    // arrSet.forEach((value, valueAgain, arrSet) => {
    //     return(value);
    // });
    return Array.from(new Set(arr));
    
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
alert( unique(values) );