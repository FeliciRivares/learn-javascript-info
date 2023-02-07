// Напишіть функцію getSecondsToday(), що повертає кількість секунд з
// початку сьогоднішнього дня.
// Наприклад, якщо зараз 10:00 am, і не було зміни літнього часу, то:
// getSecondsToday() == 36000 // (3600 * 10)
// Функція повинна працювати в будь-який день. Тобто,
// вона не повинна мати жорстко-кодоване значення “сьогодні”.

function getSecondsToday() {
    let date = new Date()
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}

console.log(getSecondsToday())