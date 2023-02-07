// Змініть код makeCounter() так, щоб лічильник міг також зменшити та встановити рахунок:

// counter() повинен повернути наступний рахунок (як раніше).
// counter.set(value) повинен встановити лічильник в значення value.
// counter.decrease() повинен зменшити лічильник на 1.
// Див. код пісочниці з повним прикладом використання.

// P.S. Ви можете використовувати або замикання, або властивість функції, щоб зберегти поточний рахунок.
// Або напишіть обидва варіанти.


let makeCounter = function fanc() {
  function counter() {
    return count++;
  }
    counter.set = (value) => {
        return count = value;
    }
    counter.decrease = () => {
        count--;
    }
    return counter;
}
  
  let counter = makeCounter();
  
  alert( counter() ); // 0
  alert( counter() ); // 1
  
  counter.set(10); // set the new count
  
   alert( counter() ); // 10
  
  counter.decrease(); // decrease the count by 1
  
  alert( counter() ); // 10 (instead of 11)