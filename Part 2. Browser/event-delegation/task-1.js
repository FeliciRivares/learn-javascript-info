// Створіть дерево, яке показує/приховує дочірні вузли при кліці:


// Вимоги:

// Тільки один обробник подій (використовуйте делегування)
// Клік поза заголовком вузла (на порожньому місці) не має нічого робити.

for (let li of tree.querySelectorAll('li')) {
    let span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling); 
  }

  tree.onclick = function(event) {

    if (event.target.tagName != 'SPAN') {
      return;
    }

    let childrenContainer = event.target.parentNode.querySelector('ul');
    if (!childrenContainer) return; 

    childrenContainer.hidden = !childrenContainer.hidden;
  }
