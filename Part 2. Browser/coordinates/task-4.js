// Розширте попереднє завдання Покажіть примітку біля елемента (абсолютне позиціювання): навчіть функцію positionAt(anchor, position, elem) вставляти elem всередині anchor.

// Нові значення для position:

// top-out, right-out, bottom-out – працюють так само як і раніше, вони вставляють elem над/праворуч/під елементом anchor.
// top-in, right-in, bottom-in – вставляють elem всередину елемента anchor, та прикріпляють його до верхнього/правого/нижнього краю.
// Наприклад:

// // показує примітку над елементом blockquote
// positionAt(blockquote, "top-out", note);

// // показує примітку всередині елемента blockquote поряд з верхнім краєм
// positionAt(blockquote, "top-in", note);


function positionAt(anchor, position, elem) {

    let anchorCoords = getCoords(anchor);

    switch (position) {
      case "top-out":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
        break;

      case "right-out":
        elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
        elem.style.top = anchorCoords.top + "px";
        break;

      case "bottom-out":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
        break;

      case "top-in":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + "px";
        break;

      case "right-in":
        elem.style.width = '150px';
        elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
        elem.style.top = anchorCoords.top + "px";
        break;

      case "bottom-in":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
        break;
    }

  }
