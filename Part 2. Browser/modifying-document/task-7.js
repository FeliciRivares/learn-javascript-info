// Створіть кольоровий годинник як у цьому прикладі:


// Використовуйте HTML/CSS для стилізації, JavaScript лише оновлює час в елементах.


function update() {
    let clock = document.getElementById('clock');
    let date = new Date();
    let hours = date.getHours();

    if(hours < 10) hours = '0' + hours;
    clock.children[0].innerHTML = hours;

    let minutes = date.getMinutes();
    if(minutes < 10) minutes = '0' + minutes;
    clock.children[1].innerHTML = minutes;
    
    let second = date.getSeconds();
    if(second < 10) second = '0' + second;
    clock.children[2].innerHTML = minutes;
}