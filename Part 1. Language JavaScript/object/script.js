let user = {
    name: "Іван",
    age: 30
  };
  
let key = prompt("Що ви хочете знати про користувача?", "name");
  
// доступ до властивості через змінну
alert( user[key] ); // Іван (якщо ввести "name")


// Ми можемо використовувати квадратні дужки в літеральній нотації для створення обчислюваної властивості
let fruit = prompt("Які фрукти купити?", "apple");

let bag = {
  [fruit]: 5, // назву властивості взято зі змінної fruit
};

alert( bag.apple ); // 5 якщо fruit="apple"

// використання циклу for in 
let userA = {
    name: "Іван",
    age: 30,
    isAdmin: true
  };
  
  for (let key in userA) {
    // ключі
    alert( key );  // name, age, isAdmin
    // значення ключів
    alert( user[key] ); // Іван, 30, true
  }