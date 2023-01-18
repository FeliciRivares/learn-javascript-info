// Перетворіть user в JSON, а потім перетворіть його назад в іншу змінну.

// let user = {
//   name: "Іван Іванов",
//   age: 35
// };


let user = {
    name: "Іван Іванов",
    age: 35
};

let jsonString = JSON.stringify(user);
console.log(jsonString);

let jsonObj = JSON.parse(jsonString);
console.log(jsonObj);