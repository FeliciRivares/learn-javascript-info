// Створіть JS-код для поведінки спливаючої підказки.

// При наведенні миші на елемент з data-tooltip, підказка має з’явитися над ним і ховатися при переході на інший елемент.

// Приклад HTML з підказками:

// <button data-tooltip="підказка довша за елемент">Мала кнопка</button>
// <button data-tooltip="HTML<br>підказка">Ще одна кнопка</button>
// Повинно працювати так:


// У цьому завданні ми припускаємо, що всі елементи з data-tooltip містять лише текст всередині. Немає вкладених тегів (поки що).

// Деталі:

// Відстань між елементом і підказкою має бути 5px.
// Підказка повинна бути відцентрована відносно елемента, якщо це можливо.
// Підказка не повинна перетинати краї вікна. Зазвичай вона має бути над елементом, але якщо елемент знаходиться у верхній частині сторінки і немає місця для підказки, то під ним.
// Вміст підказки вказується в атрибуті data-tooltip. Це може бути довільний HTML.
// Тут вам знадобляться дві події:

// mouseover спрацьовує, коли курсор переходить на елемент.
// mouseout спрацьовує, коли курсор покидає елемент.
// Будь ласка, використовуйте делегування подій: налаштуйте два обробники на document, щоб відстежувати всі “заходи” і “виходи” курсору на елементи з атрибутом data-tooltip і керувати підказками звідти.

// Після реалізації поведінки люди, навіть не знайомі з JavaScript, зможуть додавати підказки до елементів.

// P.S. Одночасно може відображатися лише одна підказка.


let tooltipElem;

    document.onmouseover = function(event) {
      let target = event.target;

      // якщо у нас є HTML підказка...
      let tooltipHtml = target.dataset.tooltip;
      if (!tooltipHtml) return;

      // ...створіть елемент підказки

      tooltipElem = document.createElement('div');
      tooltipElem.className = 'tooltip';
      tooltipElem.innerHTML = tooltipHtml;
      document.body.append(tooltipElem);

      // розташуйте його над анотованим елементом (угорі по центру)
      let coords = target.getBoundingClientRect();

      let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
      if (left < 0) left = 0; // не перетинайте лівий край вікна

      let top = coords.top - tooltipElem.offsetHeight - 5;
      if (top < 0) { // якщо перетинає верхній край вікна, розташуйте знизу
        top = coords.top + target.offsetHeight + 5;
      }

      tooltipElem.style.left = left + 'px';
      tooltipElem.style.top = top + 'px';
    };

    document.onmouseout = function(e) {

      if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
      }

    };



// завдання не виконано