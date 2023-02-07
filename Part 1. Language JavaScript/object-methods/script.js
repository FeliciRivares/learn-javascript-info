let userOne = {
    name: "Іван",
    age: 30
};

userOne.sayHi = function() {
    alert("Привіт!");
};

userOne.sayHi();

// цей об’єкт робить те ж саме
let userTwo = {
    sayHi() { // те ж саме що й "sayHi: function(){...}"
        alert("Привіт!");
    }
};

userTwo.sayHi();


let userThre = { name: "Іван" };
let admin = { name: "Адмін" };

function sayHi() {
    alert( this.name );
}

// використовуємо одну і ту ж функцію у двох об’єктах
userThre.f = sayHi;
admin.f = sayHi;

// виклики функцій, приведені нижче, мають різні this
// "this" всередині функції являється посиланням на об’єкт "перед крапкою"
userThre.f(); // Іван  (this == user)
admin.f(); // Адмін  (this == admin)

admin['f'](); // Адмін (неважливо те, як звертатися до методу об’єкта -- через крапку чи квадратні дужки)