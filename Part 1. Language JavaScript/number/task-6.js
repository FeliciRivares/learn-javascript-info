function randomInteger(min, max) {
    let a = min - 0.5 + Math.random() * (max - min + 1);

    return Math.round(a);
}
  
alert( randomInteger(1, 3) );