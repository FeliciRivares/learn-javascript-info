// Напишіть код, щоб вставити <li>2</li><li>3</li> між двома <li> тут:
const one = document.getElementById('one');
one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');