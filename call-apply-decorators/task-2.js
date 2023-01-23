// Створіть декоратор delay(f, ms), яка затримує кожен виклик f на ms мілісекунд.
// Наприклад:
// function f(x) {
//   alert(x);
// }
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);
// f1000("тест"); 
// f1500("тест"); 
// Іншими словами, delay(f, ms) повертає варіант f з "затримкою на ms".
// У коді вище, f є функцією одного аргументу, але ваше рішення повинно передавати всі аргументи та контекст this.

function delay(f, ms){
    return function() {
        setTimeout(() => f.apply(this, arguments), ms);
      };
}

function f(x) {
    alert(x);
  }
  
  let f1000 = delay(f, 1000);
  let f1500 = delay(f, 3000); //через 3000
  
  f1000("тест"); 
  f1500("тест"); 