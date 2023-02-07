// Виклик askPassword() в коді наведеному нижче повинен перевіряти пароль та викликати 
// user.loginOk/loginFail в залежності від відповіді.

// Але виконання коду призводить до помилки. Чому?

// Виправте виділений рядок, щоб код запрацював правильно (інші рядки не мають бути змінені).

function askPassword(ok, fail) {
  let password = prompt("Пароль?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Іван',

  loginOk() {
    alert(`${this.name} увійшов`);
  },

  loginFail() {
    alert(`${this.name} виконав невдалу спробу входу`);
  },

};

// askPassword(user.loginOk, user.loginFail);
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));