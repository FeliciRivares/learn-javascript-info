// Напишіть функцію camelize(str), яка перетворює такі рядки “my-short-string” в “myShortString”.
// Тобто дефіси видаляються, а всі слова після них починаються з великої літери.
// Приклади:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

function camelize(str) {
    return str
        .split('-')
        .map((strWord, index) => {
            if( index == 0 ) {
                return strWord
            } else {
                return strWord[0].toUpperCase() + strWord.slice(1)
            }
        })
        .join('')
}