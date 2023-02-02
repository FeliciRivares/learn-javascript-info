// Що ви думаєте? Чи виконається .catch? Поясніть свою відповідь.

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);

// У цьому прикладі помилка генерується не по ходу виконання коду а пізніше проміс не може обробити її.