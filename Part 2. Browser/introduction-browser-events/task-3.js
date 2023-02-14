// У змінній button знаходиться кнопка. Спочатку на ній немає обробників.

// Який з обробників запуститься? Що буде виведено під час кліку після виконання коду?

button.addEventListener("click", () => alert("1"));
// 1
button.removeEventListener("click", () => alert("1"));
// нічого 
button.onclick = () => alert(2);
// 2