// Виведіть одинозв’язаний список з попереднього завдання 
// Вивести одинозв’язаний список у зворотному порядку.
// Зробіть два рішення: за допомогою циклу та з використанням рекурсії.

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// рекурсія

function printList(list) {
    if (list.next) {
        printList(list.next); 
    }
    console.log(list.value);
}

printList(list);

// використання циклу 

function printReverseList(list) {
    let arr = [];
    let tmp = list;
  
    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
        alert( arr[i] );
    }
}
  
printReverseList(list);