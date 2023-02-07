// Давайте спробуємо 5 операцій з масивом.

// Створіть масив styles з елементами “Jazz” та “Blues”.
// Додайте “Rock-n-Roll” в кінець масиву.
// Замініть значення в середині масиву на “Classics”. Ваш код повинен шукати медіанний елемент у масивах будь-якої довжини.
// Видаліть перший елемент масиву та покажіть його.
// Вставте Rap та Reggae на початок масиву.
// Вигляд масиву по ходу виконання операцій:

// Jazz, Blues
// Jazz, Blues, Rock-n-Roll
// Jazz, Classics, Rock-n-Roll
// Classics, Rock-n-Roll
// Rap, Reggae, Classics, Rock-n-Roll

let styles = ['Jazz', 'Blues'];
console.log(styles);

styles.push('Rock-n-Roll');
console.log(styles);

styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles);

console.log( styles.shift() );

styles.unshift("Rap", "Reggae");
console.log(styles);