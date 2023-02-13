// Створіть функцію positionAt(anchor, position, elem), яка позиціонує elem залежно від position біля елемента anchor.

// Аргумент position має бути рядком з будь-яким із 3 значень:

// "top" – розмістити elem праворуч над anchor
// "right" – розмістити elem безпосередньо праворуч від anchor
// "bottom" – розмістити elem прямо під anchor
// Аргумент використовується всередині функції showNote(anchor, position, html), наданої у вихідному коді завдання, який створює елемент примітки із заданим html і показує його у заданій позиції position біля елементу anchor.



function positionAt(anchor, position, elem) {

    let anchorCoords = anchor.getBoundingClientRect();

    switch (position) {
      case "top":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
        break;

      case "right":
        elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
        elem.style.top = anchorCoords.top + "px";
        break;

      case "bottom":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
        break;
    }

  }