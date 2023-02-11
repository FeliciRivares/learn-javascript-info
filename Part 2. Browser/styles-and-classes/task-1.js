// Напишіть функцію showNotification(options), яка створює сповіщення <div class="notification"> з переданим вмістом. Сповіщення повинно автоматично зникати через 1.5 секунди.

// Вхідні параметри такі:

// // показує елемент з текстом "Hello" біля правого верхнього кутка вікна
// showNotification({
//   top: 10, // 10px від верха вікна (усталено має бути 0px)
//   right: 10, // 10px від правого краю вікна (усталено — 0px)
//   html: "Hello!", // HTML-код сповіщення
//   className: "welcome" // додатковий клас для елемента div (необов'язково)
// });
// Демонстрація в новому вікні

// Використовуйте позиціонування CSS для розміщення елемента за вказаними координатами top/right. Документ з оточенням вже містить всі необхідні стилі.

function showNotification({top = 0, right = 0, className, html}) {
    let notificatio = document.createElement('div');
    notificatio.textContent = html;
    document.body.append(notificatio); 
    notificatio.className = className;
    notificatio.style.position = 'absolute';
    notificatio.style.right = `${right}px`;
    notificatio.style.top = `${top}px`;

    setInterval( () => notificatio.remove(), 1500)
  }

  // test it
  let i = 1;
  setInterval(() => {
    showNotification({
      top: 10,
      right: 10,
      html: 'Hello ' + i++,
      className: "welcome"
    });
  }, 2000);