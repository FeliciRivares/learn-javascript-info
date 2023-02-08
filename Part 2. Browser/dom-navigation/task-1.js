// Подивіться на цю сторінку:

// <html>
// <body>
//   <div>Користувачи:</div>
//   <ul>
//     <li>Іван</li>
//     <li>Петро</li>
//   </ul>
// </body>
// </html>
// Вкажіть принаймні один спосіб доступу до кожного з перелічених нижче DOM вузлів:

// До DOM вузла <div>?
document.body.firstElementChild;
// До DOM вузла <ul>?
document.body.children[1];
// До другого <li> (Петро)?
document.body.children[1].children[1];
