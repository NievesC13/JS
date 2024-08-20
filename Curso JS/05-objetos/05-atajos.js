let obj = {}; 
let obj1 = new Object(); 

/**
 * Funcones Contrusctoras predeterminadas
 * 
 * new Array(); Crea un array
 * new String(); String
 * new Number(); 12
 * new Boolean(); false
 */

//Para funciion contructora

function Usuario(){
    this.name = "Chanchito Feliz";
}

let user = new Usuario(); 
console.log(user.constructor); 

const s1 = " 1 + 1"; 
const s2 = new String("1 + 1"); 
console.log(eval(s1), eval(s2)); 
console.log(s2.valueOf()); //Para imprimir el string/number/boolean literal sin constructor

