// Створіть “дросельний” декоратор throttle(f, ms) – що повертає обгортку.
// Коли він викликається кілька разів, він передає виклик до f максимум один раз на ms мілісекунд.
// Різниця з debounce полягає в тому, що це зовсім інший декоратор:
// debounce запускає функцію один раз після періоду “спокою”. Це добре для обробки кінцевого результату.
// throttle запускає функцію не частіше, ніж дано ms часу. Це добре для регулярних оновлень, які не повинні бути дуже часто.
// Іншими словами, throttle – це як секретар, який приймає телефонні дзвінки, але турбує боса (викликає фактичну f) 
// не частіше, ніж один раз на ms мілісекунд.
// Перевірмо застосунок з реального життя, щоб краще зрозуміти ці вимогу та побачити, звідки вони походять.
// Приклад коду:

// function f(a) {
//   console.log(a);
// }

// f1000 передає виклики до f максимум один раз на 1000 мс
// let f1000 = throttle(f, 1000);

// f1000(1); показує 1
// f1000(2);  (обмеження, 1000 мс ще не закінчилися)
// f1000(3); (обмеження, 1000 мс ще не закінчилися)

// коли 1000 ms time out ...
// ...вивід 3, проміжне значення 2 було проігноровано
// P.S. Аргументи та контекст this передані в f1000 повинні бути передані оригінальній f.




function throttle(func, ms) {

    let isThrottled = false,
      savedArgs,
      savedThis;
  
    function wrapper() {
  
      if (isThrottled) { // (2)
        savedArgs = arguments;
        savedThis = this;
        return;
      }
      isThrottled = true;
  
      func.apply(this, arguments); // (1)
  
      setTimeout(function() {
        isThrottled = false; // (3)
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);
    }
  
    return wrapper;
  }