// Якщо ми використаємо 1 як зерно, то значення будуть такими:

// 16807
// 282475249
// 1622650073
// …and so on…
// Завдання полягає в тому, щоб створити функцію-генератор pseudoRandom(seed), яка приймає seed і створює генератор з цією формулою.

// Приклад використання:

// let generator = pseudoRandom(1);

// alert(generator.next().value); // 16807
// alert(generator.next().value); // 282475249
// alert(generator.next().value); // 1622650073




function* pseudoRandom(seed) {
    let value = seed;
  
    while(true) {
      value = value * 16807 % 2147483647
      yield value;
    }
  
  };
  
let generator = pseudoRandom(1);

alert(generator.next().value); 
alert(generator.next().value); 
alert(generator.next().value); 