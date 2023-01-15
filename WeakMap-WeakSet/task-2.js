// Є масив повідомлень, як у попередньому завдані. Ситуація схожа.
// let messages = [
//   {text: "Привіт", from: "Іван"},
//   {text: "Як справи?", from: "Іван"},
//   {text: "До зустрічі", from: "Аліса"}
// ];
// Зараз питання наступне: яку структуру даних ви б запропонували для того, щоб зберегти 
// інформацію: “Коли повідомлення було прочитано?”.
// У попередньому завданні нам потрібно лише зберігати інформацію 
// “так/ні”. Тепер нам потрібно зберігати дату, і це повинно залишитися в пам’яті лише доки повідомлення не буде видалено.
// P.S. Дати можуть зберігатися як об’єкти вбудованого класу Data,
//  що ми розглянемо пізніше.
'use strict'

let messages = [
    {text: "Привіт", from: "Іван"},
    {text: "Як справи?", from: "Іван"},
    {text: "До зустрічі", from: "Аліса"}
];

let messagesWeakMap = new WeakMap();

function cache(user) {
    if(!messagesWeakMap.has(user)){
        messagesWeakMap.set(user, Date.now());
    }
    return messagesWeakMap.get(user);
}

cache(messages[2]);
messages[2] = null;
console.log(messagesWeakMap.has(messages[2]));

// messagesWeakMap.set(messages[0], new Date(2017, 1, 1));