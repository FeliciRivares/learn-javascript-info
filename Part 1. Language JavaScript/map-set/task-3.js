// Ми хотіли б отримати масив ключів map.keys() в змінну і далі працювати з ними, наприклад, застосувати метод .push.
// Але так не спрацює:
// let map = new Map();
// map.set("name", "John");
// let keys = map.keys();
// // Помилка: keys.push -- це не функція
// keys.push("more");
// Чому? Що потрібно виправити в коді, щоб keys.push працював?

let map = new Map();
map.set("name", "John");

let keys = Array.from( map.keys() );
keys.push( "more" );