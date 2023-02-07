// Напишіть функцію getWeekDay(date), щоб показати робочий день
// у короткому
// форматі: ‘ПН’, ‘ВТ’, ‘СР’, ‘ЧТ’, ‘ПТ’, ‘СБ’, ‘НД’.
// Наприклад:

// let date = new Date(2012, 0, 3);  // 3 січня 2012
// alert( getWeekDay(date) );        // повинно виводити "ВТ"
 
function getWeekDay(date){
    let weekDay = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
    return weekDay[date.getDay()]
}

let date = new Date(2012, 0, 3); 
alert( getWeekDay(date) );