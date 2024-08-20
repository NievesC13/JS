/**
 * Crear algoritmo que tome un array de 
 * objetos y devuleva un array de pares
 */

let array = [{
    id : 1, 
    name : "Nicolas",
}, {
    id : 2, 
    name : "Felipe",
}, {
    id : 3, 
    name : "Chanchito",
}]; 


let pares = [
    [1, {id: 1, name: "Nicolas"}],
    [2, {id: 2, name: "Felipe"}],
    [3, {id: 3, name: "Chanchito"}],
];

function toPairs(arr){

    let pairs = []; 

    for(idx in arr){ // hacemos la iteracion del arreglo que nos asignaron
        let elemento = arr[idx]; // asignamos el elemento del arreglo segun su indice
        pairs[idx] = [elemento.name, elemento]; // asignamos el los valores al los nuevos arreglos segun sus indices
    }
    return pairs;   
}

let resultado = toPairs(array);
console.log(resultado); 