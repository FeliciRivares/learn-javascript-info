// Ми маємо об’єкт rabbit, котрий успадковує властивості від об’єкта animal.

// Якщо ми викличемо rabbit.eat(), у який з об’єктів буде записана властивість full: в animal чи rabbit?

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();
// буде записано в обєкт rabbit, тобто той обєкт після якого стоїть . пісял виклику