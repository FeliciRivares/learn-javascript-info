// Ми маємо два хом’ячка (об’єкти): speedy та lazy, які успадковують властивості від загального об’єкта hamster.
// Коли ми годуємо одного з них, інший також стає ситим. Але чому? Як ми можемо це виправити?

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster,
  stomach: [],
};

let lazy = {
  __proto__: hamster,
  stomach: []
};

// Цей хом’ячок знайшов їду
speedy.eat("apple");
speedy.eat("orange");
console.log( speedy.stomach ); // apple

// Але цей також має їжу, чому? Виправте це.
console.log( lazy.stomach ); // apple