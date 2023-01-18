// Напишіть функцію sumTo(n), що обчислює суму чисел 1 + 2 + ... + n.
// Наприклад:
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Зробити 3 варіанти рішення:
// Використання циклу.
// Використання рекурсії, у випадку sumTo(n) = n + sumTo(n-1) для n > 1.
// Використання формули арифметичної прогресії.
// Приклад результату:
// function sumTo(n) { /*... ваш код ... */ }
// alert( sumTo(100) ); // 5050
// P.S. Який варіант рішення є найшвидшим? Найповільнішим? Чому?
// P.P.S. Чи можемо ми використовувати рекурсію для підрахунку sumTo(100000)?


// Використання циклу.           Найшвидший варіант, не навантажує пам'ять 

// function sumTo(n) { 
//     let result = 0;
//     for( let i = 0; i <= n; i++){
//         result += i;
//     }
//     return result;
// }
// alert( sumTo(100) );

// Використання рекурсії.          в рекурсії є обмеження в кількості виконань операцій 100000,
// function sumTo(n) {             обмеження звязані з переповненням стеку
//     return n > 1 ? n + sumTo(n - 1) : n ;
// }
// alert( sumTo(100) );

// Використання формули арифметичної прогресії

function sumTo(n) { 
    n = ( n * ( n + 1)) / 2;
    return n;
}
alert( sumTo(100) );
