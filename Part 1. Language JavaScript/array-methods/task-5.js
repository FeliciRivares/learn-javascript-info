// У нас є масив рядків arr. Потрібно отримати відсортовану копію та залишити arr незміненим.
// Створіть функцію copySorted(arr), яка буде повертати таку копію.

// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без змін)


let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr){
    return arr
        .slice()
        .sort();
}
let sorted = copySorted(arr);
alert( sorted );
alert( arr );