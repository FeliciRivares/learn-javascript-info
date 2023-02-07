// Напишіть функцію checkSpam(str), яка повертає true, якщо str містить ‘viagra’ or ‘XXX’, інакше false.
// Функція має бути нечутливою до регістру:

function checkSpam(str){
    let lowerStr =  str.toLowerCase();

    return lowerStr.includes("viagra", "xxx");
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );