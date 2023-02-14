// Створіть меню, яке відкривається/згортається після кліку:


let menuElem = document.querySelector('.menu-elem');
let titleElem = menuElem.querySelector('.title');

    titleElem.onclick = function() {
      menuElem.classList.toggle('open');
    };