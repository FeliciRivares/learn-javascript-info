// // test file
// let promis = new Promise(function(resolve, reject) {

// });

// Функція передана в new Promise називається виконавцем. Коли створюється new Promise вона виконується автоматично. В ній знаходиться код “виробник” котрий зрештою поверне результат. 
// В контексті нашої аналогії: виконавець – це “співак”.
// Його аргументи resolve і reject – це колбеки які надає нам сам JavaScript. Наш код – тільки всередині виконавця.

// Коли функція-виконавець завершить свою роботу, неважливо – зараз чи пізніше, вона повинна викликати один з цих колбеків:

// resolve(value) – якщо код успішно виконався, з результатом value.
// reject(error) – якщо виникла помилка, error – об’єкт помилки.
// Отже, виконавець запускається автоматично і намагається виконати роботу. А потім викликає метод resolve якщо спроба була успішною або reject якщо виникла помилка.

// В об’єкта promise, що повертається конструктором new Promise є внутрішні властивості:

// state («стан») —- спочатку "pending" («очікування»), в результаті виконання функції він може змінюватися на: "fulfilled" коли викликається метод resolve і на "rejected" – коли reject.
// result (результат) —- спочатку undefined, далі змінюється на value коли викликається метод resolve(value) або error коли reject(error).


let promise = new Promise(function(resolve, reject) {

    setTimeout(() => {
        resolve('Task complat ')
    }, 1000)
});
// Через одну секунду “обробки” виконавець викличе resolve("done"), щоб передати результат. 
// Ця дія змінить стан об’єкта promise (що повертається конструктором new Promise) з "pending" на "fulfilled"

let promiseErro = new Promise(function(resolve, reject){

    setTimeout(() => {
        reject(new Error('errrorrrrr'))
    },2000)
});
// Виклик методу reject(...) переводить стан об’єкта promise в "rejected"

// Проміс – в стані resolve чи reject будемо називати “завершеним (settled)”,
//  на відмінно від початкового стану проміса “в очікуванні (pending)”.

// Функція-виконавець може викликати тільки щось одне: resolve або reject. Стан проміса може змінитись лише один раз.
// Всі наступні виклики resolve чи reject будуть ігноруватись:

// let promise = new Promise(function(resolve, reject) {
//   resolve("завершено");

//   reject(new Error("…")); // ігнорується
//   setTimeout(() => resolve("…")); // ігнорується
// });
// Ідея в тому що функція виконавець може мати тільки один результат чи помилку.
// Зверніть увагу, що методи resolve/reject можуть прийняти тільки один аргумент (або жодного), а всі додаткові аргументи будуть проігноровані.

// Найважливіший і фундаментальний метод – .then.
// Синтаксис:

// promise.then(
//   function(result) { /* обробляє успішне виконання */ },
//   function(error) { /* обробляє помилку */ }
// );
// Перший аргумент метода .then – функція що викликається коли проміс успішно виконується, тобто переходить зі стану "pending" в "resolved".
// Другим аргументом метод .then приймає функцію що викликається коли проміс переходить в стан "rejected".


let promiseThen = new Promise(function(resolse, reject){
    setTimeout(() => {
        resolse('good')
    }, 1000);
});

promiseThen.then(
    result => console.log(result),
    error => console.log(error),
);

let promiseThenError = new Promise(function(resolse, reject) {
    setTimeout(() => {
         reject(new Error('rerererer'))
    }, 2000);
})
promiseThenError.catch(console.log)

// Виклик .catch(f) – це скорочений варіант .then(null, f).

// finally
// По аналогії з блоком finally зі звичайного try {...} catch {...}, у промісів також є свій метод finally
// Виклик .finally(func) подібний до .then(func, func), в тому сенсі,
// що func виконається в будь-якому випадку, коли проміс перейде в
// стан "виконано (settled)" не залежно від того став він resolved чи rejected.
// finally добре підходить для чистки, наприклад зупинки індикатора завантаження,
// тому, що його потрібно зупинити незалежно від результату.

