// Вбудована функція setTimeout використовує колбек-функції. Створіть альтернативу яка базується на промісах.

// Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через ms мілісекунд, так 
// щоб ми могли додати до нього .then:

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, ms)
  })
}

delay(3000).then(() => console.log('виконалось через 3 секунди'));
