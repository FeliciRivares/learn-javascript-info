// Анаграми – це слова, у яких ті ж букви в тій же кількості, але вони розташовуються в іншому порядку.
// Наприклад:
// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишіть функцію aclean(arr), яка повертає масив без анаграм.
// Наприклад:
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
// З кожної групи анаграм має залишитися тільки одне слово, не має значення яке.

function aclean(arr){
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let sorted = arr[i].toLowerCase().split("").sort().join("");
        obj[sorted] = arr[i];
    }
    return Object.values(obj);

}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) );