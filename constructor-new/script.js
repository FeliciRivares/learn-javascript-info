// У наступному прикладі return перезаписує this, повертаючи об’єкт:

function BigUser() {

    this.name = "Джон";

    return { name: "Ґодзілла" };  // <-- повертає цей об’єкт
}

alert( new BigUser().name );  // Ґодзілла, отримали цей об’єкт


// А ось приклад з порожнім return (або ми можемо розмістити примітив після нього, не має значення):

function SmallUser() {

    this.name = "Джон";

    return; // <-- повертає this
}

alert( new SmallUser().name );  // Джон

// Зазвичай конструктори не мають інструкції return. Тут ми згадуємо особливу поведінку з поверненнями об’єктів, головним чином, для повноти вивчення мови.

// У наведеному нижче прикладі, new User(name) створює об’єкт із заданим name та методом sayHi:

function User(name) {
    this.name = name;

    this.sayHi = function() {
        alert( "Моє ім’я: " + this.name );
    };
}

let john = new User("Джон");

john.sayHi(); // Моє ім’я: Джон

/*
john = {
   name: "Джон",
   sayHi: function() { ... }
}
*/