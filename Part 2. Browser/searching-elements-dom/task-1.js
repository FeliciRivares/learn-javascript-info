// Ось документ із таблицею та формою.

// Як знайти?…

// Таблиця з id="age-table".
document.getElementById('age-table');
// Усі елементи label всередині цієї таблиці (їх має бути 3).
document.getElementById('age-list').querySelectorAll('input');
// Перший td у цій таблиці (зі словом “Age”).
document.getElementsByTagName('label');
// form з name="search".
document.querySelector('form[name="search"]')
// Перший input у цій формі.
document.querySelector('form[name="search"]').firstElementChild;
// Останній input у цій формі.
document.querySelector('form[name="search"]').elements[1]
// Відкрийте сторінку table.html в окремому вікні та скористайтеся для цього інструментами браузера.
// https://uk.javascript.info/task/find-elements/table.html
