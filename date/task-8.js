// Напишіть функцію formatDate(date), яка повинна форматувати date наступним чином:

// Якщо з date пройшла менше, ніж 1 секунда, то "прямо зараз".
// Інакше, якщо з date пройшло менше 1 хвилини, то "n сек. назад".
// Інакше, якщо менше години, то "m хв. назад".
// В іншому випадку повна дата у форматі "DD.MM.YY HH:mm". Тобто: "день.місяць.рік години:хвилини", все в 2-значному форматі, наприклад, 31.12.16 10:00.
// Наприклад:

// alert( formatDate(new Date(new Date - 1)) ); // "прямо зараз"

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 хв. назад"

// // вчорашня дата, як 31.12.16 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );

function formatDate(date){
    let n = new Date - date;
    let s = n / 1000;
    let m = n / 60000;
    
    if ( n <= 1000 ){
        return 'прямо зараз';

    } else if ( s <= 60) {
        return `${s} cек. назад`;

    } else if ( m <= 60 ) {
        return `${m} хв. назад`;
    } else {
        return n = new Date().toLocaleString();
    }

}
alert( formatDate(new Date(new Date - 1)) ); 
alert( formatDate(new Date(new Date - 30 * 1000)) ); 
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); 
alert( formatDate(new Date(new Date - 86400 * 1000)) );