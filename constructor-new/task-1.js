// Чи можливо створити функції A та B, щоб new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A;
// let b = new B;

// alert( a == b ); // true
// Якщо так – наведіть приклад коду таких функцій.

let object = {};
let a = new A;
let b = new B;

function A() { 
    return object; 
}
function B() { 
    return object;
}

console.log(( a == b )); // true