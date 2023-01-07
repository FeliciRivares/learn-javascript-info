function random(min, max){
    let a = (Math.random()) + "";
    
    alert(`Мінімальне число ${ min + a.slice(1) }`)
    alert(`Максимальне число ${ (max - 1) + a.slice(1) }`)
}

random(1, 5);
random(4, 17);
