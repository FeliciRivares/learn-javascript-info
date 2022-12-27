function makeUser() {
    return {
        name: "Іван",
        ref: this //undefined 
    };
}
  
let user = makeUser();
  
alert( user.ref.name ); 
// Який результат?
// помилка, немає такого значення 

