// Напишіть код, який повертає ширину стандартної смуги прокрутки.
// Для Windows це зазвичай 12px або 20px. Якщо браузер не резервує для прокрутки місця (смуга прокрутки напівпрозора над текстом), тоді може бути 0px.
// P.S. Код повинен працювати для будь-якого HTML-документа, незалежно від його вмісту.

let scrollLine =  elem.offsetWidth - elem.clientWidth