// Ось код, у якому створюють пару об’єктів і потім в ході виконання їх модифікують.
// Які значення будуть показані в результаті виконання коду?

// let animal = {
//   jumps: null
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true
// };

// alert( rabbit.jumps ); // true(1)

// delete rabbit.jumps;

// alert( rabbit.jumps ); // null (2)

// delete animal.jumps;

// alert( rabbit.jumps ); // underfined (3)
// Повинно бути 3 відповіді.