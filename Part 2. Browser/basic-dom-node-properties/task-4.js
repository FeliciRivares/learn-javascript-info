// Є дерево, що структуровано як вкладені ul/li.

// Напишіть код, який для кожного <li> показує:

// Текст всередині вузла (без піддерева)
// Кількість вкладених <li> – всіх нащадків, включаючи глибоко вкладені.
for ( let li of document.querySelectorAll('li')){
    let text = li.firstChild.data;
    console.log(text);

    console.log(li.getElementsByTegName('li').length);
}