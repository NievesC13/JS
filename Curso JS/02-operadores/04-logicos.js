//AND, OR, NOT

// AND &&


console.log(true && true); 
console.log(true && false); 
console.log(false && true); 
console.log(false && false); 

let mayor = false; 
let suscrito = true; 

console.log('operador and', mayor && suscrito); // ambos tienen que ser true para devolver true

// OR 

console.log('operador or', mayor || suscrito); // Si al menos uno es true devuelve true

// NOT

console.log('operador not', !mayor); // Invierte el valor de lo que tengamos

let catalogoInfantil = !mayor;