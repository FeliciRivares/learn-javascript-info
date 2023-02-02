// У нас є “звичайна” функція під назвою f. Як ви можете викликати async-функцію wait()
//  і використовувати її результат всередині f?

// async function wait() {
//   await new Promise(resolve => setTimeout(resolve, 1000));

//   return 10;
// }

// function f() {
//   // ...що тут варто написати?
//   // нам потрібно викликати async-функцію wait() і почекати, щоб отримати 10
//   // пам’ятайте, ми не можемо використовувати "await"
// }
// P.S. Технічно завдання дуже просте, але дане питання досить 
// поширеним серед розробників, які тільки починають працювати з async/await.


async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
  }
  
  function f() {
    wait().then(result => alert(result));
  }