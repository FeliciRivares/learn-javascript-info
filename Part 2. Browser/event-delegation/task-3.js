// Make the table sortable: clicks on <th> elements should sort it by corresponding column.

// Each <th> has the type in the attribute, like this:

// <table id="grid">
//   <thead>
//     <tr>
//       <th data-type="number">Вік</th>
//       <th data-type="string">Ім’я</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>5</td>
//       <td>Іван</td>
//     </tr>
//     <tr>
//       <td>12</td>
//       <td>Ганна</td>
//     </tr>
//     ...
//   </tbody>
// </table>
// У наведеному вище прикладі перший стовпець містить числа, а другий – рядки. Функція сортування повинна обробляти сортування відповідно до типу.

// Повинні підтримуватися лише типи "string" та "number".

// Робочий приклад:


// P.S. Таблиця може бути великою, з будь-якою кількістю рядків і стовпців.

grid.onclick = function(e) {
    if (e.target.tagName != 'TH') return;

    let th = e.target;
    sortGrid(th.cellIndex, th.dataset.type);
  };

  function sortGrid(colNum, type) {
    let tbody = grid.querySelector('tbody');

    let rowsArray = Array.from(tbody.rows);
    let compare;

    switch (type) {
      case 'number':
        compare = function(rowA, rowB) {
          return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
        };
        break;
      case 'string':
        compare = function(rowA, rowB) {
          return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
        };
        break;
    }

    rowsArray.sort(compare);
    tbody.append(...rowsArray);
  }