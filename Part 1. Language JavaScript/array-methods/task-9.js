// Напишіть функцію sortByAge(users), яка приймає масив обʼєктів з властивістю age і сортує їх по ньому.
// Наприклад:
//     let ivan = { name: "Іван", age: 25 };
//     let petro = { name: "Петро", age: 30 };
//     let mariya = { name: "Марія", age: 28 };
//     let arr = [ petro, ivan, mariya ];
//     sortByAge(arr);
//     // now: [ivan, mariya, petro]
//     alert(arr[0].name); // Іван
//     alert(arr[1].name); // Марія
//     alert(arr[2].name); // Петро

function sortByAge(users){
    users.sort((a, b) => a.age - b.age);
}

let ivan = { name: "Іван", age: 25 };
let petro = { name: "Петро", age: 30 };
let mariya = { name: "Марія", age: 28 };
let users = [ petro, ivan, mariya ];

sortByAge(users);

alert(users[0].name);
alert(users[1].name); 
alert(users[2].name); 
