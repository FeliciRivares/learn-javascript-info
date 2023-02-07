// Створіть декоратор spy(func), який повинен повернути обгортку, 
// яка зберігає всі виклики функції у властивості calls.
// Кожен виклик зберігається як масив аргументів.
// For instance:
// function work(a, b) {
//   alert( a + b ); // працює як довільна функція або метод
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   alert( 'виклик:' + args.join() ); // "виклик:1,2", "виклик:4,5"
// }
// P.S. Цей декоратор іноді корисний для unit-тестування. Його просунута форма – sinon.spy у бібліотеці Sinon.JS.

function work(a, b) {
    alert( a + b ); 
}
function spy(func) {
    function wrapper(...args) {
      wrapper.calls.push(args);
      return func.apply(this, args);
    }
    wrapper.calls = [];
    return wrapper;
  }

work = spy(work);
  work(1, 2); 
  work(4, 5); 
  
for (let args of work.calls) {
    alert( 'виклик:' + args.join() ); 
}