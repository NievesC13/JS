/**
* Crea un programa que invierta el orden de una cadena de texto
* sin usar funciones propias del lenguaje que lo hagan de forma automática.
* - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
*/ 
let cadena = 'Hola mundo'; 
// let arrayCadena = [...cadena];

function reverse(string){
    let cadenaReverse = ''; 

    if(string.count < 2){
        return console.log('Cadena no valida'); 
    }
    for(let i = string.length - 1; i >= 0; i--){
        cadenaReverse += string[i]; 
    }
    return cadenaReverse; 
}

let resultado = reverse(cadena); 
console.log(cadena, resultado); 


