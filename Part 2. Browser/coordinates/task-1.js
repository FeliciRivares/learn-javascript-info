// У iframe нижче ви можете побачити документ із зеленим «полем».

// Використовуючи JavaScript, знайдіть координати кутів відносно вікна, на які вказано стрілками.

// Для зручності в документі реалізована невелика функція, яка показує координати кліку.


// Ваш код повинен використовувати DOM для отримання чотирьох пар координат відносно вікна:

// Верхній лівий, зовнішній кут (це просто).
// Правий нижній, зовнішній кут (теж просто).
// Верхній лівий, внутрішній кут (трохи складніше).
// Правий нижній, внутрішній кут (є кілька способів, оберіть один).
// Обчислені координати повинні збігатися з тими, які повертаються клацанням миші.

// P.S. Код також повинен працювати, якщо елемент має інший розмір або рамку, тобто не прив’язаний до жодних фіксованих значень.


let clientData = elem.getBoundingClientRect();

// 1)
let cordsLeft = [clientData.left, clientData.top];

// 2)
let cordsRight = [clientData.right, clientData.bottom];

// 3)
let cordsTop = [clientData.left + field.clientLeft, clientData.top + field.clientTop ];

// 4)
let cordsBottom = [clientData.right + elem.clientRight + elem.clientWidth, clientData.bottom + elem.clientBottom + elem.clientHeight]