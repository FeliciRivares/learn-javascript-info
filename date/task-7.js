// Створіть функцію getSecondsToTomorrow(), що повертає кількість секунд до завтра.
// Наприклад, якщо зараз є 23:00, то:
// getSecondsToTomorrow() == 3600
// P.S. Функція повинна працювати в будь-який день, “сьогодні” не є жорстко закодованим.

function getSecondsToTomorrow(){
    let date = new Date()
    return 86400 - (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds());
}
console.log(getSecondsToTomorrow())