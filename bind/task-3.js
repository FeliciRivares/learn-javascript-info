Функції присвоєна властивість зі значенням. Чи зміниться вона після bind? Чому?

function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Іван"
});

alert( bound.test ); // що виведе функція? Чому?



відповідь результат є інший обєкт без властивості bound