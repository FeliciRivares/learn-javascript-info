// Є масив повідомлень:
// let messages = [
//   {text: "Привіт", from: "Іван"},
//   {text: "Як справи?", from: "Іван"},
//   {text: "До зустрічі", from: "Аліса"}
// ];
// Ваш код може отримати доступ до нього, але повідомлення керуються чужим кодом.
// Нові повідомлення додаються, старі видаляються регулярно цим кодом,
// і ви не знаєте точних моментів, коли це станеться.
// Тепер, яку структуру даних ви могли б використати для зберігання інформації про те,
// чи було повідомлення прочитаним? Структура повинна добре підходити, 
// щоб дати відповідь на питання “чи він прочитаний?” для об’єкта даного повідомлення.
// P.S. Коли повідомлення видаляється з messages, 
// воно також повинне зникнути з вашої структури.
// P.P.S. Ми не повинні змінювати об’єкти повідомлення, 
// додаючи до них наші властивості. Оскільки вони керуються іншим кодом, це може призвести до поганих наслідків.

let messages = [
    {text: "Привіт", from: "Іван"},
    {text: "Як справи?", from: "Іван"},
    {text: "До зустрічі", from: "Аліса"}
];

let messagesWeakSet = new WeakSet();

messagesWeakSet.add(messages[1]);
messagesWeakSet.add(messages[0]);
messagesWeakSet.delete(messages[0]);

console.log(messagesWeakSet.has(messages[1]));
console.log(messagesWeakSet.has(messages[0]));
