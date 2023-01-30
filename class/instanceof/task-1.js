// Чому instanceof повертає true у коді нижче? Ми можемо легко побачити, що a не створюється B().

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true

// Оскільки А має спільні прототипи В 