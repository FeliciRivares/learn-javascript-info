// Створіть функцію multiplyNumeric(obj), яка примножує всі числові властивості об’єкта obj на 2.
// Наприклад:
// до виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: "Моє меню"
// };
// multiplyNumeric(menu);
// після виклику функції
// menu = {
//   width: 400,
//   height: 600,
//   title: "Моє меню"
// };
// Зверніть увагу, що multiplyNumeric не потрібно нічого повертати. Слід безпосередньо змінювати об’єкт.
// P.S. Використовуйте typeof для перевірки, що значення властивості числове.

let menu = {
      width: 200,
      height: 300,
      title: "Моє меню",
    //   border: 3, 
};
console.log(menu);

function multiplyNumeric(obj) {
    for(let key in obj) {
        if(typeof obj[key] != 'number') continue;
        obj[key] = obj[key] * 2;
    }
}
multiplyNumeric(menu);
console.log(menu);