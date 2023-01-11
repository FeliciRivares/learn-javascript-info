// Яким буде результат? Чому?

let arr = ["a", "b"];

arr.push(function() {
    alert( this );
});

arr[2](); 

// в нашому this зберігається arr, і відповідно в якості 
// наступного елементу push добавляєьбся текст функції в кінець масиву 

// a, b, function() {
//     alert( this );
// } 