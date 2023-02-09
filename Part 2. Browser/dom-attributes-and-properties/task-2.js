// Зробіть всі зовнішні посилання помаранчевими, змінюючи властивість style.

// Посилання є зовнішнім, якщо:

// В його href є ://
// Але не починається з http://internal.com.
let link = document.querySelector('a');
    link.style.color = 'orange';

let selector = 'a[href*="://"]:not([href^="http://internal.com"])';
let links = document.querySelektorAll('li');
     
links.forEach(link => link.style.color = 'orange'); 
    