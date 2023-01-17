// Європейські країни мають дні тижня, що починаються з 
// понеділка (№ 1), потім вівторок (№ 2) та до неділі (№ 7).
// Напишіть функцію getLocalDay(date), що повертає “європейський” день тижня для date.

// let date = new Date(2012, 0, 3);  // 3 січня 2012
// alert( getLocalDay(date) );       // вівторок, слід показати 2
function getLocalDay(date){
    let weekDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', ]
    return `${weekDay[date.getDay()]}, ${date.getDay()}`
}

let date = new Date(2012, 0, 3);  
alert( getLocalDay(date) );       