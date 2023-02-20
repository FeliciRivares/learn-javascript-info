// Зробіть так, щоб усі посилання всередині елемента з id="contents" запитали у користувача, чи дійсно він хоче вийти. І якщо ні, то не переходьте за посиланням.

// Ось таким чином:


// Детальніше:

// HTML всередині елемента може бути завантажений або динамічно відновлений в будь-який час, тому ми не можемо знайти всі посилання та розмістити на них обробники. Використовуйте делегування подій.
// Вміст може мати вкладені теги. Внутрішні посилання також, як-от <a href=".."><i>...</i></a>.


contents.onclick = function(e){
    function links(href){
        const isLiving = confirm(`Go to ${href}`);
        if(!isLiving) return false;
    }
    const target = e.target.closest("a");

    if(target && contents.contains(target)){
        return handleLink(target.getAttribute('href'));
    }
}