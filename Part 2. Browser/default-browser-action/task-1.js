// Чому в коді нижче return false взагалі не працює?

// <script>
//   function handler() {
//     alert( "..." );
//     return false;
//   }
// </script>

// <a href="https://w3.org" onclick="handler()">браузер перейде на w3.org</a>

// Браузер переходить за URL-адресою після кліку, але нам це не потрібно.

// Як це виправити?

// Потрібно зупинити дії браузера за замовчуванням 
event.preventDefault() 