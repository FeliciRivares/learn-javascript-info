// Скажімо, у нас є одинозв’язаний список (як описано в розділі Рекурсія та стек):
// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
// Напишіть функцію printList(list), що виводить список елементів один за одним.
// Зробіть два варіанти рішення: з використанням циклу та з використанням рекурсії.
// Що краще: з рекурсією чи без неї?

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

// function printList(list){
//     console.log(list.value);

//     if (list.next) {
//         printList(list.next); 
//     }
// }

// printList(list);

// використання циклу 

function printList(list){
    while(list) {
        console.log(list.value);
        list = list.next;
    }
    
}
printList(list);