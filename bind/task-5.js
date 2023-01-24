// Задача трохи складніша ніж Виправте функцію, яка втратила 'this'.

// Об’єкт user був змінений. Тепер замість двох функцій loginOk/loginFail, він має одну функцію user.login(true/false).

// Що ми маємо передати askPassword в коді нижче, щоб вона викликала user.login(true) при ok та user.login(false) при fail?

function askPassword(ok, fail) {
  let password = prompt("Пароль?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Іван',

  login(result) {
    alert( this.name + (result ? ' увійшов' : ' виконав невдалу спробу входу') );
  }
};
askPassword(user.login.bind(user, true), user.login.bind(user, false))
// askPassword(?, ?); // ?
// Вносіть зміни тільки у виділений рядок.