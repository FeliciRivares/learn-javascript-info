// В коді, що показаний нижче, ми створюємо об’єкт new Rabbit і потім міняємо його прототип.
// На початку, маємо цей код:

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };
// let rabbit = new Rabbit();
// alert( rabbit.eats ); // true
// Ми додали ще рядок коду (виділений). Що покаже тепер alert?

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype = {};

// alert( rabbit.eats ); // true 
// …А якщо маємо такий код (з видаленим рядком коду)?

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype.eats = false;

// alert( rabbit.eats ); // true

// А якщо так (також з видаленим рядком коду)?

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete rabbit.eats;

// alert( rabbit.eats ); // true
// І останній варіант:

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert( rabbit.eats ); // false