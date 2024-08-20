/**
 * 
 * crear un algoritmo que devuelva la cantidad
 *  de numeros positivos de un array.
 */

let array = [2, 5, 7, 15, -5, -100, 55]; 

function cuantosPositivos(arr){
    let positivos = 0; 

    for(numero of arr){ // numero es el iterador de el array
        if(numero > 0){
            positivos++; 
        }
    }
    return positivos; 
}

let resultado = cuantosPositivos(array);
console.log(resultado); 