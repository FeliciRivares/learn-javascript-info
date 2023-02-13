// Скорегуйте рішення попереднього завдання, щоб для позиціювання примітки використовувалася властивість position:absolute замість position:fixed.

// Це запобіжить «втечу» нотатки від елемента під час прокручування сторінки.

// Візьміть розв’язання попереднього завдання за відправну точку. Щоб перевірити прокрутку, додайте стиль <body style="height: 2000px">.


function positionAt(anchor, position, elem) {

    let anchorCoords = getCoords(anchor);

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
  function showNote(anchor, position, html) {

    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
  }
