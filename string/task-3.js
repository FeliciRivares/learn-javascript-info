// Створіть функцію truncate(str, maxlength), яка перевіряє довжину str і, якщо вона перевищує 
// maxlength – замінює кінець str символом трьох крапок "…", щоб його довжина була рівною maxlength.
// Результатом функції повинен бути урізаний (якщо потребується) рядок.

function truncate(str, maxlength) {
    let lenghtStr = str.length;
    let maxStrLenght = str.substr(0, maxlength);
    
    return lenghtStr > maxlength ? maxStrLenght + "..." : str 
}

alert(truncate("dfgfhjfhhjfhjfdfg", 8));