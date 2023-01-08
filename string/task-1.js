// Напишіть функцію ucFirst(str), яка повертає рядок str з першим символом у верхньому регістрі:
let name = prompt("Ведіть ваше імя");

function ucFirst(str = "Імя") {
    let strFirst = str[0].toUpperCase(); 
    str = strFirst + str.slice(1);
    alert(str)
}

ucFirst(name);