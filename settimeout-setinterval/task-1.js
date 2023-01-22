// Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду, починаючи від from і закінчуючи to.
// Зробіть два варіанти рішення.
// Використовуючи setInterval.
// Використовуючи вкладений setTimeout.



// setInterval
// function printNumbers(from, to) {
//     let current = from;
  
//     let timerId = setInterval(function() {
//       console.log(current);
//       if (current == to) {
//         clearInterval(timerId);
//       }
//       current++;
//     }, 1000);
//   }
// printNumbers(5, 10);




// setTimeout
function printNumbers(from, to) {
    let current = from;
    setTimeout(function run() {
        console.log(current);
        if (current < to) {
          setTimeout(run, 1000);
        }
        current++;
      }, 1000);
  }
printNumbers(5, 10);