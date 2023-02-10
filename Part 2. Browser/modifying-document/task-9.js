

// Відсортуйте таблицю
// важливість: 5
// Ось таблиця:

// <table>
// <thead>
//   <tr>
//     <th>Ім’я</th><th>Прізвище</th><th>Вік</th>
//   </tr>
// </thead>
// <tbody>
//   <tr>
//     <td>Сергій</td><td>Петренко</td><td>10</td>
//   </tr>
//   <tr>
//     <td>Юрій</td><td>Даниленко</td><td>15</td>
//   </tr>
//   <tr>
//     <td>Анна</td><td>Ткаченко</td><td>5</td>
//   </tr>
//   <tr>
//     <td>...</td><td>...</td><td>...</td>
//   </tr>
// </tbody>
// </table>
// В таблиці може бути більше рядків.

// Напишіть код для сортування по імені, колонка "name".


let sortRow = Array.from(table.tBodies[0].rows)
    .sort( ( rowA, rowB ) => rowA.cells[0].innerHTML
    .localeCompare( rowB.cells[0].innerHTML ) );
table.tBodies[0].append(...sortRow);