// Short-Circuit

// Valores Falsos / Falsy
//falso
//0
//''
// null
// undefined
//NaN

let nombre = 'Cancho';
let username = nombre || 'anonimo'; // Si no tiene un nombre se le asigna uno

console.log(username);

function fn1(){ // Para poner un filtro de que la primera funcion tuviera que ser true para ejecutar la siguiente
    console.log('Soy funcion 1');
    return false;
}

function fn2(){
    console.log('Soy funcion 2');
    return true;
}

let = fn1() && fn2();