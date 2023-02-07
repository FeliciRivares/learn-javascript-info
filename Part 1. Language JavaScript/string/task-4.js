// У нас є вартість у вигляді "$120". Тобто: спочатку йде знак долара, а потім число.
// Створіть функцію extractCurrencyValue(str), яка витягне числове значення з такого рядка та поверне його.

function extractCurrencyValue(str){
    const parsed = parseInt(str, 10);

    if ( isNaN(parsed) ) {
        return 0; 
    }
    return parsed * 100;
}

console.log(extractCurrencyValue('$120'));


// function extractCurrencyValue(str) {
//     return +str.slice(1);
//   }