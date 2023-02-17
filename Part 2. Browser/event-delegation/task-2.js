// Є список повідомлень із кнопками видалення [x]. Зробіть так, щоб кнопки працювали.

// В результаті має працювати наступним чином:


// P.S. У контейнері має бути лише один прослуховувач подій, використовуйте делегування.



  container.onclick = function(event) {
    if (event.target.className != 'remove-button') return;

    let pane = event.target.closest('.pane');
    pane.remove();
  };