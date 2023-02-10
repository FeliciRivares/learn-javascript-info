// Створіть функцію clear(elem) яка видаляє все з елементу.

// <ol id="elem">
//   <li>Привіт</li>
//   <li>Світ</li>
// </ol>

// <script>
//   function clear(elem) { /* ваш код */ }

//   clear(elem); // очищує список
// </script>
function clear(elem){
    elem.innerHTML = '';
    
}
clear(elem);