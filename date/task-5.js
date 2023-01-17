// Напишіть функцію getLastDayOfMonth(year, month), що повертає останній день місяця.
// Іноді це 30-е, 31-ше або навіть 28/29-е для лютого.

// Параметри:

// year – чотиризначний рік, наприклад 2012.
// month – місяць, від 0 to 11.
// Наприклад, getLastDayOfMonth(2012, 1) = 29 (високосний рік, лютий).

function getLastDayOfMonth(year, month){
    return new Date(year, month + 1, 0)
}

console.log(getLastDayOfMonth(2012, 1));