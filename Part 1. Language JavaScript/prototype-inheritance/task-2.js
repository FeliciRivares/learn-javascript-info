// Задача має дві частини.

// Ми маємо ось такі об’єкти:

// let head = {
//   glasses: 1
// };

// let table = {
//   pen: 3
// };

// let bed = {
//   sheet: 1,
//   pillow: 2
// };

// let pockets = {
//   money: 2000
// };
// Використайте властивість __proto__ визначивши прототипи таким чином, 
// щоб отримання властивостей було можливим по ось такому шляху: pockets → bed → table → head. Для прикладу, pockets.pen повинно отримати значення 3 (було знайдено в table), а bed.glasses отримує значення 1 (було знайдено в head).
// Дайте відповідь: для отримання властивості glasses що буде швидше: 
// визначити її так pockets.glasses чи так head.glasses? При необхідності зробіть порівняльний тест.


let head = {
      glasses: 1
    };
    
    let table = {
      pen: 3,
      __proto__: head
    };
    
    let bed = {
      sheet: 1,
      pillow: 2,
      __proto__: table
    };
    
    let pockets = {
      money: 2000,
      __proto__: bed
    };
console.log(pockets.glasses); // буде швидше