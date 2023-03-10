// “Промісифікація” – це довге слово для простої трансформації. Це перетворення функції, яка приймає колбек та повертає проміс.

// На практиці нам, швидше за все, знадобиться промісифікувати не одну функцію, 
// тому є сенс зробити для цього спеціальну «функцію-помічник».
// Ми назвемо її promisify(f) – вона приймає функцію для промісифікації f та повертає функцію-обгортку.

function promisify(f) {
  return function (...args) { // повертає функію-обгортку (*)
    return new Promise((resolve, reject) => {
      function callback(err, result) { // наш спеціальний колбек для f (**)
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }

      args.push(callback); // додаємо колбек у кінець аргументів f

      f.call(this, ...args); // викликаємо оригінальну функцію
    });
  };
}

// використання:
let loadScriptPromise = promisify(loadScript);
loadScriptPromise(...a).then(...b);

// Промісифікація –- це чудовий підхід, особливо якщо ви будете використовувати async/await (дивіться наступний розділ),
//  але вона не є повноцінно заміною будь-яких колбеків.
// Пам’ятайте, проміс може мати лише один результат, але колбек технічно може викликатися скільки завгодно разів.
// Тому промісифікація використовується для функцій, що викликають колбек лише один раз.
//  Наступні виклики колбека будуть проігноровані.


// Обробка промісів завжди асинхронна, оскільки всі дії промісів проходять через внутрішню чергу “promise jobs”,
//  яку також називають “чергою мікрозадач” (термін v8).
// Тому обробники .then/catch/finally завжди викликаються після виконання поточного коду.
// Якщо нам потрібно гарантувати, що фрагмент коду виконується після .then/catch/finally, 
// ми можемо додати його до ланцюжкового виклику .then.
// У більшості рушіїв Javascript, включаючи браузери та Node.js,
// концепція мікрозадач тісно пов’язана з “циклом подій” (“event loop”) і “макрозадачами”.
// Оскільки вони не мають прямого відношення до промісів, вони розглянуті в іншій частині підручника,
//  у статті Event loop: microtasks and macrotasks.

