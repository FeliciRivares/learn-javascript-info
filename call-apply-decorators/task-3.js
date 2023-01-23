// Завдання полягає в тому, щоб реалізувати декоратор debounce.

function debounce(func, ms) {
    let timeout;
    return function() {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, arguments), ms);
    };
}